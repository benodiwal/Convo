import Audio from "./components/Audio"
import Chat from "./components/Chat"
import Friends from "./components/Friends"
import Home from "./components/Home"
import Room from "./components/Room"
import RoomSpace from "./components/roomSpace/RoomSpace"
import { Routes, Route, Navigate} from "react-router-dom"
import Video from "./components/Video"
import Auth from "./auth/Auth"
import { useSelector } from "react-redux"

const App = () => {
  const user = useSelector((state) => state.user);

  const isLoggedIn = user && user.token;

  return (
   <div>
    <Routes>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/*" element={isLoggedIn ? <Home /> : <Navigate to="/auth" />} />
      <Route path="/buddies" element={<Friends />}/>
      <Route path="/rooms" element={<Room />}/>
      <Route path="/room/:id" element={<RoomSpace />}/>
      <Route path="/chats" element={<Chat />}/>
      <Route path="/audio" element={<Audio />}/>
      <Route path="/video/:roomId" element={<Video />}/>
    </Routes>
   </div>
  )
}

export default App