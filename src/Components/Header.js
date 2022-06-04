import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

function Header() {
  return (
    <header>
      <div className='h-[950px] bg-cover bg-top w-full bg-header-image md:bg-none md:bg-gray-100 md:h-[600px]'>
        <div className='flex flex-col items-center md:px-5'>
          <h1 className=' text-4xl font-vazirBold mt-20 mb-3 text-[#14151A] md:text-xl md:mt-8 md:mb-1'>
            خرید و فروش امن بیت‌کوین و ارزهای دیجیتال
          </h1>
          <h3 className='text-2xl text-[#14151A] mb-8 md:text-sm'>
            به بزرگترین بازار ارز دیجیتال ایران بپیوندید
          </h3>
          <div className='flex items-center justify-center mb-8 md:w-full md:flex-col'>
            <input
              className=' w-[320px] h-[40px] p-2 rounded-tr outline-0 rounded-br focus:ring-blue-200 focus:ring
               text-right text-[#495057] shadow-[0_2px_10px_rgba(20,21,26,0.1)] md:w-full md:mb-2 md:rounded'
              placeholder='ایمیل خود را وارد کنید'
            ></input>
            <button className='px-6 py-2 text-white duration-150 ease-in bg-teal-500 rounded-tl rounded-bl md:rounded outline-offset-0 hover:bg-teal-600 md:w-full'>
              <a className='md:hidden'>شروع کنید</a>{" "}
              {/*convert to <Link></Link>*/}
              <a className='hidden md:inline md:rounded'>همین حالا شروع کنید</a>
            </button>
          </div>
          <div className='flex items-center justify-center text-xl text-violet-600 md:text-base'>
            <a className='cursor-pointer hover:underline hover:text-blue-700 decoration-1 '>
              نوبیتکس چطور کار می‌کند؟
            </a>
            <BsFillPlayCircleFill className='mr-4 text-3xl md:text-xl' />
          </div>
          <div className='hidden md:inline'>
            <img src='assets/images/jumbotron.3ceb851.svg' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
