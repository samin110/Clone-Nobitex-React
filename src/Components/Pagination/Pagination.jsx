import React from "react";
import fixCryptoPercenrageFormat from "../../Utils/Utils";
import BtnBuySell from "../Buttons/BtnBuySell";

function Pagination({ item, tableNumber }) {
  return (
    <div
      className='grid grid-cols-[20%_40%_20%_15%] gap-5  text-xs items-center
                 py-4 px-3 border-gray-200 border-b last:border-b-0 h-[69px]'>
      <div className='flex items-center'>
        <div className='ml-12'>{tableNumber}</div>
        <div className='flex items-center'>
          <img src={item.image} className='w-9' />
          <div className='mr-4 text-lg font-semibold'>{item.symbol.toUpperCase()}</div>
        </div>
      </div>

      <div className='grid items-center grid-cols-3 font-sans'>
        <div>
          <p className='text-base font-bold text-[#14151A]'>
            <span className='mr-1 text-xs text-gray-400'>$</span>
            {item["current_price"].toLocaleString()}
          </p>
        </div>
        {fixCryptoPercenrageFormat(Number(item["price_change_percentage_24h"]))}
        <div>
          <p className='text-base font-bold text-gray-600'>
            <span className='mr-1 text-gray-400'>USD</span>
            {item.total_volume.toLocaleString()}
          </p>
        </div>
      </div>

      <div className='grid items-center grid-cols-2 mr-8'>
        {fixCryptoPercenrageFormat(Number(item["price_change_percentage_7d_in_currency"]), "text-slate-400 font-normal mr-0")}
        <div>
          <img src={`https://nobitex.ir/cdn/charts/${item.symbol}.svg`} alt='نمودار هفتگی' className='w-28 invert hue-rotate-[45deg]' />
        </div>
      </div>
      <div className='text-left'>
        <BtnBuySell style='!w-32' />
      </div>
    </div>
  );
}

export default Pagination;
