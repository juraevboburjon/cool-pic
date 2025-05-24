import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import PostsMansory from "../components/PostsMansory";
import Layout from "../components/Layout";

const Post = () => {
  const { id } = useParams();
  const host = import.meta.env.VITE_HOST;
  const [postInfo, setPostInfo] = useState({});
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
      .then(() => navigate("/"));
  };

  return (
    <Layout>
      <div className="mt-35">
        <div className="flex items-start px-20 gap-10 mt-8 flex-col md:flex-row">
          <div className="w-[50%] h-auto bg-cover bg-center">
            <img
              className="w-full h-full object-cover rounded"
              src={postInfo.imgUrl}
              alt={postInfo.title}
            />
          </div>

          <div className="flex flex-col justify-start w-[50%]">
            <div className=" text-start mb-4">
              <h1 className="text-3xl font-bold mb-4">{postInfo.title}</h1>
              <p className="text-lg text-gray-600 mb-2">
                {postInfo.description}
              </p>
              <div className="flex flex-row gap-4 mb-4">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-sm px-3 py-1 rounded text-gray-600 bg-blue-50 cursor-pointer"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-1">{postInfo.updatedAt}</p>
              <div className="flex gap-2">
                <FaUserCircle color="gray" size={30} />
                <p className="text-md text-black">{postInfo.author}</p>
              </div>
            </div>

            <div className=" flex mt-auto gap-x-6">
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
        <PostsMansory />
      </div>
    </Layout>
  );
};

export default Post;
