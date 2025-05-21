import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import PostsMansory from "../components/PostsMansory";

const Home = () => {
  const host = import.meta.env.VITE_HOST;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/post/getAll`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [host, posts]);

  return (
    <div>
      <div className="top-0 flex items-center bg-white shadow-lg w-full h-25 fixed">
        <Navbar />
      </div>

      <div className="mt-20">
        <PostsMansory posts={posts} />
      </div>
    </div>
  );
};

export default Home;
