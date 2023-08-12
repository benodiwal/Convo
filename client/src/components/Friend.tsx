import { AiOutlineAudio } from "react-icons/ai"
import { BsCameraVideo } from "react-icons/bs"
import { FiMonitor } from "react-icons/fi"

const Friend = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-slate-400/20 rounded-lg border-b-[1px] border-black">
        
        {/* Image */}
        <img src="me.jpg" alt="avatar" className="w-[40px] h-[40px] bg-black rounded-full object-cover"/>
        {/* Name */}
        <div>
            <p className="font-semibold sm:text-[22px]">Sachin Beniwal</p>
        </div>
        {/* Options */}
        <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] rounded-full px-1 py-1 hover:bg-gray-100/60">
            <AiOutlineAudio className="text-black w-full h-full"/>
            </div>

            <div className="w-[30px] h-[30px] rounded-full px-1 py-1  hover:bg-gray-100/60">
            <BsCameraVideo className="text-black w-[22px] h-[22px] "/>
            </div>

            <div className="w-[30px] h-[30px] rounded-full px-1 py-1  hover:bg-gray-100/60">
            <FiMonitor className="text-black w-[22px] h-[22px] "/>    
            </div>
        
        </div>

    </div>
  )
}

export default Friend
