import React from "react";
import Filters from "./Filters";
import DiplayArticles from "./DisplayArticles";
import { motion } from "framer-motion";
const Newscontainer = ({ NewsData, setTopic, setCountry, Loading }) => {
  return (
    <motion.section className="flex flex-col items-start gap-5 flex-wrap  ">
      <Filters setCountry={setCountry} setTopic={setTopic} />
      <DiplayArticles NewsData={NewsData} Loading={Loading} />
    </motion.section>
  );
};

export default Newscontainer;
