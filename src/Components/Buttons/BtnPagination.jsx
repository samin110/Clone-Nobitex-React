import React from "react";

function BtnPagination({ number, paginationHandler }) {
  return (
    <button
      className='text-xs rounded-full shadow-[2px_5px_10px_rgba(20,26,21,0.3)]
           w-7 h-7 bg-white mr-2 border-gray-400 border text-gray-900
            hover:bg-purple-400  hover:text-white transition active:bg-black ease-in-out font-bold'
      onClick={paginationHandler}
    >
      {number}
    </button>
  );
}

export default BtnPagination;
