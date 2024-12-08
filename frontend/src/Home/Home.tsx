import Navbar from "../components/Navbar"
import LandingPage from "../components/LandingPage"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div>
          <p>You have two options sign up as shopkeeper or customer</p>
         <Link to={'/signup/shopKeeper'} className="text-[5xl] font-bold ">ShopKeeper</Link>
         <Link to={"/signup/customer"} className="text-[5xl] ml-10 font-bold">Customer</Link>
       </div>
      <LandingPage></LandingPage>
    </div>
  )
}

export default Home
