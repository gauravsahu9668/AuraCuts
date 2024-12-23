import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setstep } from "../../Slices/StepsReducer";
interface ImageFormData {
  name: string;
  description: string;
  image: FileList | null; // Handle multiple file uploads
}

const AddImages = () => {
  const [imageCount, setImageCount] = useState<number>(1); // Track the current image number
  const [imageForms, setImageForms] = useState<number[]>([1]); // Array to track all images
  const { register, handleSubmit, reset } = useForm<ImageFormData>();
  const dispatch=useDispatch()
  const [uploadedImages, setUploadedImages] = useState<ImageFormData[]>([]);

  const onSubmit = (data: ImageFormData) => {
    setUploadedImages((prev) => [...prev, data]);
    setImageForms((prev) => [...prev, imageCount + 1]); // Add new form number
    setImageCount((prev) => prev + 1); // Increment the form count
    reset(); // Clear the current form
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4">
      <div className="w-[75%] mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Upload Images</h1>

        <div className="flex flex-col gap-4">
          {imageForms.map((index) => (
            <div
              key={index}
              className="p-4 bg-white border border-gray-200 rounded-md shadow-md"
            >
              <h2 className="text-lg font-semibold mb-2">
                Image {index}
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 grid-cols-1 sm:grid-cols-2"
              >
                {/* Name */}
                <div>
                  <label htmlFor={`name${index}`} className="block mb-1">
                    Image Name
                  </label>
                  <input
                    type="text"
                    id={`name${index}`}
                    {...register("name", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter image name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor={`description${index}`}
                    className="block mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id={`description${index}`}
                    {...register("description", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter image description"
                  />
                </div>

                {/* Image */}
                <div className="col-span-full">
                  <label htmlFor={`image${index}`} className="block mb-1">
                    Image Upload
                  </label>
                  <input
                    type="file"
                    id={`image${index}`}
                    multiple // Allow multiple uploads
                    accept="image/*"
                    {...register("image", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>

                <button
                  type="submit"
                  className="col-span-full mt-3 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add Image
                </button>
              </form>
            </div>
          ))}
        </div>

        {/* Uploaded Images Preview */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            Uploaded Images
          </h2>
          <ul className="flex flex-col gap-4">
            {uploadedImages.map((image, idx) => (
              <li
                key={idx}
                className="bg-white p-4 border border-gray-200 rounded-md shadow-md"
              >
                <h3 className="font-medium text-lg">{image.name}</h3>
                <p className="text-gray-600">{image.description}</p>
                {image.image &&
                  Array.from(image.image).map((file, i) => (
                    <div
                      key={i}
                      className="mt-2 border border-gray-200 p-2 rounded-md"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${file.name}`}
                        className="w-32 h-32 object-cover rounded"
                      />
                      <p className="text-sm text-gray-500 mt-1">{file.name}</p>
                    </div>
                  ))}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={()=>dispatch(setstep(4))}>Next step</button>
      </div>
    </div>
  );
};

export default AddImages;
