import React from "react";

const LoginForm = () => {
  return (
    <>
      <form className="w-90">
        <div className="flex flex-col">
          <label htmlFor="email" className="pb-2 pt-8 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="border-b focus:outline-none"
          />
          <label htmlFor="password" className="pb-2 pt-8 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="border-b focus:outline-none"
          />
        </div>
        <div className="flex justify-center py-8 ">
          <button
            type="submit"
            className="w-full py-2 rounded text-white bg-blue-800 cursor-pointer hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
