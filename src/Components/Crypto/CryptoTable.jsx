import axios from "axios";
import React, { Fragment, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  cryptoPriceContext,
  cryptoPriceContextDispatcher,
} from "../../Context/CryptoContext";
import { getCryptoData } from "../../services/getCryptoData";

function CryptoTable() {
  //  UseContext()
  const cryptoData = useContext(cryptoPriceContext);
  const cryptoDataDispatch = useContext(cryptoPriceContextDispatcher);

  // useEffect for get data from api and sets the data in the context
  useEffect(() => {
    const getDataFromApi = () => {
      getCryptoData(
        "market/stats?srcCurrency=btc,eth,etc,usdt,ada,bch,ltc,bnb,eos,xlm,xrp,trx,doge,uni,link,dai,dot,shib,aave,ftm,matic,axs,mana,sand,avax,usdc,gmt,mkr,sol,atom,grt,bat,near,ape,qnt,chz,pmn&dstCurrency=rls,usdt"
      )
        .then((response) => cryptoDataDispatch(response.data))
        .catch((err) => console.log(err));
    };
    getDataFromApi();
  }, []);

  return (
    //Start ==> Section to display currencies
    <section className='bg-gray-100 -translate-y-80 h-[700px]'>
      {/* Start container */}
      <div className=' w-[97%] mx-auto rounded'>
        {/* Choice market */}
        <div className='w-[350px] bg-white text-base h-14 flex items-end rounded-t-xl'>
          <div className='flex justify-around w-full'>
            <div className='flex items-center'>انتخاب بازار براساس</div>
            <div className='flex '>
              <button className='px-4 py-2 rounded-tr rounded-br bg-[#E3E4E5] text-gray-400'>
                تومان IRT
              </button>
              <button className='px-4 py-2 text-white rounded-tl rounded-bl bg-neutral-500'>
                تتر USDT
              </button>
            </div>
          </div>
        </div>

        {/* Start ==> table container */}
        <div className='shadow-[0px_9px_10px_rgba(20,21,26,0.1)] rounded-md'>
          {/* Start ==> header for table */}
          <div className='border-b border-y-slate-200'>
            <div className='bg-white grid grid-cols-[25%_20%_25%] gap-x-[10%]  text-xs text-[#AeA5A8] p-4 rounded-tl-lg'>
              <div className='col-start-1 col-end-2 pr-16'>نام</div>
              <div className='grid grid-flow-col col-start-2 col-end-3'>
                <div>آخرین قیمت</div>
                <div className='mr-12'>تغییر 24h</div>
              </div>
              <div className='grid grid-flow-col mr-12 '>
                <div>نمودار هفتگی</div>
              </div>
            </div>
          </div>
          {/* End ==> header for table */}

          {/* Start ==> First row */}
          <div className='border-b border-y-slate-200'>
            <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
              <Link to='crypto/bitcoin'>
                <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
                  <div className='w-10 h-10'>
                    <img
                      src='assets/images/Btc.svg'
                      className='w-full h-full'
                    />
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
                    {cryptoData.status == "ok" &&
                      Number(
                        cryptoData.stats["btc-usdt"].bestBuy
                      ).toLocaleString()}
                  </p>
                </div>
                <div className='mr-8'>
                  <span
                    className={`
                  ${
                    cryptoData.status == "ok" &&
                    cryptoData.stats["btc-rls"].dayChange > 0
                      ? "bg-teal-100 text-teal-500"
                      : "bg-rose-50 text-rose-500"
                  }
                  font-sans text-base font-semibold rounded px-1`}
                  >
                    %{" "}
                    <span className='inline-block dir-left'>
                      {cryptoData.status == "ok" &&
                        cryptoData.stats["btc-rls"].dayChange}{" "}
                    </span>
                    {cryptoData.status == "ok" &&
                    cryptoData.stats["btc-rls"].dayChange > 0
                      ? "+"
                      : ""}
                  </span>
                </div>
              </div>

              <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
                <div>
                  <img
                    src='https://cdn.nobitex.ir/charts/btc.svg'
                    className='w-28 invert hue-rotate-[45deg]'
                  />
                </div>
                <button className='w-40 text-base text-green-600 transition ease-in bg-white border border-green-600 rounded h-9 hover:bg-teal-500 hover:text-white'>
                  خرید و فروش
                </button>
              </div>
            </div>
          </div>
          {/* End ==> First row */}
          {/* Start ==> Second row */}
          <div className='border-b border-y-slate-200'>
            <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
              <Link to='crypto/ethereum'>
                <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
                  <div className='w-10 h-10'>
                    <img
                      src='assets/images/Eth.svg'
                      className='w-full h-full'
                    />
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
                    {cryptoData.status == "ok" &&
                      Number(
                        cryptoData.stats["eth-usdt"].bestBuy
                      ).toLocaleString()}
                  </p>
                </div>
                <div className='mr-8'>
                  <span
                    className={`
                  ${
                    cryptoData.status == "ok" &&
                    cryptoData.stats["eth-rls"].dayChange > 0
                      ? "bg-teal-100 text-teal-500"
                      : "bg-rose-50 text-rose-500"
                  }
                  font-sans text-base font-semibold rounded px-1`}
                  >
                    %{" "}
                    <span className='inline-block dir-left'>
                      {cryptoData.status == "ok" &&
                        cryptoData.stats["eth-rls"].dayChange}{" "}
                    </span>
                    {cryptoData.status == "ok" &&
                    cryptoData.stats["eth-rls"].dayChange > 0
                      ? "+"
                      : ""}
                  </span>
                </div>
              </div>

              <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
                <div>
                  <img
                    src='https://cdn.nobitex.ir/charts/eth.svg'
                    className='w-28 invert hue-rotate-[45deg]'
                  />
                </div>
                <button className='w-40 text-base text-green-600 transition ease-in bg-white border border-green-600 rounded h-9 hover:bg-teal-500 hover:text-white'>
                  خرید و فروش
                </button>
              </div>
            </div>
          </div>
          {/* End ==> Second row */}
          {/* Start ==> Third row */}
          <div className='border-b border-y-slate-200'>
            <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
              <Link to='crypto/shiba'>
                <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
                  <div className='w-10 h-10'>
                    <img
                      src='assets/images/shib.svg'
                      className='w-full h-full'
                    />
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
                    {cryptoData.status == "ok" &&
                      Number(
                        cryptoData.stats["shib-rls"].bestBuy
                      ).toLocaleString()}
                  </p>
                </div>
                <div className='mr-8'>
                  <span
                    className={`
                  ${
                    cryptoData.status == "ok" &&
                    cryptoData.stats["shib-rls"].dayChange > 0
                      ? "bg-teal-100 text-teal-500"
                      : "bg-rose-50 text-rose-500"
                  }
                  font-sans text-base font-semibold rounded px-1`}
                  >
                    %{" "}
                    <span className='inline-block dir-left'>
                      {cryptoData.status == "ok" &&
                        cryptoData.stats["shib-rls"].dayChange}{" "}
                    </span>
                    {cryptoData.status == "ok" &&
                    cryptoData.stats["shib-rls"].dayChange > 0
                      ? "+"
                      : ""}
                  </span>
                </div>
              </div>

              <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
                <div>
                  <img
                    src='https://cdn.nobitex.ir/charts/shib.svg'
                    className='w-28 invert hue-rotate-[45deg]'
                  />
                </div>
                <button className='w-40 text-base text-green-600 transition ease-in bg-white border border-green-600 rounded h-9 hover:bg-teal-500 hover:text-white'>
                  خرید و فروش
                </button>
              </div>
            </div>
          </div>
          {/* End ==> Third row */}
          {/* Start ==> fourth row */}
          <div className='border-b border-y-slate-200'>
            <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
              <Link to='crypto/cardano'>
                <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
                  <div className='w-10 h-10'>
                    <img
                      src='assets/images/ada.svg'
                      className='w-full h-full'
                    />
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
                    {cryptoData.status == "ok" &&
                      Number(
                        cryptoData.stats["ada-usdt"].bestBuy
                      ).toLocaleString()}
                  </p>
                </div>
                <div className='mr-8'>
                  <span
                    className={`
                  ${
                    cryptoData.status == "ok" &&
                    cryptoData.stats["ada-rls"].dayChange > 0
                      ? "bg-teal-100 text-teal-500"
                      : "bg-rose-50 text-rose-500"
                  }
                  font-sans text-base font-semibold rounded px-1`}
                  >
                    %{" "}
                    <span className='inline-block dir-left'>
                      {cryptoData.status == "ok" &&
                        cryptoData.stats["ada-rls"].dayChange}{" "}
                    </span>
                    {cryptoData.status == "ok" &&
                    cryptoData.stats["ada-rls"].dayChange > 0
                      ? "+"
                      : ""}
                  </span>
                </div>
              </div>

              <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
                <div>
                  <img
                    src='https://cdn.nobitex.ir/charts/ada.svg'
                    className='w-28 invert hue-rotate-[45deg]'
                  />
                </div>
                <button className='w-40 text-base text-green-600 transition ease-in bg-white border border-green-600 rounded h-9 hover:bg-teal-500 hover:text-white'>
                  خرید و فروش
                </button>
              </div>
            </div>
          </div>
          {/* End ==> fourth row */}
          {/* Start ==> Fifth row */}
          <div className='border-b border-y-slate-200'>
            <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
              <Link to='crypto/tron'>
                <div className='flex items-center col-start-1 col-end-2 gap-3 pr-14 h-fit'>
                  <div className='w-10 h-10'>
                    <img
                      src='assets/images/trx.svg'
                      className='w-full h-full'
                    />
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
                    {cryptoData.status == "ok" &&
                      Number(
                        cryptoData.stats["trx-usdt"].bestBuy
                      ).toLocaleString()}
                  </p>
                </div>
                <div className='mr-8'>
                  <span
                    className={`
                  ${
                    cryptoData.status == "ok" &&
                    cryptoData.stats["trx-rls"].dayChange > 0
                      ? "bg-teal-100 text-teal-500"
                      : "bg-rose-50 text-rose-500"
                  }
                  font-sans text-base font-semibold rounded px-1`}
                  >
                    %{" "}
                    <span className='inline-block dir-left'>
                      {cryptoData.status == "ok" &&
                        cryptoData.stats["trx-rls"].dayChange}{" "}
                    </span>
                    {cryptoData.status == "ok" &&
                    cryptoData.stats["trx-rls"].dayChange > 0
                      ? "+"
                      : ""}
                  </span>
                </div>
              </div>

              <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
                <div>
                  <img
                    src='https://cdn.nobitex.ir/charts/trx.svg'
                    className='w-28 invert hue-rotate-[45deg]'
                  />
                </div>
                <button className='w-40 text-base text-green-600 transition ease-in bg-white border border-green-600 rounded h-9 hover:bg-teal-500 hover:text-white'>
                  خرید و فروش
                </button>
              </div>
            </div>
          </div>
          {/* End ==> Fifth row */}
          {/* Start ==> Sixth row */}
          <div className='border-b border-y-slate-200'>
            <div className='bg-white grid grid-cols-[25%_20%_35%] gap-x-[10%]  text-xs text-[#AeA5A8] p-3'>
              <Link to='crypto/dogecoin'>
                <div className='flex items-center col-end-2 gap-3 col-stacrypto/rt-1 pr-14 h-fit'>
                  <div className='w-10 h-10'>
                    <img
                      src='assets/images/doge.svg'
                      className='w-full h-full'
                    />
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
                    {cryptoData.status == "ok" &&
                      Number(
                        cryptoData.stats["doge-usdt"].bestBuy
                      ).toLocaleString()}
                  </p>
                </div>
                <div className='mr-8'>
                  <span
                    className={`
                  ${
                    cryptoData.status == "ok" &&
                    cryptoData.stats["doge-rls"].dayChange > 0
                      ? "bg-teal-100 text-teal-500"
                      : "bg-rose-50 text-rose-500"
                  }
                  font-sans text-base font-semibold rounded px-1`}
                  >
                    %{" "}
                    <span className='inline-block dir-left'>
                      {cryptoData.status == "ok" &&
                        cryptoData.stats["doge-rls"].dayChange}{" "}
                    </span>
                    {cryptoData.status == "ok" &&
                    cryptoData.stats["doge-rls"].dayChange > 0
                      ? "+"
                      : ""}
                  </span>
                </div>
              </div>

              <div className='grid items-center justify-between grid-flow-col mr-12 h-fit'>
                <div>
                  <img
                    src='https://cdn.nobitex.ir/charts/doge.svg'
                    className='w-28 invert hue-rotate-[45deg]'
                  />
                </div>
                <button className='w-40 text-base text-green-600 transition ease-in bg-white border border-green-600 rounded h-9 hover:bg-teal-500 hover:text-white'>
                  خرید و فروش
                </button>
              </div>
            </div>
          </div>
          {/* End ==> Sixth row */}
          {/* Start ==> Create the last child of the table */}
          <div className='flex items-center justify-center p-4 bg-white rounded-b-lg'>
            <Link to='/crypto-list'>
              <div className='text-base text-purple-700 transition ease-in-out ml hover:text-purple-800 '>
                نمایش همه بازارها
              </div>
            </Link>
            <div>
              <img src='assets/images/chevron-icon-left.svg' />
            </div>
          </div>
          {/* End ==> Create the last child of the table */}
        </div>
        {/* End ==> table container */}
      </div>
      {/* End container */}
    </section>
    //End ==> Section to display currencies
  );
}

export default CryptoTable;
