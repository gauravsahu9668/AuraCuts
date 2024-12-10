
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
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-1">
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
            {errors.firstname && <span>Please enter your first name</span>}
          </div>
          <div className="flex flex-col gap-1">
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
               className="w-full  px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("lastname")}
            />
          </div>
        </div>
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
          {errors.email && <span>Please enter your email address</span>}
        </div>
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
            rows={7}
            placeholder="Enter your message here"
            {...register("message", { required: true })}
             className="w-full  px-4 py-2 border  bg-[#a79eec]/[0.1]  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.message && <span>Please enter your message</span>}
        </div>
        <div className="flex flex-col mt-3 gap-1">
          <label
            htmlFor="phoneno"
            className="text-[14px] font-semibold text-gray-500"
          >
            Contact Number
          </label>
          <input
            type="text"
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