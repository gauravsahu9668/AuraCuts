
import { Link, useParams } from "react-router-dom"
import google from "../Assets/google.png"
import { FaApple } from "react-icons/fa6";
// import SignFormShop from "../Shopkeeper/SignFormShop";
import SignupFormCust from "../Customer/SignupFormCust";
import SignFormShop from "../Shopkeeper/SignFormShop";
const SignUp = () => {
     const {id}=useParams();
  return (
    <div className="w-[100vw] h-[100vh] px-10 py-7 bg-gray-400">
       <div className=" w-full h-full flex p-4 bg-gray-700 rounded-md">
            <div className="w-[50%] h-full bg-gray-600 rounded-md">
            </div>
            <div className="w-[45%] h-full py-8 px-20 mx-auto">
                <h1 className="text-5xl font-bold text-white ">{
                   id==="shopKeeper" ? "Create your Shop" : "Create an Account"
                  }</h1>
                <div className="flex flex-row text-gray-400 mt-5 text-[1.2rem] gap-x-3">
                  <p >Already have an account?</p>
                  <Link to="/login" className="font-semibold text-gray-900 underline">login</Link>
                </div>
                <div>
                  {
                    id==="shopKeeper"? <SignFormShop></SignFormShop> : <SignupFormCust></SignupFormCust>
                  }
                   {/* <SignFormShop></SignFormShop> */}
                   {/* <SignupFormCust></SignupFormCust> */}
                </div>
                <div className="flex flex-col w-full my-5">
                <div className="flex items-center">
                    <div className="w-[40%] h-[3px] rounded-sm bg-gray-500 mr-2"></div>
                    <p className="text-gray-400 text-[1.2rem] whitespace-nowrap">Or register with</p>
                    <div className="w-[40%] h-[3px] rounded-sm bg-gray-500 ml-2"></div>
                </div>
                <div className="flex w-full justify-between mt-4 gap-x-8">
                  <div className="w-[50%] text-white text-[1.4rem] flex items-center justify-center border-gray-400 border-[2px] rounded-md p-2">
                      <img src={google} className="w-[25px] mr-3"></img>
                     <h2 className="font-semibold">Google</h2>
                  </div>
                  <div className="w-[50%] text-white text-[1.4rem] flex items-center justify-center border-gray-400 border-[2px] rounded-md p-2">
                      <FaApple className="w-[25px] mr-3"></FaApple>
                      <h2 className="font-semibold">Apple</h2>
                  </div>
                </div>
                 </div>
            </div>
       </div>
    </div>
  )
}

export default SignUp
