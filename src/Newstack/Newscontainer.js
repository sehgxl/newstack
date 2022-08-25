import React from "react";
import Filters from "./Filters";
import DiplayArticles from "./DisplayArticles";

const Newscontainer = ({ NewsData, setTopic, setCountry, Loading }) => {
  return (
    <section className="flex flex-col items-start gap-5 flex-wrap  ">
      <Filters setCountry={setCountry} setTopic={setTopic} />
      <DiplayArticles NewsData={NewsData} Loading={Loading} />
    </section>
  );
};

export default Newscontainer;
