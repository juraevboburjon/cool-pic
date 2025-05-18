import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    }
  }, [isLoggedIn, userEmail]);

  const login = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
