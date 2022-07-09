import React from "react";

function Crypto() {
  return (
    <section>
      <div className='w-11/12 mx-auto bg-slate-300 h-96'>
        <div className='w-[200px] bg-white'>
          <div className='flex'>
            <div>انتخاب بازار براساس</div>
            <div>
              <button>تومان IRT</button>
              <button>تتر USDT</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 bg-green-300 grid-rows-8'>
          <div className='grid grid-flow-row grid-cols-5 col-start-1 col-end-6 text-[12px] text-[#A3A5A8]'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='col-start-2 col-end-3'>آخرین قیمت</div>
            <div className='col-start-3 col-end-4'>تغییر 24h</div>
            <div className='col-start-4 col-end-5'>نمودار هفتگی</div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 col-start-1 col-end-6'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='col-start-2 col-end-3'>آخرین قیمت</div>
            <div className='col-start-3 col-end-4'>تغییر 24h</div>
            <div className='col-start-4 col-end-5'>نمودار هفتگی</div>
            <div className='col-start-5 col-end-6'>
              <button>خرید و فروش</button>
            </div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 col-start-1 col-end-6'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='col-start-2 col-end-3'>آخرین قیمت</div>
            <div className='col-start-3 col-end-4'>تغییر 24h</div>
            <div className='col-start-4 col-end-5'>نمودار هفتگی</div>
            <div className='col-start-5 col-end-6'>نمودار هفتگی</div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 col-start-1 col-end-6'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='col-start-2 col-end-3'>آخرین قیمت</div>
            <div className='col-start-3 col-end-4'>تغییر 24h</div>
            <div className='col-start-4 col-end-5'>نمودار هفتگی</div>
            <div className='col-start-5 col-end-6'>نمودار هفتگی</div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 col-start-1 col-end-6'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='col-start-2 col-end-3'>آخرین قیمت</div>
            <div className='col-start-3 col-end-4'>تغییر 24h</div>
            <div className='col-start-4 col-end-5'>نمودار هفتگی</div>
            <div className='col-start-5 col-end-6'>نمودار هفتگی</div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 col-start-1 col-end-6'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='col-start-2 col-end-3'>آخرین قیمت</div>
            <div className='col-start-3 col-end-4'>تغییر 24h</div>
            <div className='col-start-4 col-end-5'>نمودار هفتگی</div>
            <div className='col-start-5 col-end-6'>نمودار هفتگی</div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 col-start-1 col-end-6'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='col-start-2 col-end-3'>آخرین قیمت</div>
            <div className='col-start-3 col-end-4'>تغییر 24h</div>
            <div className='col-start-4 col-end-5'>نمودار هفتگی</div>
            <div className='col-start-5 col-end-6'>نمودار هفتگی</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crypto;
