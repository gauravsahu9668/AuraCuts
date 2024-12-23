import axios from "axios";
import {SubmitHandler, useForm} from "react-hook-form"
import toast from "react-hot-toast"
import { FormMethod, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from "../config";
import { getAuth} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app} from "../firebase.config";
import { useState } from "react";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { settoken, setuser } from "../Slices/authReducer";
const auth=getAuth(app)
type FormFields={
  firstName:string;
  lastName:string;
  email:string;
  phone:string;
  password:string;
  confirm_pw:string;
}
const  initaldata={
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  password:"",confirm_pw:""
}
const SignupFormCust = () => {
  const [isLoading,setIsLoading]=useState(false);
  const{
    register,
    handleSubmit,
    formState: {errors,isSubmitting},
  }=useForm<FormFields>();
  const navigate = useNavigate();
  const [generatedotp,setgeneratedotp]=useState("");
  const [sendotp,setsendotp]=useState(false);
  const [userotp, setOtp] = useState("");
  const handleChange = (e:any) => {
    const value = e.target.value;
    // Allow only numeric values and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };
  const dispatch=useDispatch()
  const [userdata,setuserdata]=useState<FormFields>(initaldata)
  const submitsignup=async()=>{
    setIsLoading(true)
    if(generatedotp===userotp){
      toast.success("correct otp")
       let email="" ;
    try{
      await createUserWithEmailAndPassword(auth,userdata.email,userdata.password).then((res)=>{
        if(res){
          //@ts-ignore 
          email=res.user.email
        }else{
          email=""
        }
      }).catch((e)=>{
        alert(e.message)
      })
    }catch(e){
      console.log(e)
    }
    if(email!==""){
      try {
        // const response = await axios(`${BACKEND_URL}/shopkeeper/signup`,formDa);
        const response=await axios({
          url:`${BACKEND_URL}/customer/signup`,
          method:"POST",
          data:{
            email:userdata.email,
            password:userdata.password,
            phone:userdata.phone,
            firstName:userdata.firstName,
            lastName:userdata.lastName
          }
        })
        const jwt = response.data
        localStorage.setItem("token",jwt);
        console.log(response.data);
        dispatch(settoken(jwt))
        dispatch(setuser("customer"))
        navigate("/profilebuilder")
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
    }
    else{
      toast.error("Enter valid otp")
    }
    setIsLoading(false)
  }
  const submithandler: SubmitHandler<FormFields>=async(data)=>{
    setIsLoading(true)
    try{
      await axios({
        url:`${BACKEND_URL}/shopkeeper/send-otp`,
        method:"POST",
        data:{
          email:data.email
        }
      }).then((res:any)=>{
        console.log(res.data.otp);
        console.log(res.data.message)
          setgeneratedotp(res.data.otp);
          toast.success(res.data.message)
        
      })
    }catch(e){
      console.log(e);
    }
    setsendotp(true);
    setuserdata(data)
    setIsLoading(false)
  }
  return (
    <>
    {
      sendotp ? 
      <div className="flex justify-center items-center mt-3 py-16 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Enter OTP</h1>
        <form onSubmit={handleSubmit(submitsignup)} className="flex flex-col space-y-4">
          <input
            type="text"
            value={userotp}
            onChange={handleChange}
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            className="text-center text-lg px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-300 transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            {isLoading?<Loader/>:"Submit"}
          </button>
        </form>
      </div>
    </div>
      :
    <div className="absolute left-0 top-12 w-full">
      <form className="scale-[80%] text-[17px] font-normal  space-y-4 " onSubmit={handleSubmit(submithandler)}>
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
                    required:"Email is required",
                    validate:(value)=>{
                      if(!value.includes("@")){
                        return "Email must include @";
                      }
                    }
                 })}
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 border bg-[#a79eec]/[0.1] border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className='h-3'>{errors.email && (<div className="text-red-500">{errors.email.message}</div>)}
                    </div>
                </div>
                {/* phone number */}
                <div className="flex-row justify-center items-center">
                <input
                    {...register("phone",{
                      required:"Phone Number(10 digit) is required",                          
                   })}
                    pattern="[0-9]{10}"
                    type="string"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border appearance-none  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                    <div className='h-3'>{errors.phone && (<div className="text-red-500">{errors.phone.message}</div>)}</div>
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
                     <div className='h-3'>{errors.password && (<div className="text-red-500">{errors.password.message}</div>)}</div>
                </div>
                {/* confirm password */}
                <div className="flex-row justify-center items-center">
                <input
                    {...register("confirm_pw",{
                      required:"Confirm Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must have atleast 8 characters",
                      }
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
                    {isLoading?<Loader/>:"SIGN UP"}
                    </button>
                </div>

                
              </form>
               
      
    </div>
    }
    </>
  )
}

export default SignupFormCust
