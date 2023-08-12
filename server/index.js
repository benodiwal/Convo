import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express();

/* to get the env variables */
dotenv.config()

/* Middlewares */
app.use(express.static('public'))
app.use(express.json())
app.use(cors({
    origin: '*'
  }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const http = createServer(app);
const io = new Server(http, {
    cors: true
});

/* Users */
const users = {};

/* Signaling Server */
io.on("connection", (socket) => {
    console.log("New user connected: ", socket.id);

    /* Join channel */
    socket.on("join", (roomId, userId) => {
      console.log(`A user joined in ${roomId} with userId `);
      socket.join(roomId);
      users[socket.id] = { roomId, userId };
      socket.emit("userConnected", userId);
    });

    /* Offer Channel */
    socket.on("offer", (targetUserId, offer) => {
      const targetSocket = Object.keys(users).find(
        (socketId) => users[socketId].userId == targetUserId
    );
    if (targetSocket) {
        io.to(targetSocket).emit('incomingOffer', offer, users[socket.id].userId);
    }
    });

    /* Answer Channel */
    socket.on("answer", (targetUserId, answer) => {
      const targetSocket = Object.keys(users).find(
        (socketId) => users[socketId].userId == targetUserId
    );
    if (targetSocket) {
        io.to(targetSocket).emit('incomingAnswer', answer, users[socket.id].userId);
    }
    });

    /* IceCandidate Channel */
    socket.on("iceCandidate", (targetUserId, candidate) => {
      const targetSocket = Object.keys(users).find(
        (socketId) => users[socketId].userId == targetUserId
    );
    if (targetSocket) {
        io.to(targetSocket).emit('incomingIceCandidate', candidate);
    }
    });

    /* Message Channel */
    socket.on("sendMessage", (roomId, message) => {
      io.to(roomId).emit('receiveMessage', users[socket.id].userId, message);
    });

    /* Disconnect Channel */
    socket.on("disconnect", () => {
      console.log('User disconnected');
      if (users[socket.id]) {
          const { roomId, userId } = users[socket.id];
          delete users[socket.id];
          io.to(roomId).emit('userDisconnected', userId);
      }
    });

  });


/* PORT */
const PORT = process.env.PORT || 8080

/* Setting up mongoose */
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('mongoDb connected');
    http.listen(PORT, () => {
      console.log(`Server started at ${PORT}`);
  });
})
.catch((err) => `Error in connecting mongoDb: ${err}`)