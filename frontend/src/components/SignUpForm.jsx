import React from "react";

const SignUpForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <form className="w-90" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="pb-2 pt-8 font-medium">
            Username:
          </label>
          <input
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="border-b focus:outline-none"
          />
          <label htmlFor="email" className="pb-2 pt-8 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            className="border-b focus:outline-none"
          />
        </div>
        <div className="flex justify-center py-8 ">
          <button
            type="submit"
            className="w-full py-2 rounded text-white bg-blue-800 cursor-pointer hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
