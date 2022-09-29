import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className='p-2 bg-black'>
      <div className='flex flex-col'>
        {/* Start ==> Header div  */}
        <div className='flex flex-wrap items-center justify-between p-2 my-4 text-white bg-gray-700 rounded-md bg-opacity-80'>
          <div className='flex items-center'>
            <MdPhoneInTalk className='ml-2 text-xl' />
            <p>هفت روز هفته، 24 ساعت شبانه روز در کنار شما هستیم</p>
          </div>

          {/* Button div */}
          <div className='text-base'>
            <button className='px-5 py-2 ml-2 text-gray-200 bg-gray-800 border border-white rounded'>
              تماس با ما
            </button>
            <button className='px-5 py-2 transition ease-in rounded col hover:bg-violet-800 bg-violet-600'>
              سوالات متداول
            </button>
          </div>
        </div>
        {/* End ==> Header  */}
      </div>

      {/* Start ==> Footer navbar */}
      <div className='grid grid-cols-4 p-4 text-sm md:grid-flow-col-dense text-neutral-400'>
        <div className='grid grid-rows-6'>
          <div className='mb-1 text-2xl text-white'>
            <a href='#' className=''>
              نوبیتکس
            </a>
          </div>
          <div className=''>
            <a href='#' className='text-sm hover:text-white'>
              درباره ما
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              بلاگ
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              قوانین و مقررات
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              گزارش سال 2021
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              فرصت های شغلی
            </a>
          </div>
        </div>
        <div className='grid grid-rows-6'>
          <div className='text-2xl text-white'>
            <a href='#'>امکانات</a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              دانلود اپلیکیشن
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              بازار آزمایشی نوبیتکس
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              معرفی به دوستان
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              مستندات API
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              گزارش تغییرات
            </a>
          </div>
        </div>
        <div className='grid grid-rows-6'>
          <div className='text-2xl text-white'>
            <a href='#'>راهنما</a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              سوالات متداول
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              احراز هویت و سطوح کاربری
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              قیمت ها و کارمزدها
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              امنیت حساب کاربری
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              امنیت کیف پول
            </a>
          </div>
        </div>
        <div className='grid grid-rows-6'>
          <div className='text-2xl text-white'>
            <a href='#'>ارتباط با ما</a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              تماس با ما
            </a>
          </div>
          <div>
            <a href='#' className='hover:text-white'>
              support@nobitex.ir
            </a>
          </div>
          <div className='grid row-start-4 row-end-7'>
            <div className='self-center font-semibold text-white'>
              با ما در دنیای رمزارزها همراه شو!
            </div>
            <div className='flex items-center text-3xl text-white'>
              <a href='https://www.linkedin.com'>
                <ImLinkedin className='ml-8' />
              </a>
              <a href='https://t.me/nobitexmarket/'>
                <FaTelegram className='ml-8' />
              </a>
              <a href='https://twitter.com'>
                <AiFillTwitterCircle className='ml-8 text-4xl' />
              </a>
              <a href='https://www.instagram.com/nobitex_market/'>
                <AiOutlineInstagram className='p-1 text-black bg-white rounded-full' />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End ==> Footer navbar */}
      <p className='text-sm text-center text-gray-400 dir-left'>
        © 2016-2022 NOBITEX, v3.42.123
      </p>
    </footer>
  );
}

export default Footer;
