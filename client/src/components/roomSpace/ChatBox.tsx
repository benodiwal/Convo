import { AiOutlineSend } from "react-icons/ai"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { GrGallery } from "react-icons/gr"

const ChatBox = () => {
  return (
    <div className="w-[530px] relative h-screen bg-white/20 border-r-2 border-white flex flex-col px-2 py-1 gap-1 z-10">
        
        {/* Title */}
        <div className="text-white text-[25px] font-semibold items-center text-center border-b-2 pb-2 border-white">
            Chat Box
        </div>

        {/* Chats */}
        <div className="flex-1 w-full">

        </div>

        {/* Input */}
        <div className="flex items-center gap-1 py-1 px-2">
            <HiOutlineEmojiHappy className="text-[40px] text-white hover:bg-white/10 rounded-lg px-2 py-1"/>
            <input type="text" placeholder="Message ..." className="bg-white/20 flex-1 text-[18px] rounded-lg px-2 py-1 outline-none w-full text-black" />
            <GrGallery className="text-[40px] hover:bg-white/10 rounded-lg px-2 py-1"/>
            <AiOutlineSend className="text-[40px] text-black bg-white rounded-lg px-2 py-1 hover:opacity-80"/>
        </div>

    </div>
  )
}

export default ChatBox
