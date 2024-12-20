// import{Link,useParams} from "react-router-dom"
import React,{useState,useMemo} from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { LoginInput } from '@codingprism/auracuts-commons';

type FormFields=LoginInput;

const Login=()=>{    
  const navigate=useNavigate();
  const { register,
    handleSubmit,
    formState: {errors,isSubmitting},
  } = useForm<FormFields>();

  const [selectedButton, setSelectedButton] = useState<string|null>("null");
  
  const button1Handler=()=>{
    
      if(selectedButton!=="customer"){
        setSelectedButton("customer")
      }
      else{
        setSelectedButton(null)
      }
  }

const button2Handler=()=>{
    if(selectedButton!=="shopkeeper"){
      setSelectedButton("shopkeeper")
    }
    else{
      setSelectedButton(null)
    }
}

  const onSubmit: SubmitHandler<FormFields>=async(Data:Record<string,any>)=>{
    try{
      if(selectedButton==="customer"){
        const response=await axios.post(`${BACKEND_URL}/customer/login`,Data);
      const jwt=response.data;
      console.log(jwt);
      localStorage.setItem("token",jwt);
      toast.success("Login Succesfull")
      navigate("/dashboard")
      }
      if(selectedButton==="shopkeeper"){
        const response=await axios.post(`${BACKEND_URL}/shopkeeper/login`,Data);
        const jwt=response.data;
        console.log(jwt);
        localStorage.setItem("token",jwt);
        toast.success("Login Succesfull")
         navigate("/dashboard")
      }
    } 
    catch(e){
      console.log(e);
      toast.error("login request failed")
    }
    // console.log("sfjlsdf")
  };

  const goBack = () => {
      window.history.back();
  };

  
  return (
    <div className="flex min-h-[800px] h-screen min-w-[1569px] items-center font-display justify-center cursor-default bg-gradient-to-br from-[#8360df] to-pink-300">
        <div className="flex bottom-8 w-[1190px] h-[630px]  relative bg-white rounded- shadow-slate-800 shadow-2xl overflow-hidden">
          {/* Welcome Section */}
          <div className=" p-20 h-full absolute left-0 w-2/4 px-36 bg-gradient-to-br  from-[#8360df] to-pink-300 text-white cursor-default">
              <h1 className="text-2xl absolute w-fit left-44 mt-24 font-display font-medium">Welcome to website</h1>
              <p className="text-sm absolute w-fit left-14 mt-40 leading-relaxed text-start ">
              Connecting Customers with Style and Shopkeepers with Success. Whether You're Here to Book the Perfect Cut or Manage Your Salon Effortlessly, 
              We've Got You Covered. Step In and Experience Grooming Made Simple!"
              </p>
          </div>
  
          {/* Login Section */}
          <div  className="right-0 absolute w-2/4 p-8 flex flex-col justify-center items-center cursor-default">
            {/* <h1 className="text-5xl font-medium font-display text-center mb-8 text-[#8929b5]">User Login</h1> */}
            <h1 className="text-4xl font-medium font-display text-center mt-5 mr-7 text-[#8929b5]">User Login</h1>

              <div className="relative top-10 flex space-x-4 w-[340px] item-center justify-center " >
              {/* Button 1 */}
                  <button 
                      onClick={button1Handler}
                      className={`w-full px-3 py-2 rounded-full  ${
                      selectedButton === "customer"
                          ? " text-white bg-gradient-to-r from-purple-600 to-blue-500"
                          : "bg-[#a79eec]/[0.1] border text-gray-700 hover:bg-gray-400"
                      }`}
                  >
                      Customer
                  </button>

              {/* Button 2 */}
                  <button
                      onClick={button2Handler}
                      className={`w-full px-4 py-2 rounded-full ${
                      selectedButton === "shopkeeper"
                          ? " text-white  bg-gradient-to-r from-blue-500 to-purple-600"
                          : "bg-[#a79eec]/[0.1] border text-gray-700  hover:bg-gray-400"
                      }`}
                  >
                      Shopkeeper
                  </button>
              </div>
              
            <form className="absolute top-52 space-y-5 px-12" onSubmit={handleSubmit(onSubmit)} >
              {/* customer/shopkeeper */}

              {/* Username Input */}
              <div className="flex-row justify-center items-center">
                {/* {console.log("hi")} */}
                <input
                  {...register("email",{
                    required:"Username is required"
                  }) }
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-2 border bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 "
                />
                    <div className='h-3'>{errors.email && (<div className="text-red-500">{errors.email.message}</div>)}</div>
                </div>
  
              {/* Password Input */}
              <div>
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
                  className=" w-full px-4 py-2 border bg-[#a79eec]/[0.1] border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className='h-3'>{errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}</div>
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
                  className="w-[50%] text-[18px] py-3 bg-gradient-to-r from-purple-700 to-blue-500 text-white font-medium rounded-full hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};    
export default Login