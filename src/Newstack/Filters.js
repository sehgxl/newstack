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
        <option value="IN">India</option>
        <option value="CH">China</option>
        <option value="US">USA</option>
      </select>
      <select
        className="px-4 py-2  bg-transparent text-white border-white border cursor-pointer  [&>*]:text-black [&>*]:text-start"
        name="category"
        id="category"
        onChange={(e) => {
          setTopic(e.target.value);
        }}
      >
        <option value="news">General</option>
        <option value="entertainment">Entertainment</option>
        <option value="business">Business</option>
        <option value="politics">Politics</option>
        <option value="science">Science</option>
        <option value="sport">Sports</option>
        <option value="tech">Tech</option>
      </select>
    </nav>
  );
};

export default Filters;
