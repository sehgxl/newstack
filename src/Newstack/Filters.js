import React from "react";

const Filters = ({ setCategory, setCountry }) => {
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
        <option className="text-start" value="in">
          India
        </option>
        <option className="text-start" value="ch">
          China
        </option>
        <option className="text-start" value="us">
          USA
        </option>
      </select>
      <select
        className="px-4"
        name="category"
        id="category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option className="text-start" value="general">
          General
        </option>
        <option className="text-start" value="entertainment">
          Entertainment
        </option>
        <option className="text-start" value="business">
          Business
        </option>
        <option className="text-start" value="health">
          Health
        </option>
        <option className="text-start" value="science">
          Science
        </option>
        <option className="text-start" value="sports">
          Sports
        </option>
        <option className="text-start" value="technology">
          Tech
        </option>
      </select>
    </nav>
  );
};

export default Filters;
