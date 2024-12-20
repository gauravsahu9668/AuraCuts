import { Link } from "react-router-dom"
export default function Navbar(){
  return(
      <div className="sticky top-0 z-10 w-full bg-slate-50 min-w-[1200px] opacity-100 h-16 flex items-center justify-end shadow-md">
          <img src="../src/Assets/Logo.png" alt="" className="w-fit size-20 absolute left-0"/>
          <h4 className="absolute cursor-default left-36 text-slate-900 font-Ribeye font-medium text-3xl">Aura Cuts</h4>
          <div className=" flex  space-x-6 absolute right-4">
                <button className="w-32 hover:text-[17px]"><a className="no-underline  p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5] " href="/#">Home</a>
                </button>
                <button className="w-32 hover:text-[17px]"><a className="no-underline  p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5] " href="/#Section2">About</a>
                </button>
                <button className="w-32 hover:text-[17px]"><a className="no-underline  p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5] " href="/#Section3">Services</a>
                </button>
                <button  className="w-32 hover:text-[17px]"><a className="no-underline  p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5] " href="/Contact">Contact</a>
                </button>
             </div>  
      </div>
  )
}