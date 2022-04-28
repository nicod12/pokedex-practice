import React from "react";
import { FcLeft, FcRight } from "react-icons/fc";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <FcLeft />
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <FcRight />
      </button>
    </div>
  );
};

export default Pagination;
