import React from "react";
const LoadingDots = () => {
  return (
    <h1 className="text-white  text-4xl animate-pulse">
      Loading <div className="inline-block animate-bounce">...</div>{" "}
    </h1>
  );
};

export default LoadingDots;
