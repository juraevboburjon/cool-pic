import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../service/AuthContext";

const Navbar = () => {
  const { isLoggedIn, userEmail, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between w-full conatiner h-20 mx-auto px-25">
      <div className="text-3xl font-black text-blue-800">
        <Link to={"/home"}>Cool Pic</Link>
      </div>

      <div className="flex gap-x-6 items-center font-medium">
        {!isLoggedIn ? (
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
            <p className="text-gray-800 font-bold">Welcome, {userEmail}</p>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500"
            >
              Logout
            </button>
            <Link to={"/create"}>
              <button className="px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-700 transition">
                New Post
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
