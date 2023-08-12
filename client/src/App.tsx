import Audio from "./components/Audio"
import Chat from "./components/Chat"
import Friends from "./components/Friends"
import Home from "./components/Home"
import Room from "./components/Room"
import RoomSpace from "./components/roomSpace/RoomSpace"
import ScreenSharing from "./components/ScreenSharing"
import { Routes, Route} from "react-router-dom"
import Video from "./components/Video"
import Auth from "./auth/Auth"

const App = () => {
 
  return (
   <div>
    <Routes>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/*" element={<Home />}/>
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
