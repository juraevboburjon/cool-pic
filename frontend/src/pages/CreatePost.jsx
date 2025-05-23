import React from "react";
import CreatePostForm from "../components/CreatePostForm";
import Layout from "../components/Layout";

const CreatePost = () => {
  return (
    <Layout>
      <div className="mt-35">
        <CreatePostForm />
      </div>
    </Layout>
  );
};

export default CreatePost;
