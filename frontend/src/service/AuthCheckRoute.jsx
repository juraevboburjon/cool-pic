import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const AuthCheckRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to={"/login"} />;
};

export default AuthCheckRoute;
