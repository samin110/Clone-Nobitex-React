import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import BtnPagination from "../Components/Buttons/BtnPagination";
import Pagination from "../Components/Pagination/Pagination";
import Spinner from "../Components/Spinner";
import { cryptoContext } from "../Context/CryptoContext";
import { cryptoContextDispatch } from "../Context/CryptoContext";
import { convertToInternationalCurrencySystem } from "../Utils/Utils";

function CryptoListPage() {
  // ***    Hooks    ***

  //--------- useContext
  const { getDataFromApiForPagination } = useContext(cryptoContext);
  const { setGetDataFromApiForPagination } = useContext(cryptoContextDispatch);

  // -------- useState
  const [pageNumberPagination, setPageNumberPagination] = useState(1);
  const [highestPrice24h, setHighestPrice24h] = useState(null);
  const [highestVolume24h, setHighestVolume24h] = useState(null);

  useEffect(() => {
    const getDataForPagination = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumberPagination}&sparkline=false&price_change_percentage=7d`
        );
        await setGetDataFromApiForPagination(data);
      } catch (err) {
        err &&
          toast.error("خطا در برقراری ارتباط  !!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { fontFamily: "inherit" },
          });
      }
    };
    getDataForPagination();
  }, [pageNumberPagination]);

  //  ========================================================================

  // ****  Functions   ****

  findHighestPrice();
  findHighestVolume();

  // Make a Http request (method:GET) and Get Data From API and sets to Context

  // Handler For pagination button
  const paginationHandler = (e) => setPageNumberPagination(Number(e.target.textContent));

  // START ==> This function is for Find highest volume in 24h
  function findHighestVolume() {
    // *** STEP 1 ==> Extract volume in 24h from paginationData and set to currencyVolume variable
    const currencyVolume =
      getDataFromApiForPagination.length > 0 &&
      getDataFromApiForPagination.map((currency) => {
        return currency.total_volume;
      });

    // *** STEP 2 ==> Find Max Volume From currencyVolume Variable
    const maxVolume = currencyVolume && Math.max(...currencyVolume);

    // *** STEP 3 ==> Extract currency (currency object ) and setState to highesVolume24h state
    getDataFromApiForPagination.length > 0 &&
      getDataFromApiForPagination.map((currency) => {
        if (maxVolume == currency.total_volume) {
          if (highestVolume24h != currency) {
            setHighestVolume24h(currency);
          }
        }
      });
  }
  // *** END  ==> This function is for Find highest volume in 24h

  // START ==> This Function is for Find highest and lowest price in 24h from paginationData
  function findHighestPrice() {
    // *** STEP 1 ==> Extract price_change_percentage_24h from paginationData and set to currencyPricePercentage variable
    const currencyPricePercentage =
      getDataFromApiForPagination.length > 0 &&
      getDataFromApiForPagination.map((currency) => {
        return currency.price_change_percentage_24h;
      });

    // *** STEP 2 ==> Find max price and min price from STEP 1
    let maxPrice = 0;
    let minPrice = 0;
    for (let i = 0; i < currencyPricePercentage.length; i++) {
      if (currencyPricePercentage[i] > maxPrice) {
        maxPrice = currencyPricePercentage[i];
      } else if (currencyPricePercentage[i] < minPrice) {
        minPrice = currencyPricePercentage[i];
      }
    }

    // *** STEP 3 ==> Extract currency (currency object) and setState to highestPrice24h state
    getDataFromApiForPagination.length > 0 &&
      getDataFromApiForPagination.map((crypto) => {
        if ((minPrice < 0 && maxPrice > 0) || (minPrice > 0 && maxPrice > 0)) {
          if (crypto.price_change_percentage_24h == maxPrice) {
            if (highestPrice24h != crypto) {
              setHighestPrice24h(crypto);
            }
          }
        } else if (minPrice < 0 && maxPrice < 0) {
          alert("تمام ارزها منفی هستند!!!");
        }
      });
  }
  // *** END  ==> this Function is for Find highest and lowest price in 24h from paginationData

  // Set number for each table row
  let tableNumber;
  switch (pageNumberPagination) {
    case 1:
      tableNumber = 0;
      break;
    case 2:
      tableNumber = 10;
      break;
    case 3:
      tableNumber = 20;
      break;
    case 4:
      tableNumber = 30;
      break;
    case 5:
      tableNumber = 40;
      break;
  }

  // This function is Pagination buttons
  function paginationButton(pageNumbers) {
    return pageNumbers.map((number) => {
      return <BtnPagination number={number} paginationHandler={paginationHandler} />;
    });
  }

  //  ***===========================================================================================***

  return (
    <div>
      {/* START ==> Header  */}
      <section className='bg-[#1e2026]  w-full h-[350px] relative overflow-hidden'>
        <div
          className='w-[100%] h-full bg-no-repeat bg-left 
                     bg-header-image-cryptoListPage absolute -left-[13rem] opacity-50'
        ></div>

        <div className='flex flex-col justify-end h-full pb-16'>
          <h1 className='text-5xl font-bold tracking-wide text-center text-white'>قیمت لحظه‌ای رمزارزهای نوبیتکس</h1>
          <h3 className='mt-3 mb-5 text-lg tracking-wide text-center text-gray-300'>
            همه قیمت های بازار نوبیتکس را یکجا ببینید
          </h3>
        </div>
      </section>
      {/* Card */}
      <div className='flex bg-gray-100 h-44 justify-evenly'>
        <div
          className='bg-white  flex rounded-md items-center -translate-y-12 w-[407px]
         justify-center  shadow-[0_2px_10px_rgba(20,21,260,0.1)]'
        >
          <div className='flex flex-col h-full justify-evenly'>
            <h2 className='text-xl'>بیشترین افزایش قیمت 24h</h2>
            <div className='flex'>
              <img src={highestPrice24h ? highestPrice24h.image : " "} className='w-14' />
              <div className='flex flex-col justify-center mr-2'>
                <p className='text-base font-semibold'>{highestPrice24h && highestPrice24h.name.toUpperCase()}</p>
                <p className='text-lg'>
                  <span className='mr-2 text-base text-gray-400'>USD</span>
                  {highestPrice24h && highestPrice24h.current_price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center mr-5 text-2xl font-bold tracking-normal text-teal-500 bg-gray-100 rounded-full w-28 h-28'>
            {highestPrice24h && highestPrice24h.price_change_percentage_24h.toFixed(2)}%+
          </div>
        </div>

        <div
          className='bg-white  flex rounded-md items-center -translate-y-12 w-[407px]
         justify-center  shadow-[0_2px_10px_rgba(20,21,260,0.1)]'
        >
          <div className='flex flex-col h-full justify-evenly'>
            <h2 className='text-xl'>بیشترین حجم معامله 24h</h2>
            <div className='flex'>
              <img src={highestVolume24h ? highestVolume24h.image : " "} className='w-14' />
              <div className='flex flex-col justify-center mr-2'>
                <p className='text-base font-semibold'>{highestVolume24h && highestVolume24h.name.toUpperCase()}</p>
                <p className='text-lg'>
                  <span className='mr-2 text-base text-gray-400'>USD</span>{" "}
                  {highestVolume24h && highestVolume24h.current_price}
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center mr-5 text-2xl font-bold tracking-wider text-black bg-gray-100 rounded-full w-28 h-28'>
            {highestVolume24h && convertToInternationalCurrencySystem(highestVolume24h.total_volume)}
          </div>
        </div>

        <div
          className='bg-white  flex rounded-md items-center -translate-y-12 w-[407px]
         justify-center  shadow-[0_2px_10px_rgba(20,21,260,0.1)]'
        >
          <div className='flex flex-col h-full justify-evenly'>
            <h2 className='text-xl'>جدیدترین رمزارز نوبیتکس</h2>
            <div className='flex'>
              <img
                src={getDataFromApiForPagination.length > 0 ? getDataFromApiForPagination[6].image : " "}
                className='w-14'
              />
              <div className='flex flex-col justify-center mr-2'>
                <p className='text-base font-semibold'>
                  {getDataFromApiForPagination.length > 0 && getDataFromApiForPagination[6].name.toUpperCase()}
                </p>
                <p className='text-lg'>
                  <span className='mr-2 text-base text-gray-400'>USD</span>
                  {getDataFromApiForPagination.length > 0 &&
                    getDataFromApiForPagination[6].current_price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center mr-5 text-2xl text-teal-500 bg-gray-100 rounded-full w-28 h-28 text'>
            <p className='text-xs font-normal text-gray-600'>تاریخ انتشار</p>
            <p className='mt-1 text-sm font-semibold text-violet-500'>20 مهر 1401</p>
          </div>
        </div>
      </div>

      {/* *** END ==> Header */}
      {/* START ==> Cryptocurrency list */}
      <main className='bg-gray-100 h-[810px] px-8'>
        {/* Choice market */}
        <div
          className='w-[350px] bg-white text-base h-14 flex items-end 
          rounded-t-xl shadow-[0_-10px_10px_rgba(20,21,26,0.1)]'
        >
          <div className='flex justify-around w-full'>
            <div className='flex items-center'>انتخاب بازار براساس</div>
            <div className='flex '>
              <button className='px-4 py-2 rounded-tr rounded-br bg-[#E3E4E5] text-gray-400'>تومان IRT</button>
              <button className='px-4 py-2 text-white rounded-tl rounded-bl bg-neutral-500'>تتر USDT</button>
            </div>
          </div>
        </div>
        {/* Choice market */}
        {/* START ==> Crypto Table */}
        <div className='shadow-[0_2px_10px_rgba(20,21,26,0.1)] rounded-b-lg rounded-tl-lg'>
          <div className='text-black bg-white rounded-b-lg rounded-tl-lg'>
            {/* Title  */}
            <div className='grid grid-cols-[20%_40%_20%_10%] text-xs gap-5  py-4 px-3 border-gray-200 border-b'>
              <div className='flex'>
                <div>#</div>
                <p className='mr-12'>نام</p>
              </div>
              <div className='grid grid-cols-3 '>
                <div>آخرین قیمت | قیمت جهانی</div>
                <div className='mr-5'>تغییر 24h</div>
                <div>حجم معاملات 24h</div>
              </div>
              <div className='grid items-center grid-cols-2 mr-8'>
                <div>تغییر هفتگی</div>
                <div>نمودار هفتگی</div>
              </div>
              <div></div>
            </div>
            {/* Title  */}

            {/* Ctypto List Component*/}
            {getDataFromApiForPagination.length > 0 ? (
              getDataFromApiForPagination.map((item) => (
                <Pagination item={item} tableNumber={(tableNumber += 1)} key={item.id} />
              ))
            ) : (
              //  Load Spinner
              <div className='flex items-center justify-center h-[500px]'>
                <Spinner style='w-24 h-24 fill-purple-600' />
              </div>
            )}
            {/* Ctypto List Component*/}
          </div>
        </div>
        {/* *** END ==> Crypto Table  */}
      </main>

      {/* Buttons for next/previouse page*/}
      {/* Render Pagination Buttons */}
      <ul className='flex justify-center h-24 font-sans  bg-gray-100'>{paginationButton([1, 2, 3, 4, 5])}</ul>
      {/* *** END ==> Cryptocurrency list  */}

      {/* Card image Horizonta */}
      <div className='px-8 bg-gray-100 h-[580px]'>
        <div className='flex items-center justify-between px-12 py-12 bg-white rounded-lg shadow-lg'>
          <div className='w-2/3 pr-20 '>
            <img src='./assets/images/tabadol.eab91cb.webp' className=' w-80' />
          </div>
          <div className='w-11/12'>
            <h1 className='mb-8 text-3xl font-semibold'>قیمت ارز دیجیتال در بازار نوبیتکس چطور محاسبه می‌شود؟</h1>
            <p className='text-lg leading-8 text-justify'>
              قیمت ارز دیجیتال در بازار ایران، تابع قیمت جهانی ارزهای دیجیتـــــــــال و قیمت ارز در ایران است. از
              آنجایی‌ که غالب معاملات ارز دیجیتال در دنیــــــــــــا با تتر انجام می‌شود؛ بنابراین قیمت لحظه‌ای ارز
              دیجیتال به ریال از حاصل‌ضرب قیمت آن به تتـــــــر در بازارهای جهانی، در قیمت تتر به ریال در ایران به دست
              می‌آید. برخلاف تصور عموم، قیمت تتر معادل قیمت دلار نقــــــدی گزارش‌شده از سوی بانک مرکزی یا حتی در بازار
              آزاد ایران نیست. بلکه بر اساس عرضه و تقاضــــــا در بازارهای ایرانی به دست می‌آید. اما برای یک تخمین مناسب
              از قیمت تتر، در تبدیل هر دلار آمریکا به تتر در بازارهای جهانی، هزینه‌ای بین 3 تا 7 درصد بسته بـه روش
              واریز، به‌صورت معمول کسر خواهد شد. به‌این‌ترتیب قیمت لحظه‌ای ارز دیجیتال در نوبیتکس با قیمت ارز دیجیتال در
              بازار جهانی دارای تفاوت محسوسی نیست و قیمت لحظه‌ای ارز دیجیتال به ریال نیز برحسب تغییر قیمت تتر، تغییر
              خواهد کرد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoListPage;
