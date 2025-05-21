import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Creatable from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CreatePostForm = () => {
  const host = import.meta.env.VITE_HOST;
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async (data) => {
    const formData = new FormData();
    const author = localStorage.getItem("userEmail");
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tags", JSON.stringify(tags));
    formData.append("image", image);
    formData.append("author", author);

    try {
      const res = await axios.post(`${host}/api/post/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("post created succ", res);
      reset();
      setImage(null);
      setTags([]);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid-rows-1 px-20 gap-5 md:grid grid-cols-2 w-full">
        <div
          {...getRootProps({
            className: `border-dashed border-2 p-4 rounded cursor-pointer text-center ${
              isDragActive ? "bg-blue-100" : ""
            }`,
          })}
        >
          <input {...getInputProps()} />
          {image ? <p>Uploaded: {image.name}</p> : <p>Upload img here...</p>}
        </div>
        {/* Title */}
        <div className="grid grid-rows-1 gap-4">
          <input
            type="text"
            placeholder="Post title"
            {...register("title", { required: "Title is required" })}
            className="border p-2 rounded"
          />

          {/* Description */}
          <textarea
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
            className="border p-2 rounded"
          ></textarea>

          {/* Tags */}
          <Creatable
            isMulti
            value={tags}
            onChange={(newTags) => setTags(newTags)}
            placeholder="Tags"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Publish
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePostForm;
