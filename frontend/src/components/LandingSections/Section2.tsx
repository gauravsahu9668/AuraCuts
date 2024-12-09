import Points from "../Points"
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
export default function Section2(){
    return(
        <div className="w-3/4 flex flex-col relative items-center justify-center" id="Section2">
          <img src="../src/Assets/y.png" alt="" className="w-full"/>
          <p className="cursor-default absolute text-slate-800 font-serif text-6xl left-32 top-36">Why Choose Aura Cuts?</p>
          <div className="cursor-default absolute font-serif text-2xl left-32 top-60">At Aura Cut, we specialize in making your grooming<br/>
           experience effortless and enjoyable.</div>
            <Points  size="bottom-64 mt-5" heading={<p className="cursor-default text-2xl">Hassle-Free Booking</p>} icon={<IoCalendarOutline className="size-5"/>} body={<p className="cursor-default bottom-0 ml-3 text-lg">Say goodbye to long waits! Book your preferred time slot with <br/>ease,
            directly from our platform. Whether it's a quick trim or a <br/> full makeover, Aura Cut fits into your schedule.</p>}/>
            <Points size="bottom-32 mt-5" heading={<p className="cursor-default text-2xl ">Convenient Locations</p>} icon={<MdOutlineLocationOn className="size-6"/>} body={<p className="bottom-0 ml-3 cursor-default text-lg">Find barber shops near you with just a click.Our location-based
                <br/> search ensures you’re never too far from a quality grooming experience.</p>}></Points>
        </div>
    )
}