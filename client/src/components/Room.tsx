import { Link } from "react-router-dom"

const Room = () => {
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

        <div className="mt-4 text-center border-b-black border-b-2">
            <p className="text-[40px] font-bold">Rooms</p>
        </div>

        <div className="flex items-center gap-10 justify-around mt-10">
            {/* Create a room */}
            <div className="flex flex-col items-center text-black">
                <p className="font-semibold text-[30px]">Create a room</p>
                <p>Organize the room</p>

                <input type="text" placeholder="Choose a strong room ID" className="py-2 px-3 mt-10 outline-none rounded-lg"/>
                <button className="mt-5">Create</button>
            </div>

            {/* Enter  a room */}
            <div className="flex flex-col items-center text-black">
                <p className="font-semibold text-[30px]">Join a room</p>
                <p>Become a member of the room</p>
                <input type="text" placeholder="Enter the room ID" className="py-2 px-3 mt-10 outline-none rounded-lg"/>
                <button className="mt-5">Join</button>
            </div>

        </div>

        {/* Recent joined rooms */}

        {/* What is a room? */}
        {/* <div className="mt-5 mx-5">
            <p className="text-black font-semibold text-[25px]">What is a room?</p>
            <p className="text-white">
            a room is a virtual gathering space where you can connect with others through video chat, audio chat, and screen sharing. Whether you're hosting a small meeting or a large group discussion, our rooms accommodate any number of people, allowing seamless collaboration and communication
            </p>
            <p>
            🎉 Step into our virtual room and embark on a delightful journey filled with lively conversations, shared laughter, and memorable connections. Make yourself at home and relish the moments as you connect with others in a space designed for joyful interactions 🎉
            </p>
        </div> */}

    </div>
  )
}

export default Room
