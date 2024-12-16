import Role from "../Role";
import { Link } from "react-router-dom"
export default function Section3(){
    return(
        <div className="w-[1200px] h-screen relative" id="Section3">
             <h1 className="mt-11 text-center text-6xl cursor-default ">Explore Our Services</h1>
             <p className=" mt-12 text-gray-600 text-center cursor-default text-md">Discover a world of convenience with Aura Cut!, Whether you're a customer 
                <br/>looking for the perfect haircut or a shopkeeper managing your salon bookings,<br/> we have tailored solutions for everyone</p>
                <div ><Link to={'/signup/shopKeeper'}><Role img="../src/Assets/barber.jpeg" color="bg-sky hover:bg-blue-400" size="ml-56 mt-16" bsize="absolute top-52 mt-4 ml-10" hsize="absolute top-44" heading="Login as Shopkeeper" body="Streamline your bookings and manage your shop efficiently."/></Link></div>
                <Link to={"/signup/customer"}><Role img="../src/Assets/customer1.png" color="bg-light-Orange hover:bg-red-400" bsize="absolute top-52 mt-4 text-center w-44" hsize="absolute top-44" size="right-56 mt-16" heading="Login as Customer" body=" Book your next haircut or grooming session with ease."/></Link>
        </div>
    )
}