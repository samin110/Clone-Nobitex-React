import { Link } from "react-router-dom";
import BtnBuySell from "../Buttons/BtnBuySell";
const CryptoContentTab = ({ cryptoData, exchangeRate }) => {
  // get length cryptoData props
  let cryptoDataLength = Object.keys(cryptoData[0]).length;
  return (
    <>
      {/* Start ==> First row */}
      <div className='border-b border-y-slate-200'>
        <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
          <Link to='crypto/bitcoin/btc'>
            <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
              <div className='w-10 h-10'>
                <img src='assets/images/Btc.svg' className='w-full h-full' />
              </div>
              <div>
                <p className='text-lg font-bold text-black'>BTC</p>
              </div>
              <div>
                <p className='text-sm text-[#A3A5A8]'>بیت&zwnj;کوین</p>
              </div>
            </div>
          </Link>

          <div className='grid items-center grid-flow-col col-start-2 col-end-3 '>
            <div className='w-24'>
              <p className='font-sans text-base font-semibold text-black'>
                {cryptoDataLength > 0 ? Number(cryptoData[0][`btc-${exchangeRate}`].bestBuy).toLocaleString() : "-"}
              </p>
            </div>
            <div className='mr-8'>
              <span
                className={`
                  ${cryptoDataLength > 0 && cryptoData[0]["btc-rls"].dayChange > 0 ? "bg-teal-100 text-teal-500" : "bg-rose-50 text-rose-500"}
                  font-sans text-base font-semibold rounded px-1`}>
                % <span className='inline-block dir-left'>{cryptoDataLength > 0 && cryptoData[0]["btc-rls"].dayChange} </span>
                {cryptoDataLength > 0 && cryptoData[0]["btc-rls"].dayChange > 0 ? "+" : ""}
              </span>
            </div>
          </div>

          <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
            <div>
              <img src='https://cdn.nobitex.ir/charts/btc.svg' className='w-28 invert hue-rotate-[45deg]' />
            </div>
            <BtnBuySell />
          </div>
        </div>
      </div>
      {/* End ==> First row */}
      {/* Start ==> Second row */}
      <div className='border-b border-y-slate-200'>
        <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
          <Link to='crypto/ethereum/eth'>
            <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
              <div className='w-10 h-10'>
                <img src='assets/images/Eth.svg' className='w-full h-full' />
              </div>
              <div>
                <p className='text-lg font-bold text-black'>ETH</p>
              </div>
              <div>
                <p className='text-sm text-[#A3A5A8]'>اتریوم</p>
              </div>
            </div>
          </Link>

          <div className='grid items-center grid-flow-col col-start-2 col-end-3'>
            <div className='w-24'>
              <p className='font-sans text-base font-semibold text-black'>
                {(cryptoDataLength > 0 && Number(cryptoData[0][`eth-${exchangeRate}`].bestBuy).toLocaleString()) || "-"}
              </p>
            </div>
            <div className='mr-8'>
              <span
                className={`
                  ${cryptoDataLength > 0 && cryptoData[0]["eth-rls"].dayChange > 0 ? "bg-teal-100 text-teal-500" : "bg-rose-50 text-rose-500"}
                  font-sans text-base font-semibold rounded px-1`}>
                % <span className='inline-block dir-left'>{cryptoDataLength > 0 && cryptoData[0]["eth-rls"].dayChange} </span>
                {cryptoDataLength > 0 && cryptoData[0]["eth-rls"].dayChange > 0 ? "+" : ""}
              </span>
            </div>
          </div>

          <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
            <div>
              <img src='https://cdn.nobitex.ir/charts/eth.svg' className='w-28 invert hue-rotate-[45deg]' />
            </div>
            <BtnBuySell />
          </div>
        </div>
      </div>
      {/* End ==> Second row */}
      {/* Start ==> Third row */}
      <div className='border-b border-y-slate-200'>
        <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
          <Link to='crypto/shiba-inu/shib'>
            <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
              <div className='w-10 h-10'>
                <img src='assets/images/shib.svg' className='w-full h-full' />
              </div>
              <div>
                <p className='text-lg font-bold text-black'>SHIB</p>
              </div>
              <div>
                <p className='text-sm text-[#A3A5A8]'>هزار شیبا</p>
              </div>
            </div>
          </Link>

          <div className='grid items-center grid-flow-col col-start-2 col-end-3'>
            <div className='w-24'>
              <p className='font-sans text-base font-semibold text-black'>
                {(cryptoDataLength > 0 && Number(cryptoData[0][`shib-${exchangeRate}`].bestBuy).toLocaleString()) || "-"}
              </p>
            </div>
            <div className='mr-8'>
              <span
                className={`
                  ${cryptoDataLength > 0 && cryptoData[0]["shib-rls"].dayChange > 0 ? "bg-teal-100 text-teal-500" : "bg-rose-50 text-rose-500"}
                  font-sans text-base font-semibold rounded px-1`}>
                % <span className='inline-block dir-left'>{cryptoDataLength > 0 && cryptoData[0]["shib-rls"].dayChange} </span>
                {cryptoDataLength > 0 && cryptoData[0]["shib-rls"].dayChange > 0 ? "+" : ""}
              </span>
            </div>
          </div>

          <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
            <div>
              <img src='https://cdn.nobitex.ir/charts/shib.svg' className='w-28 invert hue-rotate-[45deg]' />
            </div>
            <BtnBuySell />
          </div>
        </div>
      </div>
      {/* End ==> Third row */}
      {/* Start ==> fourth row */}
      <div className='border-b border-y-slate-200'>
        <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
          <Link to='crypto/cardano/ada'>
            <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
              <div className='w-10 h-10'>
                <img src='assets/images/ada.svg' className='w-full h-full' />
              </div>
              <div>
                <p className='text-lg font-bold text-black'>ADA</p>
              </div>
              <div>
                <p className='text-sm text-[#A3A5A8]'>کاردانو</p>
              </div>
            </div>
          </Link>
          <div className='grid items-center grid-flow-col col-start-2 col-end-3'>
            <div className='w-24'>
              <p className='font-sans text-base font-semibold text-black'>
                {(cryptoDataLength > 0 && Number(cryptoData[0][`ada-${exchangeRate}`].bestBuy).toLocaleString()) || "-"}
              </p>
            </div>
            <div className='mr-8'>
              <span
                className={`
                  ${cryptoDataLength > 0 && cryptoData[0]["ada-rls"].dayChange > 0 ? "bg-teal-100 text-teal-500" : "bg-rose-50 text-rose-500"}
                  font-sans text-base font-semibold rounded px-1`}>
                % <span className='inline-block dir-left'>{cryptoDataLength > 0 && cryptoData[0]["ada-rls"].dayChange} </span>
                {cryptoDataLength > 0 && cryptoData[0]["ada-rls"].dayChange > 0 ? "+" : ""}
              </span>
            </div>
          </div>

          <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
            <div>
              <img src='https://cdn.nobitex.ir/charts/ada.svg' className='w-28 invert hue-rotate-[45deg]' />
            </div>
            <BtnBuySell />
          </div>
        </div>
      </div>
      {/* End ==> fourth row */}
      {/* Start ==> Fifth row */}
      <div className='border-b border-y-slate-200'>
        <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
          <Link to='crypto/tron/trx'>
            <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
              <div className='w-10 h-10'>
                <img src='assets/images/trx.svg' className='w-full h-full' />
              </div>
              <div>
                <p className='text-lg font-bold text-black'>TRX</p>
              </div>
              <div>
                <p className='text-sm text-[#A3A5A8]'>ترون</p>
              </div>
            </div>
          </Link>

          <div className='grid items-center grid-flow-col col-start-2 col-end-3'>
            <div className='w-24'>
              <p className='font-sans text-base font-semibold text-black'>
                {(cryptoDataLength > 0 && Number(cryptoData[0][`trx-${exchangeRate}`].bestBuy).toLocaleString()) || "-"}
              </p>
            </div>
            <div className='mr-8'>
              <span
                className={`
                  ${cryptoDataLength > 0 && cryptoData[0]["trx-rls"].dayChange > 0 ? "bg-teal-100 text-teal-500" : "bg-rose-50 text-rose-500"}
                  font-sans text-base font-semibold rounded px-1`}>
                % <span className='inline-block dir-left'>{cryptoDataLength > 0 && cryptoData[0]["trx-rls"].dayChange} </span>
                {cryptoDataLength > 0 && cryptoData[0]["trx-rls"].dayChange > 0 ? "+" : ""}
              </span>
            </div>
          </div>

          <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
            <div>
              <img src='https://cdn.nobitex.ir/charts/trx.svg' className='w-28 invert hue-rotate-[45deg]' />
            </div>
            <BtnBuySell />
          </div>
        </div>
      </div>
      {/* End ==> Fifth row */}
      {/* Start ==> Sixth row */}
      <div className='border-b border-y-slate-200'>
        <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
          <Link to='crypto/dogecoin/doge'>
            <div className='flex items-center col-end-2 gap-3 col-stacrypto/rt-1 pr-14 h-fit'>
              <div className='w-10 h-10'>
                <img src='assets/images/doge.svg' className='w-full h-full' />
              </div>
              <div>
                <p className='text-lg font-bold text-black'>DOGE</p>
              </div>
              <div>
                <p className='text-sm text-[#A3A5A8]'>دوج&zwnj;کوین</p>
              </div>
            </div>
          </Link>

          <div className='grid items-center grid-flow-col col-start-2 col-end-3'>
            <div className='w-24'>
              <p className='font-sans text-base font-semibold text-black'>
                {(cryptoDataLength > 0 && Number(cryptoData[0][`doge-${exchangeRate}`].bestBuy).toLocaleString()) || "-"}
              </p>
            </div>
            <div className='mr-8'>
              <span
                className={`
                  ${cryptoDataLength > 0 && cryptoData[0]["doge-rls"].dayChange > 0 ? "bg-teal-100 text-teal-500" : "bg-rose-50 text-rose-500"}
                  font-sans text-base font-semibold rounded px-1`}>
                % <span className='inline-block dir-left'>{cryptoDataLength > 0 && cryptoData[0]["doge-rls"].dayChange} </span>
                {cryptoDataLength > 0 && cryptoData[0]["doge-rls"].dayChange > 0 ? "+" : ""}
              </span>
            </div>
          </div>

          <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
            <div>
              <img src='https://cdn.nobitex.ir/charts/doge.svg' className='w-28 invert hue-rotate-[45deg]' />
            </div>
            <BtnBuySell />
          </div>
        </div>
      </div>
      {/* End ==> Sixth row */}
    </>
  );
};

export default CryptoContentTab;
