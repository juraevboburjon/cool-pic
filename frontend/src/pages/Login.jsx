import React, { useState } from "react";
import bgImg from "../images/background.png";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useAuth } from "../service/AuthContext";
import toast from "react-hot-toast";
import Layout from "../components/Layout";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const host = import.meta.env.VITE_HOST;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${host}/api/auth/login`, formData);
      if (res) {
        login(formData.email);
        navigate("/home");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="flex w-full min-h-screen overflow-y-scroll">
        <div
          className="absolute h-full -z-50 inset-0  bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
        <div className="absolute -z-50 inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 w-full z-10 bg-white shadow-lg"></div>
        <div className="flex flex-col items-center justify-between mt-35 w-full h-full text-white lg:grid grid-cols-2 lg:mx-30">
          <div className="flex mb-8">
            <h1 className="text-5xl w-52 font-bold mb-4">
              Login to posting your pictures
            </h1>
          </div>

          <div className="flex flex-col justify-center w-md bg-white text-black rounded p-10 mb-10">
            <div className="flex justify-center">
              <h1 className="text-3xl font-bold py-5">Welcome to Cool Pic</h1>
            </div>
            <LoginForm
              formData={formData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
            <div className="text-center">
              <p>Don't have register?</p>
              <Link to={"/signup"} className="font-bold">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
