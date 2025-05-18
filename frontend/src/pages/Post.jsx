import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const host = import.meta.env.VITE_HOST;
  const [postInfo, setPostInfo] = useState([]);

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

  return <div className="f">{postInfo._id}</div>;
};

export default Post;
