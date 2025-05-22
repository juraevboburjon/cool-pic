import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Post = () => {
  const { id } = useParams();
  const host = import.meta.env.VITE_HOST;
  const [postInfo, setPostInfo] = useState([]);
  const [tags, setTags] = useState([]);
  const currentUser = localStorage.getItem("userEmail");
  const author = postInfo.author;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/post/get/${id}`);
        const parsedTags = JSON.parse(res.data.tags);
        setTags(parsedTags.map((tag) => tag.value));

        setPostInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, host]);

  console.log(tags);
  console.log(postInfo);

  const handleDelete = async () => {
    await axios
      .delete(`${host}/api/post/delete/${id}`)
      .then(() => navigate("/home"));
  };

  return (
    <div className="f">
      <Navbar />
      <div className="flex items-start px-20 gap-10 mt-8 flex-col md:flex-row">
        <div className="w-[50%] h-auto bg-cover bg-center">
          <img
            className="w-full h-full object-cover rounded"
            src={postInfo.imgUrl}
            alt={postInfo.title}
          />
        </div>

        <div className="flex flex-col justify-start w-[50%]">
          <div className="text-start mb-4">
            <h1 className="text-2xl font-semibold mb-2">{postInfo.title}</h1>
            <p className="text-sm text-gray-600 mb-1">{postInfo.description}</p>
            {tags.map((tag, index) => (
              <p key={index} className="text-xs text-gray-400 mb-1">
                {tag}
              </p>
            ))}
            <p className="text-xs text-gray-400 mb-1">{postInfo.updatedAt}</p>
            <p className="text-xs text-gray-400">{postInfo.author}</p>
          </div>

          <div className="mt-auto">
            {currentUser === author && (
              <>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete()}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => console.log("edit")}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
