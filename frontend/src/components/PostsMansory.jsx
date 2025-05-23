import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const PostsMansory = () => {
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

  // console.log(posts);
  return (
    <div className="mx-auto mt-15 p-8">
      <div className="gap-4 columns-2 md:columns-4">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Link to={`/post/${post._id}`}>
                <img
                  className="h-auto w-full rounded-lg mb-4"
                  src={post.imgUrl}
                  alt={post.title}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsMansory;
