import React from "react";
import Navbar from "../components/Navbar";
import CreatePostForm from "../components/CreatePostForm";

const CreatePost = () => {
  return (
    <>
      <div className="shadow">
        <Navbar />
      </div>
      <div className="mt-10">
        <CreatePostForm />
      </div>
    </>
  );
};

export default CreatePost;
