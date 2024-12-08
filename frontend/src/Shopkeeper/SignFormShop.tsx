

const SignFormShop = () => {
  return (
    <div>
      <form>
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
      </form>
    </div>
  )
}

export default SignFormShop
