
const Login=()=>{
    return (
        <div className="flex h-screen items-center font-display justify-center bg-gradient-to-br from-[#8360df] to-pink-300">
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
              <h2 className="text-3xl font-semibold font-display text-center mb-8 text-[#a953d1]">USER LOGIN</h2>
              <form className="space-y-4 px-24">
                {/* Username Input */}
                <div className="flex-row justify-center items-center">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="w-[50%] py-2 bg-gradient-to-r from-purple-700 to-blue-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                    LOGIN
                    </button>
                </div>

                {/*Create Account*/}
                <div className="text-[15px] flex justify-center space-x-1">
                    <p>Don't have an account? </p>
                    <a href="" className="text-[#a953d1] hover:underline">Create Your Account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
export default Login