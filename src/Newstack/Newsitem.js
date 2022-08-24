import React from "react";

const Newsitem = ({ item }) => {
  return (
    <a
      target="_blank"
      href={item.url}
      className="text-white border-b pb-2 text-start border-white hover:text-green-500 hover:border-green-500"
      rel="noreferrer"
    >
      {item.title}
    </a>
  );
};

export default Newsitem;
