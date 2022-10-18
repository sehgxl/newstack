import React from "react";

const Newsitem = ({ item }) => {
  return (
    <a
      target="_blank"
      href={item.url}
      className="text-white border-b pb-2 text-start border-white hover:text-green-500  [&>*]:hover:text-green-500 hover:border-green-500 text-xs sm:text-base  lg:text-lg"
      rel="noreferrer"
    >
      {item.title}-<span className="font-bold "> {item.clean_url}</span>
    </a>
  );
};

export default Newsitem;
