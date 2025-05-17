import React from "react";
import Navbar from "../components/Navbar";
import bgImg from "../images/background.png";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="relative flex w-full h-screen ">
      <div
        className="absolute -z-50 inset-0  bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <div className="absolute -z-50 inset-0 bg-black opacity-50"></div>

      <div className="absolute top-0 w-full z-10 bg-white shadow-lg">
        <div className="flex justify-center">
          <Navbar />
        </div>
      </div>

      <div className=" flex grid-cols-2 items-center justify-between w-full h-full text-white">
        <div className="flex ml-24">
          <h1 className="text-5xl font-bold mb-4">
            Login to <br />
            posting your <br /> pictures
          </h1>
        </div>

        <div className="flex flex-col bg-white text-black rounded mr-30 p-10 ">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold py-5">Welcome to Cool Pic</h1>
          </div>
          <LoginForm />
          <div className="text-center">
            <p>Don't have register?</p>
            <Link className="font-bold">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
