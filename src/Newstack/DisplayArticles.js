import React from "react";
import LoadingDots from "./LoadingDots";
import Newsitem from "./Newsitem";
const DiplayArticles = ({ Loading, showArticles, ErrorStatus }) => {
  return (
    <>
      {Loading ? (
        <LoadingDots />
      ) : (
        <section className="flex flex-col flex-wrap gap-6 sm:gap-10 items-start ">
          {ErrorStatus ? (
            <h1 className="text-white text-xl">
              Oops! Some Error has occured.{" "}
            </h1>
          ) : null}
          {showArticles?.map((item) => {
            return <Newsitem item={item} key={item._id} />;
          })}
        </section>
      )}
    </>
  );
};
export default DiplayArticles;
