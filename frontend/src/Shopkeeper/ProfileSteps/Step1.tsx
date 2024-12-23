
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setstep } from "../../Slices/StepsReducer";

const Step1Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch=useDispatch();
  // Handle form submission
  const onSubmit = (data:any) => {
    console.log("Form Data Submitted:", data);
    alert("Form Submitted Successfully");
    dispatch(setstep(2));
    reset(); // Reset the form after submission
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Main Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-[75%]">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Fill in Your Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("name", { required: true })}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
          </div>

          {/* Shop Name Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Shop Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("shopName", { required: true })}
              placeholder="Enter your shop name"
            />
          </div>

          {/* Pincode Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Pincode</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("pincode", { required: true })}
              placeholder="Enter your pincode"
            />
          </div>

          {/* State Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">State</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("state", { required: true })}
              placeholder="Enter your state"
            />
          </div>

          {/* City Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">City</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("city", { required: true })}
              placeholder="Enter your city"
            />
          </div>

          {/* Landmark Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Landmark</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("landmark")}
              placeholder="Enter nearby landmark"
            />
          </div>

          {/* Identity Details Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Identity Details</label>
            <textarea
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              {...register("identityDetails", { required: true })}
              placeholder="Provide your identity details (e.g., ID proof, document number)"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step1Form;
