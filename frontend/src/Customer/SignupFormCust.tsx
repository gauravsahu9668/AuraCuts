const SignupFormCust = () => {
  return (
    <div>
      <form className="space-y-4 px-12">
                {/* Username Input */}
                <div className="flex justify-between">
                  <div className="flex-row justify-center items-center">
                     <input
                     type="text"
                     placeholder="First Name"
                     className=" px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                     required
                     />
                  </div>
                  <div className="flex-row justify-center items-center">
                     <input
                     type="text"
                     placeholder="Last Name"
                     className=" px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                     required
                     />
                  </div>

                </div>
                {/* email */}
                <div className="flex-row justify-center items-center">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                {/* phone number */}
                <div className="flex-row justify-center items-center">
                  <input
                    type="text"
                    placeholder="Phone Number"
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
                {/* confirm password */}
                <div className="flex-row justify-center items-center">
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
    
                {/* signup Button */}
                <div className="flex justify-center pt-2">
                    <button
                    type="submit"
                    className="w-[50%] py-3 bg-gradient-to-r from-purple-700 to-blue-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                    SIGN UP
                    </button>
                </div>

                
              </form>
               
      
    </div>
  )
}

export default SignupFormCust
