import { BsPersonAdd } from "react-icons/bs"
import { MdOutlinePersonOutline } from "react-icons/md"
import { useState } from "react"
import { useSelector } from "react-redux"

interface UserProps  {
    username: string
}

const User: React.FC<UserProps> = ({ username }) => {

    const user = useSelector((state) => state.user);

    const [hidden, setHidden] = useState(true);
    
    const handleMouseEnter = () => {
        setHidden(false);
    }
    const handleMouseLeave = () => {
        setHidden(true);
    }

    const handleSendRequest = async () => {
        const res = await fetch("http://localhost:3001/requests", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
                
            })
        })
    }

  return (
    <div className="relative w-[450px] h-[50px] bg-white/30 border-black border-2 flex rounded-md items-center justify-between px-4">
        <div className="w-[40px] h-[40px] p-2 m-1 rounded-full bg-white/90">
        <MdOutlinePersonOutline className="w-full h-full object-cover"/>
        </div>
        <p className="font-semibold text-[20px]">
            {username}
        </p>
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSendRequest}
        className={`w-[40px] h-[40px] p-2 m-1 rounded-full hover:opacity-80 border-black border-2 cursor-pointer`}
        >
        <BsPersonAdd 
        className="w-full h-full object-cover"
        />
        </div>
        <div 
        className={`absolute top-0 right-14 text-[10px] bg-black text-white rounded-sm p-[2px] ${hidden ? "hidden" : ""}`}>
            <p>Add friend</p>
        </div>
    </div>
  )
}

export default User
