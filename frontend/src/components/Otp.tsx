import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.config';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';


function Otp({otpLength=6}) {
    const [otpFields,setotpFields]=useState(new Array(otpLength).fill(""));
    const ref=useRef<(HTMLInputElement | null)[]>([]);
       const handlekeychange=(e:any,index :any) =>{
        const key=e.key;
        const copyOtpFields=[...otpFields];
        if(key==="Backspace"){
            copyOtpFields[index]="";
            setotpFields(copyOtpFields);
            if(index-1>=0){
                ref.current[index-1]?.focus();
             }
            return;
        }
        if(isNaN(key)){
            return;
        }
         copyOtpFields[index]=key;
         if(index+1 < otpFields.length){
            ref.current[index+1]?.focus();
         }
         setotpFields(copyOtpFields);
       };
       useEffect(()=>{
        ref.current["0"]?.focus();
       },[]);
       const navigate = useNavigate();
       
  return(
    <div>
        <div className='realtive'>
        <div className='absolute font-serif rounded-3xl text-lg text-cyan-50 pl-10 pr-10 w-[550px] h-[385px] top-44 left-[550px] flex flex-col bg-amaze'>
        <h2 className='absolute top-10 left-56'>Enter OTP</h2>
        <p className='absolute top-20 w-80 text-center left-28'>We have sent a verification code to your mobile number</p>
        <div className='absolute top-44 left-24'>
        {otpFields.map((value,index)=>{
            return(
                <input className='h-10 w-10 rounded-lg m-2 p-2 border-solid text-black content-center'
                key={index}
                value={value}
                 type="text" 
                 ref={(currentInput)=>{ref.current[index]=currentInput}}
                 onKeyDown={(e)=>handlekeychange(e,index)}/>
            );
        })}
       </div>
       <div id="recaptcha-container"></div>
       <button className='absolute bottom-16 left-44 rounded-xl bg-blue-400 w-44 h-12 hover:bg-blue-500 hover:text-gray-950'>Verify</button>
        </div>        
    </div>       
    </div>
  )
}

export default Otp