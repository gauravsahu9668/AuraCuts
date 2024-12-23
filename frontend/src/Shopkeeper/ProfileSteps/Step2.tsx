
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setstep } from "../../Slices/StepsReducer";
const Step2page = () => {
  const [showForm, setShowForm] = useState(false); // Show/Hide form
  const [memberCount, setMemberCount] = useState(1); // Keep track of members count
  const { register, handleSubmit, reset } = useForm();

  // Handle form submission
  const onSubmit = (data:any) => {
    console.log(`Member ${memberCount} Data:`, data);
    alert(`Member ${memberCount} added successfully!`);
    reset(); // Reset form fields
    setShowForm(false); // Hide the form after submission
    setMemberCount((prev) => prev + 1); // Increment member count
  };
  const dispatch=useDispatch();
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Members Page</h1>

      {/* Add Member Button */}
      <button
        onClick={() => setShowForm(!showForm)} // Toggle form visibility
        className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
      >
        {showForm ? "Close Form" : "Add Member"}
      </button>

      {/* Add Member Form (shown conditionally) */}
      {showForm && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-[75%]">
          <h2 className="text-xl font-bold mb-4 text-gray-700 text-center">
            Add Member {memberCount} Details
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                {...register("name", { required: true })}
                placeholder="Enter member's name"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                {...register("email", { required: true })}
                placeholder="Enter member's email"
              />
            </div>

            {/* Experience Input */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Experience (in years)
              </label>
              <input
                type="number"
                min="0"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                {...register("experience", { required: true })}
                placeholder="Enter experience in years"
              />
            </div>

            {/* Profile Picture Input */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Profile Picture (URL)
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                {...register("profilePicture")}
                placeholder="Enter profile picture URL"
              />
            </div>

            {/* Phone Number Input */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                {...register("phoneNumber", { required: true })}
                placeholder="Enter phone number"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition duration-200"
            >
              Add Member
            </button>
          </form>
          <button onClick={()=>{dispatch(setstep(3))}}>next step</button>
        </div>
      )}
    </div>
  );
};

export default Step2page;
