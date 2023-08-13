import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../state";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(
            setLogout()
        );

        navigate("/auth");
    }

    return (
        <div className="bg-gradient-to-tr from-black to-white h-screen w-screen">

        <Link to="/">
        <div className="absolute top-2 left-3 hover:opacity-90">
            <img src="/logo.png" alt="logo" className="w-[40px] h-[40px]"/>
        </div>
        </Link>

        <div className="absolute top-2 right-3">
            <p className="text-[20px] font-semibold">Convo</p>
        </div>

        <div className="text-center border-b-black border-b-2">
            <p className="text-[40px] font-bold">Profile</p>
        </div>

        <div className="mt-4 mx-10 border-2 border-black p-5 rounded-md text-black text-center">
            <p>
                Username: {user.username}
            </p>
        </div>

        <div className="mt-4 border-2 border-black p-5 mx-10 rounded-md text-black text-center">
            <p>
                Email: {user.email}
            </p>
        </div>

        <div className="mt-4 flex justify-center">
            <button onClick={handleLogout}>
                Log out
            </button>
        </div>
        
        </div>
    )
}

export default Profile