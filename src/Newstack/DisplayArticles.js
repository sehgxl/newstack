import React, { useState } from "react";
import LoadingDots from "./LoadingDots";
import Newsitem from "./Newsitem";
const DiplayArticles = ({ NewsData, Loading, showArticles }) => {
  return Loading ? (
    <LoadingDots />
  ) : (
    <section className="flex flex-col flex-wrap gap-6 sm:gap-10 items-start ">
      {showArticles?.map((item) => {
        return <Newsitem item={item} key={item._id} />;
      })}
    </section>
  );
};
export default DiplayArticles;
