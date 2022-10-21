import React, { useState } from "react";
import AscendingCounter from "../AscendingCounter/AscendingCounter";

function Statistics() {
  return (
    <section>
      {/* Start ==> Statistics section */}
      <div className='bg-statistics-image bg-[#42454f] h-44 bg-no-repeat bg-right'>
        <div className='flex items-center justify-around h-full text-white'>
          <div>
            <div className='flex text-4xl font-semibold text-center '>
              <div className='ml-2 text-purple-300 '>M</div>
              <div className='w-[50px]'>
                <AscendingCounter processTime={80} end={4} step={0.1} />
              </div>
              <div className='mr-2'>+</div>
            </div>
            <div>
              <p className='mt-3 text-sm text-center'>کاربر فعال</p>{" "}
            </div>
          </div>
          <div>
            <div className='flex text-4xl font-semibold text-center '>
              <div className='ml-2 text-purple-300'>M</div>
              <div className='w-[50px] text-center'>
                <AscendingCounter processTime={15} end={200} step={1} />
              </div>
              <div className='mr-4'>+</div>
            </div>
            <div>
              <p className='mt-3 text-sm text-center'>معاملات انجام شده</p>{" "}
            </div>
          </div>
          <div>
            <div className='flex text-4xl font-semibold '>
              <div className='ml-2 text-purple-300'>B</div>
              <div className='w-[50px] text-center'>
                <AscendingCounter processTime={15} end={200} step={1} />
              </div>
              <div className='mr-4'>+</div>
            </div>
            <div>
              <p className='mt-3 text-sm text-center'>حجم معاملات</p>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* End ==> Statistics section */}

      {/* Start ==> Learning section */}
      <div className='h-[470px] flex flex-col py-20'>
        {/* title */}
        <h1 className='mb-20 text-3xl font-bold text-center'>
          همراه با نوبیتکس بیشتر یاد بگیرید
        </h1>

        {/* Card */}
        <div className='flex items-center justify-around'>
          <div className='flex flex-col items-center hover:text-violet-600'>
            <div className='mb-5  w-28 h-28 rounded-full bg-white border-[11px] hover:cursor-pointer hover:border-[7px] delay-50 transition-all  ease-in hover:border-violet-600 border-gray-200 flex items-center justify-center'>
              <img src='../../../assets/images/download (4).webp' />
            </div>
            <p className='text-xl font-semibold hover:cursor-pointer'>
              ویدیو های آموزشی
            </p>
          </div>
          <div className='flex flex-col items-center hover:text-violet-600'>
            <div className='mb-5  w-28 h-28 rounded-full bg-white border-[11px] hover:cursor-pointer hover:border-[7px] delay-50 transition-all  ease-in hover:border-violet-600 border-gray-200 flex items-center justify-center'>
              <img src='../../../assets/images/download (5).webp' />
            </div>
            <p className='text-xl font-semibold hover:cursor-pointer'>
              راهنمای خرید ارز دیجیتال
            </p>
          </div>
          <div className='flex flex-col items-center hover:text-violet-600'>
            <div className='mb-5  w-28 h-28 rounded-full bg-white border-[11px] hover:cursor-pointer hover:border-[7px] delay-50 transition-all  ease-in hover:border-violet-600 border-gray-200 flex items-center justify-center'>
              <img src='../../../assets/images/download (6).webp' />
            </div>
            <p className='text-xl font-semibold hover:cursor-pointer'>
              نوبیتکس بلاگ
            </p>
          </div>
          <div className='flex flex-col items-center hover:text-violet-600'>
            <div className='mb-5  w-28 h-28 rounded-full bg-white border-[11px] hover:cursor-pointer hover:border-[7px] delay-50 transition-all  ease-in hover:border-violet-600 border-gray-200 flex items-center justify-center'>
              <img src='../../../assets/images/download (7).webp' />
            </div>
            <p className='text-xl font-semibold hover:cursor-pointer'>
              سوالات متداول
            </p>
          </div>
        </div>
      </div>
      {/* End ==> Learning section */}

      {/* Start ==> Invite section */}
      <div className='flex items-center justify-between px-8 bg-violet-100 h-80'>
        {/* Content div (Right div) */}
        <div className='flex flex-col flex-1'>
          <h1 className='mb-8 text-3xl font-bold'>در سود نوبیتکس سهیم شوید</h1>
          <p className='mb-8 text-xl'>
            با دعوت از دوستانتان با لینک اختصاصی خود، هر بار که معامله می‌کنند
            برای همیشه تا 30% از کارمزد معاملاتشان از طرف نوبیتکس به شما تعلق
            می‌گیرد
          </p>
          <button className='flex self-start px-6 py-2 text-white transition ease-linear bg-violet-500 rounded-3xl hover:bg-violet-700'>
            بیشتر بدانید
          </button>
        </div>

        {/* Image (Left div) */}
        <div>
          <img
            src='../../assets/images/profit-img.24cafd2.webp'
            className='pl-8 mb-16'
          />
        </div>
      </div>
      {/* End ==> Invite section */}
    </section>
  );
}

export default Statistics;
