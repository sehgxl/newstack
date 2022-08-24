import React from "react";
import Filters from "./Filters";
import LoadingDots from "./LoadingDots";
import Newsitem from "./Newsitem";

const Newscontainer = ({ NewsData, setTopic, setCountry, Loading }) => {
  let itemID = 0;
  return (
    <section>
      <section className="flex flex-col items-start gap-5 flex-wrap ">
        <Filters setCountry={setCountry} setTopic={setTopic} />
        {Loading ? (
          <LoadingDots />
        ) : (
          NewsData?.map((item) => {
            return <Newsitem item={item} key={itemID++} />;
          })
        )}
      </section>
    </section>
  );
};

export default Newscontainer;
