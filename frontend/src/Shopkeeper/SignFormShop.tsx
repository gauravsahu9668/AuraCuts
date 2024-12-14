import React,{useState,useEffect} from 'react'
import {SubmitHandler, useForm} from "react-hook-form"
import toast from "react-hot-toast"
import { DiVim } from 'react-icons/di';
import { FormMethod } from 'react-router-dom';


type FormFields={
  firstName:string;
  lastName:string;
  email:string;
  phone:number;
  password:string;
  confirm_pw:string;
}
const SignFormShop = () => {
  const{
    register,
    handleSubmit,
    formState: {errors},
  }=useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields>=async(data:Record<string,any>)=>{
    console.log()
  }

  return (
    <div className="absolute left-0 top-12 w-full">
      <form className=" scale-[80%] space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Username Input */}
                <div className="flex flex-row justify-between w-full ">
                  <div className="flex-row justify-center items-center w-[50%]">
                     <input
                     {...register("firstName",{
                        required:"First Name is required"
                     })}
                     type="text"
                     placeholder="First Name"
                     className=" px-4 py-2 w-[80%] border bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                     />
                     <div className='h-3'>{errors.firstName && (<div className="text-red-500">{errors.firstName.message}</div>)}</div>
                  </div>
                  <div className="flex-row justify-center items-center w-[50%]">
                     <input
                     {...register("lastName",{
                      required:"Last Name is required"
                   })}
                     type="text"
                     placeholder="Last Name"
                     className=" px-4 py-2 w-[80%] border flex justify-self-end bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                     />
                     <div className='h-3'>{errors.lastName && (<div className="text-red-500">{errors.lastName.message}</div>)} </div>
                  </div>

                </div>
                {/* email */}
                <div className="flex-row justify-center items-center">
                  <input
                  {...register("email",{
                    required:"Email is required"
                 })}
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 border bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className='h-3'>{errors.email && (<div className="text-red-500">{errors.email.message}</div>)}
                    </div>
                </div>
                {/* phone number */}
                <div className="flex-row justify-center items-center ">
                  <input
                    {...register("phone",{
                      required:"Phone Number is required"
                   })}
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                    <div className='h-3'>{errors.phone && (<div className="text-red-500">{errors.phone.message}</div>)}</div>
                </div>
                {/* Password Input */}
                <div className="flex-row justify-center items-center">
                  <input
                    {...register("password",{
                            required:"Password is required"
                        })}
                    type="password"
                    placeholder="Password"
                    className=" w-full px-4 py-2 border bg-[#a79eec]/[0.1] border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                     <div className='h-3'>{errors.password && (<div className="text-red-500">{errors.password.message}</div>)}</div>
                </div>
                {/* confirm password */}
                <div className="flex-row justify-center items-center">
                  <input
                    {...register("confirm_pw",{
                      required:"Confirm Password is required"
                  })}
                    type="text"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                     <div className='h-3'>{errors.confirm_pw && (<div className="text-red-500">{errors.confirm_pw.message}</div>)}</div>
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
