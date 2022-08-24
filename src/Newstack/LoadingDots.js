import React from "react";
const LoadingDots = () => {
  return (
    <h1 className="text-white  text-4xl">
      isLoading{" "}
      <span id="dots" className=" animate-bounce">
        ...
      </span>
    </h1>
  );
};

export default LoadingDots;
