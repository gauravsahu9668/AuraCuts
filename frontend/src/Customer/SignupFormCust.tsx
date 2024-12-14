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

const SignupFormCust = () => {
  const{
    register,
    handleSubmit,
    formState: {errors,isSubmitting},
  }=useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields>=async(data:Record<string,any>)=>{
    console.log()
  }
  return (
    <div className="absolute left-0 top-12 w-full">
      <form className="scale-[80%] space-y-4 " onSubmit={handleSubmit(onSubmit)}>
                {/* Username Input */}
                <div className="flex flex-row justify-between w-full">
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
                  <div className="flex-row w-[50%]">
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
                <div className="flex-row justify-center items-center">
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
                <div>
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
