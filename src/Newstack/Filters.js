import React from "react";

const Filters = ({ setTopic, setCountry }) => {
  return (
    <nav className="flex gap-2">
      <select
        className="px-4"
        name="country"
        id="country"
        onChange={(e) => {
          setCountry(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option className="text-start" value="IN">
          India
        </option>
        <option className="text-start" value="CH">
          China
        </option>
        <option className="text-start" value="US">
          USA
        </option>
      </select>
      <select
        className="px-4"
        name="category"
        id="category"
        onChange={(e) => {
          setTopic(e.target.value);
        }}
      >
        <option className="text-start" value="news">
          General
        </option>
        <option className="text-start" value="entertainment">
          Entertainment
        </option>
        <option className="text-start" value="business">
          Business
        </option>
        <option className="text-start" value="politics">
          Politics
        </option>
        <option className="text-start" value="science">
          Science
        </option>
        <option className="text-start" value="sport">
          Sports
        </option>
        <option className="text-start" value="tech">
          Tech
        </option>
      </select>
    </nav>
  );
};

export default Filters;
