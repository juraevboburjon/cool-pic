import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1200px] h-20 mx-auto px-6">
      <div className="text-3xl font-black text-blue-800">Cool Pic</div>

      <div className="flex gap-x-6 items-center font-medium">
        <div className="cursor-pointer">About</div>
        <button className="px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-700">
          Login
        </button>
        <button className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-300">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
