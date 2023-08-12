import Footer from "../components/Footer"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setLogin } from "../state"

type VARIANT = "login" | "register"

const Auth = () => {

    const [ variant, setVariant ] = useState<VARIANT>("login");
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const dispatch = useDispatch();

    const handleRegister = async () => {

        try {
            await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password })
            })

            handleLogin();
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async () => {

        if (email && password) {
            try {

                const response = await fetch("http://localhost:3001/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (data) {
                   
                    setEmail("");
                    setPassword("");

                    dispatch(
                        setLogin({
                            user: data.user,
                            token: data.token,
                        })
                    );

                    navigate("/");
                }


            } catch (error) {
                console.log("Error in login: ", error);
                
            }
        }   
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (variant === "login") {
            handleLogin();
        } else {
            handleRegister();
        }
    }

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-[black] to-[white] overflow-hidden flex justify-center gap-5">

         <div className={`w-[300px] ${variant === "login" ? "h-[300px]" : "h-[350px]"} mt-32 rounded-md bg-white/50 border-[1px] flex flex-col items-center`}>
            
            <p className="font-semibold text-[28px] mt-2">
                {
                    variant === "login" ? "LOGIN" : "REGISTER"
                }
            </p>

            <div className="h-[1px] w-full bg-white my-2"></div>

            <form 
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 mt-2">
            
            {
                variant === "register" && (
                    <input 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text" 
                    placeholder="Username" 
                    className="py-2 px-4 rounded-md outline-none" />
                )
            }
           
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text" 
            placeholder="Email" 
            className="py-2 px-4 rounded-md outline-none"/>
            
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password" 
            className="py-2 px-4 rounded-md outline-none "/>
            
            <button type="submit" className="bg-red-500 hover:bg-opacity-80 hover:outline-none">
                {
                    variant === "login" ? "Login" : "Sign up"
                }
            </button>

            </form>

            {
                variant === "login" && (
                    <p className="mt-4">
                    First time using Convo?
    
                    <span>  </span>
    
                    <span 
                    onClick={() => setVariant("register")}
                    className="hover:underline cursor-pointer">
                        Register
                    </span>
                    </p>
                )
            }

            {
                variant === "register" && (
                    <p className="mt-4">
                    Already on Convo?
    
                    <span>  </span>
    
                    <span 
                    onClick={() => setVariant("login")}
                    className="hover:underline cursor-pointer">
                        Sign in
                    </span>
                    </p>
                )
            }

         </div>

        <div className="font-bold text-gray-800 text-[60px] mt-10 ml-10 max-w-[350px] text-center">
            Convo
            <p className="text-[27px] text-black mt-10">
                Welcome to our login page!!
            </p>

            <div className="h-[1px] w-full bg-white/70 mt-3"/>

            <p className="text-[14px] mt-4 text-white">
            Unlock a world of seamless communication with features like video calls, audio calls, and text messages. Collaborate effortlessly in group rooms or have private conversations in individual rooms. Experience secure and user-friendly login to connect with friends, colleagues, and loved ones. Join us now and redefine how you stay connected.
            </p>
        </div>



         <Footer />
    </div>
  )
}

export default Auth
