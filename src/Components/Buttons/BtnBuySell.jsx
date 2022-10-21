import React from "react";

function BtnBuySell({ style }) {
  return (
    <button
      className={`w-40  text-base text-green-600 transition ease-in ${style}
     bg-white border border-green-600 rounded h-9 hover:bg-teal-500 hover:text-white`}>
      خرید و فروش
    </button>
  );
}

export default BtnBuySell;
