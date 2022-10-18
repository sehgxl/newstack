import React from "react";
import Filters from "./Filters";
import DiplayArticles from "./DisplayArticles";
import ReactPaginate from "react-paginate";
import { useState } from "react";
const Newscontainer = ({
  NewsData,
  setTopic,
  setCountry,
  Loading,
  ErrorStatus,
}) => {
  //current pg no
  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 5;
  //needed for slicing the array. to show articles like 0-10,10-20,20-30
  const pagesVisited = pageNumber * articlesPerPage;

  const showArticles = NewsData?.slice(
    pagesVisited,
    pagesVisited + articlesPerPage
  );
  //how many pages
  const pageCount = Math.ceil(NewsData?.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <section className="flex flex-col gap-3 items-center py-4 justify-between">
      <Filters setCountry={setCountry} setTopic={setTopic} />
      <DiplayArticles
        NewsData={NewsData}
        Loading={Loading}
        showArticles={showArticles}
        ErrorStatus={ErrorStatus}
      />
      <ReactPaginate
        previousLabel={"Back"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"self-center  text-center  text-white flex gap-5 "}
        previousClassName={
          " py-2 border-b border-transparent  hover:border-white  "
        }
        nextClassName={" py-2 border-b border-transparent hover:border-white  "}
        disabledClassName={""}
        pageClassName={
          " py-2 border-b border-transparent  hover:border-white px-2   "
        }
        activeClassName={"text-green-500"}
      />
    </section>
  );
};

export default Newscontainer;
