
const SignFormShop = () => {
  return (
    <div>
      <form className="space-y-4 px-12">
                {/* Username Input */}
                <div className="flex justify-between">
                  <div className="flex-row justify-center items-center">
                     <input
                     type="text"
                     placeholder="First Name"
                     className="w- px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                     required
                     />
                  </div>
                  <div className="flex-row justify-center items-center">
                     <input
                     type="text"
                     placeholder="Last Name"
                     className="w- px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
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
    
                {/* Login Button */}
                <div className="flex justify-center pt-2">
                    <button
                    type="submit"
                    className="w-[50%] py-3 bg-gradient-to-r from-purple-700 to-blue-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                    SIGN UP
                    </button>
                </div>

                
              </form>
      {/* <form>
         <div className="flex flex-row gap-x-4 w-full mt-5">
            <div className="w-[50%]  border-gray-500 rounded-md">
                <input id="firstname" required placeholder="First Name" type="string" className="w-full p-2 rounded-md   h-full  border-gray-700 outline-none bg-slate-500 text-white font-semibold text-[18px]"></input>
            </div>
            <div className="w-[50%] border-gray-500 rounded-md">
                <input id="lastname" required placeholder="Last Name" type="string" className="w-full p-2 rounded-md  h-full  border-gray-700 outline-none bg-slate-500 text-white font-semibold text-[18px]"></input>
            </div>
         </div>
         <div className=" w-full mt-3  border-gray-500 rounded-md">
            <input id="shopname" required placeholder="Shop Name" type="string" className="w-full p-2 rounded-md  h-full  border-gray-700 outline-none bg-slate-500 text-white font-semibold text-[18px]"></input>
         </div>
         <div className=" w-full mt-3  border-gray-500 rounded-md">
            <input id="email" required placeholder="Email" type="email" className="w-full p-2 rounded-md   h-full  border-gray-700 outline-none bg-slate-500 text-white font-semibold text-[18px]"></input>
         </div>
         <div className=" w-full mt-3  border-gray-500 rounded-md">
            <input id="phonenumber" required placeholder="Phone Number" className="w-full p-2 rounded-md  h-full  border-gray-700 outline-none bg-slate-500 text-white font-semibold text-[18px]"></input>
         </div>
         <div className="flex flex-row gap-x-4 w-full mt-5">
         <div className=" w-full   border-gray-500 rounded-md">
            <input id="password" required placeholder="Password" type="password" className="w-full p-2 rounded-md  h-full  border-gray-700 outline-none bg-slate-500 text-white font-semibold text-[18px]"></input>
         </div>
         <div className="w-full  border-gray-500 rounded-md">
            <input id="confirmpassword" required placeholder="Confirm Password" className="w-full p-2 rounded-md h-full  border-gray-700 outline-none bg-slate-500 text-white font-semibold text-[18px]"></input>
         </div>
         </div>
         <button type="submit" className="w-full bg-blue-600 rounded-md p-3 hover:bg-blue-700 text-white font-semibold  mt-4">Sign Up</button>
      </form> */}
    </div>
  )
}

export default SignFormShop
