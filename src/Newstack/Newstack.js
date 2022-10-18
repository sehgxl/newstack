import React, { useEffect, useState } from "react";
import Newscontainer from "./Newscontainer";
const Newstack = () => {
  const [NewsData, setNewsData] = useState([]);
  const [Country, setCountry] = useState("en-IN");
  const [Topic, setTopic] = useState("Business");
  const [Loading, setLoading] = useState(false);
  const [Page, setPage] = useState(1);
  const [ErrorStatus, setErrorStatus] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "6d6188f4d6msh4a22f6e54132a7fp1df093jsn98522b0adc81",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  async function getData() {
    setLoading(true);
    const res = await fetch(
      `https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw&category=${Topic}&mkt=${Country}`,
      options
    );
    const json = await res.json();
    console.log("hey this is the server response", json.value);
    setLoading(false);
    // if (json.status === "error") {
    //   setErrorStatus(true);
    //   console.log(ErrorStatus);
    // } else {
    setNewsData(json.value);
    // }
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
