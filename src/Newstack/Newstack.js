import React, { useEffect, useState } from "react";
import Newscontainer from "./Newscontainer";
const Newstack = () => {
  const [NewsData, setNewsData] = useState([]);
  const [Country, setCountry] = useState("IN");
  const [Topic, setTopic] = useState("news");
  const [Loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "x-api-key": "ljw4DS6A0wiucTCCVlslFsvxlla-cPJh2mgg0Jml6UY",
    },
  };
  async function getData() {
    setLoading(true);
    const res = await fetch(
      `https://api.newscatcherapi.com/v2/latest_headlines?countries=${Country}&topic=${Topic}&page_size=5&lang=en`,
      options
    );
    const json = await res.json();
    console.log(json);
    setLoading(false);
    setNewsData(json.articles);
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
      />
    </section>
  );
};

export default Newstack;
