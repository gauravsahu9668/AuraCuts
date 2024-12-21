
import { Link, useParams } from "react-router-dom"
import google from "../Assets/google.png"
import { FaApple } from "react-icons/fa6";
// import SignFormShop from "../Shopkeeper/SignFormShop";
import SignupFormCust from "../Customer/SignupFormCust";
import SignFormShop from "../Shopkeeper/SignFormShop";
import Navbar from "./Navbar";
const SignUp = () => {
     const {id}=useParams();
  return (
    <>
    <Navbar/>
    <div className=" top-0 flex min-h-[800px] h-screen min-w-fit items-center font-display justify-center cursor-default bg-gradient-to-br from-[#8360df] to-pink-300">
        <div className="flex bottom-8 w-[1190px] h-[630px] relative bg-white rounded- shadow-slate-800 shadow-2xl overflow-hidden">
          {/* Welcome Section */}
            <div className=" p-20 h-full absolute left-0 w-2/4 px-36 bg-gradient-to-br  from-[#8360df] to-pink-300 text-white cursor-default">
                <h1 className="text-2xl absolute w-fit left-44 mt-24 font-display font-medium">Welcome to website</h1>
                <p className="text-sm absolute w-fit left-14 mt-40 leading-relaxed text-start ">
                Connecting Customers with Style and Shopkeepers with Success. Whether You're Here to Book the Perfect Cut or Manage Your Salon Effortlessly, We've Got You Covered. Step In and Experience Grooming Made Simple!"
                </p>
            </div>
            {/*sign up section */}
            <div className="right-0 absolute w-2/4 p-8 flex flex-col justify-center cursor-default">
              <h1 className="text-3xl  top-6 font-medium font-display text-center  text-[#8929b5]">{
                id==="shopKeeper" ? "Create your Shop" : "Create an Account"}
              </h1>
                
              <div>
                {
                  id==="shopKeeper"? <SignFormShop></SignFormShop> : <SignupFormCust></SignupFormCust>
                }
              </div>
              <div className="flex scale-[80%] absolute flex-col w-full top-[430px] mt-11 right-3 ">
                <div className="flex items-center cursor-default">
                    <div className="w-[40%] h-[3px] rounded-sm bg-gray-500 mr-2"></div>
                    <p className="text-gray-400 text-[1.2rem] whitespace-nowrap">Or register with</p>
                    <div className="w-[40%] h-[3px] rounded-sm bg-gray-500 ml-2"></div>
                </div>
                <div className="flex w-full justify-between mt-4 gap-x-8">
                  <div className="group w-[50%]  text-[1.4rem] flex items-center  justify-center border-gray-400 border-[2px] rounded-md p-2 hover:cursor-pointer hover:bg-slate-300/[0.3]">
                      <img src={google} className="w-[25px] mr-2"></img>
                      <h2 className="font-medium text-[black]/[0.8] group-hover:text-black">Google</h2>
                  </div>
                  <div className="group w-[50%]  text-[1.4rem] flex items-center justify-center text-center border-gray-400 border-[2px]  hover:cursor-pointer rounded-md p-2 hover:bg-slate-300/[0.3]">
                      <FaApple className="w-[30px] mr-0 mb-0.5"></FaApple>
                      <h2 className="font-medium text-[black]/[0.8] group-hover:text-black">Apple</h2>
                  </div>
                </div>
              </div>
                <div className="text-[15px] absolute top-[430px] right-44 flex justify-center space-x-1 hover:cursor-default">
                  <p>Already have an account</p>
                  <Link to="/login" className="font-semibold text-gray-900 underline">login</Link> 
                </div>
            </div>
       </div>
    </div>
    </>
    
  )
}

export default SignUp
