import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
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
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tags", JSON.stringify(tags));
    formData.append("image", image);

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
      console.error("Ошибка при создании поста:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Title */}
      <input
        type="text"
        placeholder="Заголовок"
        {...register("title", { required: "Заголовок обязателен" })}
        className="border p-2 rounded"
      />

      {/* Description */}
      <textarea
        placeholder="Описание"
        {...register("description", { required: "Описание обязательно" })}
        className="border p-2 rounded"
      ></textarea>

      {/* Tags */}
      <CreatableSelect
        isMulti
        value={tags}
        onChange={(newTags) => setTags(newTags)}
        placeholder="Добавьте теги"
      />

      {/* Image Upload */}
      <div
        {...getRootProps({
          className: `border-dashed border-2 p-4 rounded cursor-pointer text-center ${
            isDragActive ? "bg-blue-100" : ""
          }`,
        })}
      >
        <input {...getInputProps()} />
        {image ? (
          <p>Загружено: {image.name}</p>
        ) : (
          <p>Перетащите изображение или нажмите для загрузки</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Создать пост
      </button>
    </form>
  );
};

export default CreatePost;
