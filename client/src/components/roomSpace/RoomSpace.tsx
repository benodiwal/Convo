import { AiFillAudio } from "react-icons/ai"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { BsFillCameraVideoFill } from "react-icons/bs"
import { HiOutlineVideoCameraSlash } from "react-icons/hi2"
import { SlScreenDesktop } from "react-icons/sl"
import { CgScreen } from "react-icons/cg"
import { BsChatSquareDotsFill } from "react-icons/bs"
import { MdOutlineGroups } from "react-icons/md"
import { FiMoreHorizontal } from "react-icons/fi" 
import { IoIosOptions } from "react-icons/io"
import ChatBox from "./ChatBox"

const RoomSpace = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden">

      <div className="absolute left-2 border-2 border-white h-[30px] w-[40px] rounded-lg text-white px-2 py-1 z-1 top-2 text-center flex items-center justify-center">
        213
      </div>

      <div className="absolute z-1 right-[120px] top-2">
        <BsChatSquareDotsFill className="text-[40px] text-white hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
      </div>

      <div className="absolute z-1 right-[80px] top-[70px]">
        <MdOutlineGroups className="text-[40px] text-white hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
      </div>

      <div className="absolute z-1 right-2 top-[100px]">
        <FiMoreHorizontal className="text-[40px] text-white hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
      </div>

      <div className="absolute z-1 right-2 top-1">
        <IoIosOptions className="text-[40px] text-white hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
      </div>

      {/* Chat Box */}
      <ChatBox />

      {/* White board / Screen stuff */}

      {/* Participants */}
      <div className="absolute bottom-2 right-1 w-[310px] mx-h-[420px] h-[420px] bg-white/20 rounded-md">
        <p className="border-b-2 border-white py-1 text-center text-white font-semibold text-[17px]">Members</p>
        {/* Members */}

      </div>

      {/* Videos(only who allowed) */}

      {/* User video */}

      {/* Controls */}
      <div className="absolute bottom-2 left-0 right-0 mx-10 px-2 py-1 flex items-center gap-4 justify-center">
        <AiFillAudio className="text-[40px] text-blue-500 hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
        <AiOutlineAudioMuted className="text-[40px] text-red-500 hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
        <BsFillCameraVideoFill className="text-[40px] text-blue-500 hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
        <HiOutlineVideoCameraSlash className="text-[40px] text-red-500 hover:bg-gray-300/30 p-1 rounded-xl transition duration-200"/>
        <SlScreenDesktop className="text-[40px] hover:bg-gray-300/30 p-1 rounded-xl transition duration-200 text-white"/>
      </div>

    </div>
  )
}

export default RoomSpace
