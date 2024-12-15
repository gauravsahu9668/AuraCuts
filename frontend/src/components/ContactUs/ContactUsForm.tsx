
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data: Record<string, any>) => {
    toast.success("Message sent successfully");
    reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneno: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="gap-5 pb-10">
      <form onSubmit={handleSubmit(submitContactForm)}>
        {/* name */}
        <div className="flex flex-row gap-3 w-full space-x-3">
          <div className="flex flex-col gap-1 w-[50%]">
            <label
              htmlFor="firstname"
              className="text-[14px] font-semibold text-gray-500"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstname", { required: true })}
               className="w-full  px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className='h-3'>{errors.firstname && <span className="text-red-500">Please enter your first name</span>}</div>
          </div>
          <div className="flex flex-col gap-1 w-[50%]">
            <label
              htmlFor="lastname"
              className="text-[14px] font-semibold text-gray-500"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter last name"
               className="w-full  px-4 py-2 border flex justify-self-end bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("lastname")}
            />
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col mt-3">
          <label
            htmlFor="email"
            className="text-[14px] font-semibold text-gray-500"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
             className="w-full  px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className='h-3'>{errors.email && <span className="text-red-500">Please enter your email address</span>}</div>
        </div>
        {/* message */}
        <div className="flex flex-col mt-3 gap-1">
          <label
            htmlFor="message"
            className="text-[14px] font-semibold text-gray-500"
          >
            Message
          </label>
          <textarea
            id="message"
            cols={30}
            rows={6}
            placeholder="Enter your message here"
            {...register("message", { required: true })}
             className="w-full  px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <div className='h-3'>{errors.message && <span className="text-red-500">Please enter your message</span>}</div>
        </div>
        {/* contact number */}
        <div className="flex flex-col mt-3 gap-1">
          <label
            htmlFor="phoneno"
            className="text-[14px] font-semibold text-gray-500"
          >
            Contact Number
          </label>
          <input
            pattern="[0-9]{10}"
            type="phone"
            id="phoneno"
            placeholder="12345xxxx"
            {...register("phoneno", { required: true })}
             className="w-full  px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-[100%] py-3 bg-gradient-to-r mt-5 from-purple-700 to-blue-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;