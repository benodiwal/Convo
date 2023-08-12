import Search from "../Search"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-[black] to-[white]">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <div className="sm:flex flex-col items-center gap-10 hidden mt-7">
          <div>
            <p className="text-[50px] font-bold">Convo</p>
            <p className="text-[20px] font-semibold text-white">Connecting ❤️❤️</p>
          </div>
        <img src="/img.webp" alt="img" className="w-[520px] h-[300px]"/>
        </div>
        }/>
        <Route path="/search" element={<Search />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default Home
