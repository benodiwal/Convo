import Friend from "./Friend"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

type ToggleProps = "Buddies" | "Requests"

const Friends = () => {

    const [toggle, setToggle ] = useState<ToggleProps>("Buddies");

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gradient-to-tl from-[black] to-[white]">

        <Link to="/">
        <div className="absolute top-2 left-3 hover:opacity-90">
            <img src="/logo.png" alt="logo" className="w-[40px] h-[40px]"/>
        </div>
        </Link>

        <div className="absolute top-2 right-3">
            <p className="text-[20px] font-semibold">Convo</p>
        </div>

        <div className="flex items-center justify-center gap-40 text-[25px] my-4 border-b-2 border-black pb-2">
            <p
            onClick={() => setToggle("Buddies")} 
            className={`${toggle === "Buddies" ? "text-black bg-slate-400/30" : "text-black/30"} cursor-pointer rounded-lg hover:bg-slate-400/30 py-1 px-2 transition-all duration-200`}>Buddies</p>
            <p 
            onClick={() => setToggle("Requests")}
            className={`${toggle === "Requests" ? "text-black bg-slate-400/30" : "text-black/30"} cursor-pointer rounded-lg hover:bg-slate-400/30 py-1 px-2 transition-all duration-200 relative`}>
                Requests
                <div className="absolute top-0 right-0 text-[12px] bg-red-500 rounded-full w-[15px] h-[15px] items-center justify-center p-1 opacity-100 hidden">
                    12
                </div>
            </p>
        </div>

        <AnimatePresence>
        {
            toggle === "Buddies" && (
                <div>
                <Friend />    
                <Friend />    
                <Friend /> 
                </div>    
            )
        }
        
        {
            toggle === "Requests" && (
                <div></div>
            )
        }

        </AnimatePresence>
      
    </div>
  )
}

export default Friends
