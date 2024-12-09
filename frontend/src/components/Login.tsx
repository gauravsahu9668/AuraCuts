import{Link,useParams} from "react-router-dom"
import React,{useState} from 'react';

const Login=()=>{
    const {id}=useParams();
    const goBack = () => {
        window.history.back();
    };

      const [selectedButton, setSelectedButton] = useState<string|null>(null);

    
    return (
        <div className="flex h-screen items-center font-display justify-center cursor-default bg-gradient-to-br from-[#8360df] to-pink-300">
          <div className="flex w-[75%] h-[70%] bg-white rounded- shadow-slate-800 shadow-2xl overflow-hidden">
            {/* Welcome Section */}
            <div className="flex-1 p-20 px-36 justify-center bg-gradient-to-br  from-[#8360df] to-pink-300 text-white">
              <h1 className="text-4xl text-center mt-28 mb-6 font-display font-medium text-[50px]">Welcome to website</h1>
              <p className="text-lg leading-relaxed text-left ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
    
            {/* Login Section */}
            <div className="flex-1 p-8 flex flex-col justify-center ">
              {/* <h1 className="text-5xl font-medium font-display text-center mb-8 text-[#8929b5]">User Login</h1> */}
              <h1 className="text-5xl font-medium font-display text-center mb-8 text-[#8929b5]">User Login</h1>

              <form className="space-y-4 px-12">
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
                <div className="text-[15px] flex justify-center space-x-1">
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