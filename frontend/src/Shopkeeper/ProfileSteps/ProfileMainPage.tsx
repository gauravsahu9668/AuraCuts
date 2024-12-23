import { useSelector } from "react-redux"
import stepsdata from "../../Data/stepsdata"
import Step1Form from "./Step1"
import Step2page from "./Step2"
import { MdDoneOutline } from "react-icons/md";
import AddImages from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
const ProfileMainPage = () => {
    const { step } = useSelector((state:any) => state.step);
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
  {/* Main Content */}
  <div className="w-[75%] mx-auto min-h-screen pt-10 flex flex-col">
    {/* Steps Navigation */}
    <div className="flex justify-around items-center mb-12 mt-12">
      {stepsdata.map((data, index) => (
        <div key={index} className="flex  items-start relative">
          {/* Step Number */}
          <div className="flex flex-col items-center ">
          <div className={`w-10 h-10 rounded-full flex items-center ${step>data.id && "border-[1px]  bg-[green]"} justify-center ${step===data.id && "border-[1px] border-[#f3f330] bg-[#e5ee84]"} justify-center bg-gray-300 text-gray-900 font-bold mb-2`}>
            {
                step>data.id ? <><MdDoneOutline></MdDoneOutline></> : `${data.id}`
            }
          </div>
          {/* Step Name */}
          <div className={`text-center text-sm font-semibold ${step===data.id && "text-[#20201f] text-[25px] font-semibold"}`}>{data.stepname}</div>
          </div>
          {data.id !== stepsdata.length && (
            <div className={ `w-[100px] h-[2px] ${step>data.id && " bg-[#f3f330]"}   bg-gray-300 mt-6 `}></div>
          )}
        </div>
      ))}
    </div>
    {/* Content Section */}
    <div className="w-full bg-white shadow-lg rounded-lg p-6">
        {
            step===1 && <Step1Form></Step1Form>
        }
        {
            step===2 && <Step2page></Step2page>
        }
        {
            step===3 && <AddImages></AddImages>
        }
        {
            step===4 && <Step4></Step4>
        }
        {
            step===5 && <Step5></Step5>
        }
        {
            step===6 && <Step6></Step6>
        }

    </div>
  </div>
    </div>
  )
}

export default ProfileMainPage
