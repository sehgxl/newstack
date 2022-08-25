import React, { useState } from "react";
import LoadingDots from "./LoadingDots";
import Newsitem from "./Newsitem";
import ReactPaginate from "react-paginate";
const DiplayArticles = ({ NewsData, Loading }) => {
  //current pg no
  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 5;
  //needed for slicing the array. to show articles like 0-10,10-20,20-30
  const pagesVisited = pageNumber * articlesPerPage;

  const showArticles = NewsData?.slice(
    pagesVisited,
    pagesVisited + articlesPerPage
  );
  let itemID = 0;
  //how many pages
  const pageCount = Math.ceil(NewsData.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <span>
      {Loading ? (
        <LoadingDots />
      ) : (
        <section className="flex flex-col max-w-[45rem] items-start gap-7 ">
          {showArticles?.map((item) => {
            return <Newsitem item={item} key={itemID++} />;
          })}
          <ReactPaginate
            className=""
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={
              "absolute bottom-5 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center  text-white flex gap-5"
            }
            previousClassName={
              " py-2 border-b border-transparent  hover:border-white  "
            }
            nextClassName={
              " py-2 border-b border-transparent hover:border-white  "
            }
            disabledClassName={""}
            pageClassName={
              " py-2 border-b border-transparent  hover:border-white px-2   "
            }
            activeClassName={"text-green-500"}
          />
        </section>
      )}
    </span>
  );
};

export default DiplayArticles;
