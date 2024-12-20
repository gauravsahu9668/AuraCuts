
import { SignupInput } from '@codingprism/auracuts-commons';
import axios from 'axios';
import React,{useState,useEffect, ChangeEvent} from 'react'
import {SubmitHandler, useForm} from "react-hook-form"
import toast from "react-hot-toast"
import { DiVim } from 'react-icons/di';
import { FormMethod, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';


type FormFields={
  firstName:string;
  lastName:string;
  email:string;
  phone:string;
  password:string;
  confirm_pw:string;
}

const SignFormShop = () => {
  const{
    register,
    handleSubmit,
    watch,
    formState: {errors},
  }=useForm<FormFields>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormFields>=async(data:Record<string,any>)=>{
    try {
      const response = await axios.post(`${BACKEND_URL}/shopkeeper/signup`,data);
      const jwt = response.data
      localStorage.setItem("token",jwt);
      console.log(response.data);
      navigate("/dashboard")
      toast.success("Signup succssful!");
    } catch (error:any) {
      console.log(error);
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message;
        if (status === 409) {
          toast.error("User already exists.");
        } else if (status === 400) {
          toast.error("Invalid inputs. Please check your data.");
        } else {

          toast.error(message || "Something went wrong. Please try again.");
        }
      } else {
        // Handle network or unexpected errors
        console.log(error);
        toast.error("Network error. Please try again later.");
      }
    }
  }
  return (
    <div className="absolute left-0 top-12 w-full">
      <form className=" scale-[80%] text-[17px] font-normal space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Username Input */}
                <div className="flex flex-row justify-between w-full">
                  <div className="flex-row justify-center items-center w-[50%]">
                     <input
                     {...register("firstName",{
                        required:"First Name is required"
                     })}
                     
                     type="text"
                     placeholder="First Name"
                     className=" px-4 py-2 w-[80%] border bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                     <div className='h-3'>{errors.firstName && (<div className="text-red-500">{errors.firstName.message}</div>)}</div>
                  </div>
                  <div className="flex-row justify-center items-center w-[50%]">
                     <input
                     {...register("lastName",{
                      required:"Last Name is required"
                   })}
                     type="text"
                     placeholder="Last Name"
                     className=" px-4 py-2 w-[80%] border flex justify-self-end bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                     <div className='h-3'>{errors.lastName && (<div className="text-red-500">{errors.lastName.message}</div>)} </div>
                  </div>
                </div>
                {/* email */}
                <div className="flex-row justify-center items-center">
                  <input
                  {...register("email",{
                    required:"Email is required",
                    validate:(value)=>{
                      if(!value.includes("@")){
                        return "Email must include @";
                      }
                    }
                 })} 
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 border bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <div className='h-3'>{errors.email && (<div className="text-red-500">{errors.email.message}</div>)}
                    </div>
                </div>
                {/* phone number */}
                <div className="flex-row justify-center items-center ">
                  <input
                    {...register("phone",{
                      required:"Phone Number(10 digit) is required"
                    })}
                    pattern="[0-9]{10}"
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <div className='h-3'>{errors.phone && (<div className="text-red-500">{errors.phone.message}</div>)}</div>
                </div>
                {/* Password Input */}
                <div className="flex-row justify-center items-center">
                  <input
                    {...register("password",{
                            required:"Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must have atleast 8 characters",
                            }
                        })}
                    type="password"
                    placeholder="Password"
                    className=" w-full px-4 py-2 border bg-[#a79eec]/[0.1] border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                     <div className='h-3'>{errors.password && (<div className="text-red-500">{errors.password.message}</div>)}</div>
                </div>
                {/* confirm password */}
                <div className="flex-row justify-center items-center">
                  <input
                    {...register("confirm_pw",{
                      required:"Confirm Password is required",
                      validate: (value) => value === watch("password") || "Passwords do not match",
                  })}
                    type="text"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                     <div className='h-3'>{errors.confirm_pw && (<div className="text-red-500">{errors.confirm_pw.message}</div>)}</div>
                </div>
                <div className="mt-6" id="recaptcha"></div> 
                {/* Login Button */}
                <div className="flex justify-center pt-2">
                    <button 
                    type="submit"
                    className="w-[50%] py-3 bg-gradient-to-r from-purple-700 to-blue-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    SIGN UP
                    </button>
                </div>
                
              </form>
              
    </div>
  )
}
export default SignFormShop
