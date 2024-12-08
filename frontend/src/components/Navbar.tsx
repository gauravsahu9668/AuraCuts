

function Navbar(){
    return(
        <div>
            <nav className=" bg-slate-200 opacity-100 h-12 flex items-center justify-center w-full shadow-md">
            <ul className="flex flex-row items-center justify-evenly w-3/4">
              <li>
                 <a className="no-underline p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" href="https://www.geeksforgeeks.org/">Home</a>
               </li>
               <li>
                 <a className="no-underline p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" href="#about">About</a>
               </li>
               <li>
                 <a className="no-underline p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" href="#services">Services</a>
               </li>
               <li>
                 <a className="no-underline p-5 font-display uppercase hover:shadow-2xl hover:bg-white/[0.5]" href="#contact">Contact</a>
               </li>
            </ul>
            </nav>

        </div>
    )
}

export default Navbar