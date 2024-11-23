import React from "react";
import "./style.css";

const Pagination = ({ currentPage, setPage }) => {
  return (
    <div className="pagination">
      <button className="previous-btn" disabled={currentPage === 1} onClick={() => setPage((prev) => prev - 1)}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button className="next-btn" onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
