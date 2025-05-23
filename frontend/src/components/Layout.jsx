import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LoadingSpinner from "./LoadingSpinner";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className=" w-full justify-between items-center fixed bg-white top-0 shadow-lg">
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
