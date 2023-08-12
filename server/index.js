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

/*  */
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

    });

    /* Answer Channel */
    socket.on("answer", (targetUserId, answer) => {

    });

    /* IceCandidate Channel */
    socket.on("iceCandidate", (targetUserId, candidate) => {

    });

    /* Message Channel */
    socket.on("sendMessage", () => {
      
    });
    /* Disconnect Channel */
    socket.on("disconnect", () => {

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