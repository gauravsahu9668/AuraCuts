import Buttons from "../Buttons"
import { Link } from "react-router-dom"
import Contact from "../ContactUs/Contact"
export default function Section1(){
    return(
        <div className="w-[1200px] flex flex-col items-center justify-center relative " id="Section1">
          <img src="../src/Assets/w.png" alt="" className="w-full "/>
          <span className="cursor-default font-serif absolute left-32 text-slate-800 text-9xl mr-64 mb-96 pb-48">Welcome to<br/><h2 className="text-8xl">Aura Cuts</h2></span>
          <p className="cursor-default font-serif absolute mt-24 mr-96 pb-44 left-32 text-2xl font-medium" >
            Discover barber shops near you, view their services,<br/> and pick a 
            time slot that fits your schedule perfectly.<br/> With Aura Cut, you have the freedom to choose<br/>
            your favorite barber and book a haircut or grooming<br/>session in just a few clicks.</p>
          <Buttons id="/Contact" description="Contact Us" bottom="bottom-80" left="left-32" color="bg-orange"/>
          <Buttons id="#Section2" description="Explore More" bottom="bottom-80" left="left-76" color="bg-slate-900" />
        </div>
    )
}