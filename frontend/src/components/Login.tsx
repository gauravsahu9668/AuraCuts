import{Link,useParams} from "react-router-dom"
import React,{useState} from 'react';

const Login=()=>{
    const {id}=useParams();
    const goBack = () => {
        window.history.back();
    };

      const [selectedButton, setSelectedButton] = useState<string|null>(null);

    
    return (
        <div className="flex min-h-[800px] h-screen min-w-[1589px] items-center font-display justify-center cursor-default bg-gradient-to-br from-[#8360df] to-pink-300">
          <div className="flex w-[1190px] h-[630px] mt-8 relative bg-white rounded- shadow-slate-800 shadow-2xl overflow-hidden">
            {/* Welcome Section */}
            <div className=" p-20 h-full absolute left-0 w-2/4 px-36 bg-gradient-to-br  from-[#8360df] to-pink-300 text-white hover:cursor-default">
                <h1 className="text-2xl absolute w-fit left-44 mt-24 font-display font-medium">Welcome to website</h1>
                <p className="text-sm absolute w-fit left-14 mt-40 leading-relaxed text-start ">
                Connecting Customers with Style and Shopkeepers with Success. Whether You're Here to Book the Perfect Cut or Manage Your Salon Effortlessly, 
                We've Got You Covered. Step In and Experience Grooming Made Simple!"
                </p>
            </div>
    
            {/* Login Section */}
            <div  className="right-0 absolute w-2/4 p-8 flex flex-col justify-center cursor-default">
              {/* <h1 className="text-5xl font-medium font-display text-center mb-8 text-[#8929b5]">User Login</h1> */}
              <h1 className="text-4xl font-medium font-display text-center mt-5 mr-7 text-[#8929b5]">User Login</h1>

              <form className="absolute top-32 left-14 space-y-7 px-12">
                {/* customer/shopkeeper */}
                <div className="flex space-x-4 justify-between" >
                {/* Button 1 */}
                    <button
                        onClick={() => setSelectedButton("customer")}
                        className={`customer w-[50%] px-4 py-2 rounded-full ${
                        selectedButton === "customer"
                            ? " text-white bg-gradient-to-r from-purple-600 to-blue-500"
                            : "bg-[#a79eec]/[0.1] border text-gray-700 hover:bg-gray-400"
                        }`}
                    >
                        Customer
                    </button>

                {/* Button 2 */}
                    <button
                        onClick={() => setSelectedButton("shopkeeper")}
                        className={`shopkeeper w-[50%] px-4 py-2 rounded-full ${
                        selectedButton === "shopkeeper"
                            ? " text-white  bg-gradient-to-r from-blue-500 to-purple-600"
                            : "bg-[#a79eec]/[0.1] border text-gray-700  hover:bg-gray-400"
                        }`}
                    >
                        Shopkeeper
                    </button>
                </div>


                {/* Username Input */}
                <div className="flex-row justify-center items-center">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 border bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
    
                {/* Password Input */}
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className=" w-full px-4 py-2 border bg-[#a79eec]/[0.1] border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
    
                {/* Options */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 focus:ring-blue-400 focus:outline-none"
                    />
                    Remember
                  </label>
                  <a href="#" className=" hover:underline">
                    Forgot password?
                  </a>
                </div>
    
                {/* Login Button */}
                <div className="flex justify-center">
                    <button
                    type="submit"
                    className="w-[50%] py-3 bg-gradient-to-r from-purple-700 to-blue-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                    LOGIN
                    </button>
                </div>

                {/*Create Account*/}
                <div className=" text-[15px] flex justify-center space-x-1">
                    <p>Don't have an account? </p>
                    <p onClick={goBack}
                    className="font-semibold text-gray-900 underline hover:cursor-pointer">
                        Create Your Account
                    </p>
                    {/* {id==="shopKeeper"?<Link to="/signup/shopkeeper" className="font-semibold text-gray-900 underline">Create Your Account</Link> :<Link to="/signup/customer" className="font-semibold text-gray-900 underline">Create Your Account</Link>} */}
                </div>
              </form>
            </div>
          </div>
        </div>
    );
};    
export default Login