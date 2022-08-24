import React, { useEffect, useState } from "react";
import Newscontainer from "./Newscontainer";
const Newstack = () => {
  const [NewsData, setNewsData] = useState([]);
  const [Country, setCountry] = useState("in");
  const [Category, setCategory] = useState("general");
  const [Page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);
  async function getData() {
    setLoading(true);
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${Country}&apiKey=1453bad8a6864bffa43aaa108dd5128a&pageSize=5&category=${Category}`
    );
    const json = await res.json();
    console.log(json);
    setLoading(false);
    setNewsData(json.articles);
  }

  useEffect(() => {
    getData();
  }, [Category, Country]);

  return (
    <section className="font-mono bg-black min-h-screen flex justify-center items-center px-40">
      <Newscontainer
        NewsData={NewsData}
        setCountry={setCountry}
        setCategory={setCategory}
        Loading={Loading}
      />
    </section>
  );
};

export default Newstack;
