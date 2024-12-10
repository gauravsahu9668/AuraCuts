import ConatctUsForm from "../ContactUs/ContactUsForm"
import { MdOutlineMessage } from "react-icons/md"
import { FaGlobeAmericas } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import ContactUsForm from "../ContactUs/ContactUsForm"
const Contact = () => {
  return (
    <div className="flex h-screen min-h-[800px] min-w-[1589px] font-display bg-gradient-to-br from-[#8360df] to-pink-300">
       <div className="flex flex-row  w-[75%] h-4/5 mx-auto mt-20 rounded-md  bg-white rounded- shadow-slate-800 shadow-2xl">
          <div className=" p-20 w-[50%] h-full  bg-gradient-to-br  from-[#8360df] to-pink-300 text-white hover:cursor-default">
          <div >
                    <div className='flex flex-row items-center gap-3 '><MdOutlineMessage color='white'></MdOutlineMessage> <h1 className='text-[20px] font-bold text-white'>Chat on Us</h1></div>
                    Our friendly team is here to help.
                    <br></br>
                    <span>info@studynotion.com</span>
            </div>
            <div>
                    <div className='flex flex-row items-center gap-3 mt-10'><FaGlobeAmericas color='white'></FaGlobeAmericas> <h1  className='text-white text-[20px] font-bold'>Visit Us</h1></div>
                    Come and say hellow at our office HQ.
                    <br></br>
                    <span>Banglore-500016</span>
            </div>
            <div>
                    <div className='flex flex-row items-center gap-3 mt-10'>< IoCall color='white' ></IoCall><h1  className='text-white text-[20px] font-bold'>Call Us</h1></div>
                    Mon-fri from 8am to 5pm
                    <br></br>
                    <span>+123 456 7890</span>
            </div>
          </div>
          <div className='w-[50%] h-full px-14 py-6'>
            <p className='text-2xl mb-4 font-medium font-display text-center  text-[#8929b5]'>Tell me something about yourself</p>
            <ConatctUsForm></ConatctUsForm>
          </div>
       </div> 
    </div>
  )
}

export default Contact
