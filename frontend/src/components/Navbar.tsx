import { Link } from "react-router-dom"
export default function Navbar(){
  return(
      <div className="fixed z-10 bg-slate-50 opacity-100 h-16 flex items-center justify-end w-full shadow-md">
          <img src="../src/Assets/Logo.png" alt="" className="w-fit size-20 absolute left-0"/>
          <h4 className="absolute cursor-default left-36 text-slate-900 font-Ribeye font-medium text-3xl">Aura Cuts</h4>
          <ul className=" flex flex-row items-center justify-end w-3/4 ">
              <Link className="no-underline p-5 m-5  font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" to={"/"}>Home</Link>
             <li>
             <Link className="no-underline p-5 m-5  font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" to={"/about"}>About</Link>
             </li>
             <li>
             <Link className="no-underline p-5 m-5  font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" to={"/services"}>Services</Link>
             </li>
             <li>
             <Link className="no-underline p-5 m-5  font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" to={"/contact"}>Contact</Link>
             </li>
          </ul>
      </div>
  )
}