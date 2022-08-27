import React from "react";

function Crypto() {
  return (
    <section>
      {/* Start container */}
      <div className='w-11/12 mx-auto bg-red-200 h-96'>
        {/* Choice market */}
        <div className='w-[350px] bg-white text-base h-16 flex items-center rounded-t-xl'>
          <div className='flex justify-around w-full'>
            <div className='flex items-center'>انتخاب بازار براساس</div>
            <div className='flex '>
              <button className='px-4 py-2 rounded-tr rounded-br bg-slate-500'>
                تومان IRT
              </button>
              <button className='px-4 py-2 rounded-tl rounded-bl bg-slate-500'>
                تتر USDT
              </button>
            </div>
          </div>
        </div>
        {/* Start header for table */}
        <div className='  p-2'>
          <div className='bg-yellow-300 grid grid-cols-3 gap-7'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='grid grid-flow-col col-start-2 col-end-3'>
              <div>آخرین قیمت</div>
              <div>تغییر 24h</div>
            </div>
            <div className='grid grid-flow-col'>
              <div>نمودار هفتگی</div>
              <div>خرید و فروش</div>
            </div>
          </div>
        </div>
        {/* End header for table */}
        <div className='  p-2'>
          <div className='bg-yellow-300 grid grid-cols-3 gap-7 p-5'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='grid grid-flow-col col-start-2 col-end-3'>
              <div>آخرین قیمت</div>
              <div>تغییر 24h</div>
            </div>
            <div className='grid grid-flow-col'>
              <div>نمودار هفتگی</div>
              <div>خرید و فروش</div>
            </div>
          </div>
        </div>

        <div className='  p-2'>
          <div className='grid grid-cols-3 gap-7'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='grid grid-flow-col col-start-2 col-end-3'>
              <div>آخرین قیمت</div>
              <div>تغییر 24h</div>
            </div>
            <div className='grid grid-flow-col'>
              <div>نمودار هفتگی</div>
              <div>خرید و فروش</div>
            </div>
          </div>
        </div>

        <div className='  p-2'>
          <div className='bg-yellow-300 grid grid-cols-3 gap-7'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='grid grid-flow-col col-start-2 col-end-3'>
              <div>آخرین قیمت</div>
              <div>تغییر 24h</div>
            </div>
            <div className='grid grid-flow-col'>
              <div>نمودار هفتگی</div>
              <div>خرید و فروش</div>
            </div>
          </div>
        </div>

        <div className='  p-2'>
          <div className='bg-yellow-300 grid grid-cols-3 gap-7'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='grid grid-flow-col col-start-2 col-end-3'>
              <div>آخرین قیمت</div>
              <div>تغییر 24h</div>
            </div>
            <div className='grid grid-flow-col'>
              <div>نمودار هفتگی</div>
              <div>خرید و فروش</div>
            </div>
          </div>
        </div>

        <div className='  p-2'>
          <div className='bg-yellow-300 grid grid-cols-3 gap-7'>
            <div className='col-start-1 col-end-2'>نام</div>
            <div className='grid grid-flow-col col-start-2 col-end-3'>
              <div>آخرین قیمت</div>
              <div>تغییر 24h</div>
            </div>
            <div className='grid grid-flow-col'>
              <div>نمودار هفتگی</div>
              <div>خرید و فروش</div>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
}

export default Crypto;
