import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cryptoContext, cryptoContextDispatch } from "../../Context/CryptoContext";
import { getCryptoData } from "../../services/getCryptoData";
import { toast } from "react-toastify";
import CryptoContentTab from "../CryptoContentTab/CryptoContentTab";
import Spinner from "../Spinner";

function CryptoTable() {
  //  ****  Hooks  ****

  // -------- useContext()
  const { getCryptoDataFromApiForHomePageTable } = useContext(cryptoContext);
  const { setGetCryptoDataFromApiForHomePageTable } = useContext(cryptoContextDispatch);

  // --------- useState
  const [activeTab, setActiveTab] = useState(true);

  // useEffect for get data from api and sets the data in the context
  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const { data } = await axios.get(
          "market/stats?srcCurrency=btc,eth,etc,usdt,ada,bch,ltc,bnb,eos,xlm,xrp,trx,doge,uni,link,dai,dot,shib,aave,ftm,matic,axs,mana,sand,avax,usdc,gmt,mkr,sol,atom,grt,bat,near,ape,qnt,chz,pmn&dstCurrency=rls,usdt"
        );
        await setGetCryptoDataFromApiForHomePageTable([data.stats]);
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
    getDataFromApi();
  }, []);

  //  ****  Functions and Handlers  ****

  // Change state for tab
  const tabsHandler = () => {
    setActiveTab(!activeTab);
  };

  // This function is for render content the table or spinner
  function renderTableTab() {
    if (getCryptoDataFromApiForHomePageTable.length > 0) {
      return activeTab ? (
        <CryptoContentTab cryptoData={getCryptoDataFromApiForHomePageTable} exchangeRate='rls' />
      ) : (
        <CryptoContentTab cryptoData={getCryptoDataFromApiForHomePageTable} exchangeRate='usdt' />
      );
    } else {
      return (
        <div className='text-center'>
          <Spinner style='w-24 h-24 h-[370px] fill-purple-600' />
        </div>
      );
    }
  }

  //  *======================================================================*

  return (
    //Start ==> Section to display currencies
    <section className='bg-gray-100'>
      <div className='-translate-y-72'>
        {/* Start ==> container for market*/}
        <div className=' w-[97%] mx-auto rounded'>
          {/* Choice market */}
          <div className='w-[350px] bg-white text-base h-14 flex items-end rounded-t-xl'>
            <div className='flex justify-around w-full'>
              <div className='flex items-center'>انتخاب بازار براساس</div>
              <div className='flex '>
                <button
                  className={`px-4 py-2 transition ease-in-out delay duration-200 rounded-tr rounded-br bg-[#E3E4E5] text-gray-400 ${
                    activeTab ? "bg-gray-500 !text-white" : ""
                  }  `}
                  onClick={tabsHandler}>
                  تومان IRT
                </button>
                <button
                  className={`px-4 py-2 rounded-tl transition ease-in-out duration-200  rounded-bl bg-[#E3E4E5] text-gray-400  ${
                    !activeTab ? "bg-gray-500 !text-white" : ""
                  } `}
                  onClick={tabsHandler}>
                  تتر USDT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End ==> container for market*/}

        {/* Start ==> container For table */}
        <div className=' w-[97%] mx-auto rounded'>
          {/* Start ==> table container */}

          <div className='shadow-[0px_9px_10px_rgba(20,21,26,0.1)] rounded-md bg-gray-100 -mb-72'>
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

            {/* Render the Table or Spinner */}
            {renderTableTab()}

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
        {/* End ==> container For table */}
      </div>
    </section>
    //End ==> Section to display currencies
  );
}

export default CryptoTable;
