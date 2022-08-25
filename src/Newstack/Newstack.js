import React, { useEffect, useState } from "react";
import Newscontainer from "./Newscontainer";
const Newstack = () => {
  const [NewsData, setNewsData] = useState([]);
  const [Country, setCountry] = useState("IN");
  const [Topic, setTopic] = useState("news");
  const [Loading, setLoading] = useState(false);
  const [Page, setPage] = useState(1);

  const options = {
    method: "GET",
    headers: {
      "x-api-key": "ljw4DS6A0wiucTCCVlslFsvxlla-cPJh2mgg0Jml6UY",
    },
  };
  async function getData() {
    setLoading(true);
    const res = await fetch(
      `https://api.newscatcherapi.com/v2/latest_headlines?countries=${Country}&topic=${Topic}&lang=en`,
      options
    );
    const json = await res.json();
    console.log(json);
    setLoading(false);
    setNewsData(json.articles.slice(0, 25));
  }

  useEffect(() => {
    getData();
  }, [Topic, Country]);

  return (
    <section className="font-mono bg-black min-h-screen flex justify-center items-center px-40">
      <Newscontainer
        NewsData={NewsData}
        setCountry={setCountry}
        setTopic={setTopic}
        Loading={Loading}
        Page={Page}
        setPage={setPage}
      />
    </section>
  );
};

export default Newstack;
