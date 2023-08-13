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
import Profile from "./components/Profile"

const App = () => {
  
  const token = useSelector((state) => state.token);

  const isLoggedIn = token && token;
  
  return (
   <div>
    <Routes>
      <Route path="/auth" element={!isLoggedIn ? <Auth /> : <Navigate to="/" />}/>
      <Route path="/buddies" element={<Friends />}/>
      <Route path="/rooms" element={<Room />}/>
      <Route path="/room/:id" element={<RoomSpace />}/>
      <Route path="/chats" element={<Chat />}/>
      <Route path="/audio" element={<Audio />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/video/:roomId" element={<Video />}/>
      <Route path="/*" element={isLoggedIn ? <Home /> : <Navigate to="/auth" />} />
    </Routes>
   </div>
  )
}

export default App