import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Comment from "../components/Comment";

const Post = () => {
  const { id } = useParams();
  const host = import.meta.env.VITE_HOST;
  const [postInfo, setPostInfo] = useState([]);
  const currentUser = localStorage.getItem("userEmail");
  const author = postInfo.author;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/post/get/${id}`);
        setPostInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, host]);

  console.log(postInfo);

  const handleDelete = async () => {
    await axios
      .delete(`${host}/api/post/delete/${id}`)
      .then(() => navigate("/home"));
  };

  return (
    <div className="f">
      <Navbar />
      <div className="flex justify-between items-center px-20 gap-10 mt-8 flex-col md:flex-row ">
        <div className=" w-[50%] h-full bg-cover bg-center">
          <img
            className="w-full h-full rounded "
            src={postInfo.imgUrl}
            alt={postInfo.title}
          />
        </div>
        <div className="grid grid-rows-2">
          <div className="w-[50%] h-full">
            <h1 className="text-2xl font-semibold">{postInfo.title}</h1>
            <p>{postInfo.description}</p>
            <p>{postInfo.updatedAt}</p>
            <p>{postInfo.author}</p>
            {currentUser === author && (
              <button onClick={() => handleDelete()}>delete</button>
            )}
          </div>
          <div className="f">{/* <Comment postId={id} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
