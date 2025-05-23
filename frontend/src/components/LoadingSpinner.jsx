import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-800" />
    </div>
  );
};

export default LoadingSpinner;
