import { useSelector } from "react-redux"

const Footer = () => {

  const user  = useSelector((state) => state.user);

  return (
    <div className="absolute bottom-0 py-2 flex justify-between items-center px-4 w-full text-black border-t-2 border-black">
      <p className="text-white">
        Hey, {user ? user.username : "there"}
      </p>
     <p>
      Developed with ❤️ by Sachin
     </p>    
    </div>
  )
}

export default Footer
