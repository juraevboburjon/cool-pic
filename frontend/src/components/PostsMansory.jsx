import React from "react";
import { Link } from "react-router-dom";

const PostsMansory = ({ posts }) => {
  // console.log(posts);
  return (
    <div className="mx-auto mt-8 p-8">
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
