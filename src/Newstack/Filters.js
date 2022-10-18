import React from "react";

const Filters = ({ setTopic, setCountry }) => {
  return (
    <nav className="text-base sm:text-lg  flex gap-2  text-center ">
      <select
        className="px-4 py-2  bg-transparent text-white border-white border cursor-pointer  [&>*]:text-black [&>*]:text-start"
        name="country"
        id="country"
        onChange={(e) => {
          setCountry(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value="en-IN">India</option>
        <option value="en-US">USA</option>
      </select>
      <select
        className="px-4 py-2  bg-transparent text-white border-white border cursor-pointer  [&>*]:text-black [&>*]:text-start"
        name="category"
        id="category"
        defaultValue={"Business"}
        onChange={(e) => {
          setTopic(e.target.value);
        }}
      >
        <option value="Entertainment">Entertainment</option>
        <option value="Business">Business</option>
        <option value="Politics">Politics</option>
        <option value="Sports">Sports</option>
        <option value="ScienceAndTechnology">Science</option>
      </select>
    </nav>
  );
};

export default Filters;
