import React, { useEffect, useState } from "react";
import Newscontainer from "./Newscontainer";
const Newstack = () => {
  const [NewsData, setNewsData] = useState([]);
  const [Country, setCountry] = useState("in");
  const [Topic, setTopic] = useState("general");
  const [Loading, setLoading] = useState(false);
  const [Page, setPage] = useState(1);
  const [ErrorStatus, setErrorStatus] = useState(false);
  async function getData() {
    setLoading(true);
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${Country}&apiKey=1453bad8a6864bffa43aaa108dd5128a&category=${Topic}`
    );
    const json = await res.json();
    console.log("hey this is the server response", json);
    setLoading(false);
    if (json.status === "error") {
      setErrorStatus(true);
      console.log(ErrorStatus);
    } else {
      setNewsData(json.articles.slice(0, 25));
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Topic, Country]);

  return (
    <section className="font-mono  bg-black min-h-screen flex justify-center  px-10 sm:px-20  lg:px-30  ">
      <Newscontainer
        NewsData={NewsData}
        setCountry={setCountry}
        setTopic={setTopic}
        Loading={Loading}
        Page={Page}
        setPage={setPage}
        ErrorStatus={ErrorStatus}
      />
    </section>
  );
};

export default Newstack;
