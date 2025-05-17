import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userLoginned, formData }) => {
  // console.log(formData);
  return (
    <div className="flex items-center justify-between w-full max-w-[1200px] h-20 mx-auto px-6">
      <div className="text-3xl font-black text-blue-800">Cool Pic</div>

      <div className="flex gap-x-6 items-center font-medium">
        <div className="cursor-pointer">About</div>
        {!userLoginned ? (
          <>
            <Link to="/login">
              <button className="px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-700">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-300">
                Sign up
              </button>
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <p className="text-gray-800 font-bold">
              Welcome, {formData?.email || "Guest"}
            </p>
            <button
              onClick={() => {
                console.log("object");
              }}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
