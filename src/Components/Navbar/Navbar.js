import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { MdInsertChart, MdOutlineGroupAdd } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropMenu, setShowDropMenu] = useState(false);
  return (
    <div className=' bg-[#14151a]'>
      {/*Start NavBar */}
      <nav className='container flex items-center justify-between h-16 px-10 mx-auto text-2xl text-white font-vazirLight'>
        {/* Start Logo */}
        <button
          className='hidden md:flex'
          onClick={() => setShowDropMenu(!showDropMenu)}
        >
          <img src='../../../assets/images/menu.png' className='w-6' />
        </button>
        <Link to='/'>
          <div className='flex items-center'>
            <img
              src='../../../assets/images/navbar-logo.png'
              className='w-[42px] md:w-9'
            />
            <div className='mr-5 text-xl md:text-sm'>نوبیتکس</div>
          </div>
        </Link>
        {/* End Logo */}

        {/* Start Navbar List */}
        <ul
          className={
            !showDropMenu
              ? "md:hidden flex text-base gap-12"
              : " md:fixed md:left-0 md:top-0 md:z-30 md:flex-col font-vazirLight md:text-sm md:gap-0 md:bg-[#14151a] md:h-screen md:w-7/12 flex text-base gap-12"
          }
        >
          <li className='flex-col hidden gap-3 text-base md:flex md:p-5'>
            <button className='px-6 py-2 duration-150 ease-in md:border md:border-violet-600 md:rounded-md md:w-full md:text-violet-600 md:hover:text-white md:hover:bg-violet-500 md:text-center'>
              ورود
            </button>
            <button className='px-6 py-2 duration-150 ease-in-out rounded md:bg-violet-500 md:text-center md:w-full md:hover:bg-violet-600'>
              ثبت نام
            </button>
          </li>
          <li
            className='flex cursor-pointer relative group md:border-y md:p-4 md:hover:h-auto transition-all
                         group-hover:ease-in  group-hover:duration-700 md:block  md:border-[#4c505b]'
          >
            <div className='flex items-center '>
              <MdInsertChart className='hidden w-6 h-6 ml-6 md:flex' />
              <div className='hover:text-[#15d1c6] flex ease-in duration-100'>
                قیمت لحظه ای رمزازها
                <FaCaretDown className='w-3 mr-1' />
              </div>
            </div>
            {/*Start Nested Menu */}
            <ul
              className='md:static md:bg-[#1e2026] group-hover:inline  bg-[#1e2026] md:w-full 
                         rounded-md absolute top-6 right-4 w-40 hidden text-white ease-in-out duration-700 z-20'
            >
              <li className=' p-3 hover:bg-[#292c34] hover:text-[#15d1c6] rounded-t  ease-linear duration-100'>
                بیت&#8202;کوین
              </li>
              <li className=' p-3 hover:bg-[#292c34] hover:text-[#15d1c6] ease-linear duration-100'>
                اتریوم
              </li>
              <li className=' p-3 hover:bg-[#292c34] hover:text-[#15d1c6] ease-linear duration-100'>
                تتر
              </li>
              <li className=' p-3 hover:bg-[#292c34] hover:text-[#15d1c6] ease-linear duration-100 border-b md:border-0 border-[#4c505b]'>
                بیت&#8202;کوین&#8202;کش
              </li>
              <li className=' p-3 hover:bg-[#292c34] hover:text-[#15d1c6] ease-linear duration-100 rounded-b'>
                سایر ارزهای دیجیتال
              </li>
            </ul>
            {/*End Nested Menu */}
          </li>
          <li className=' cursor-pointer  md:flex md:p-4 md:w-full md:border-b md:border-[#4c505b]'>
            <MdOutlineGroupAdd className='hidden w-6 h-6 ml-5 md:flex' />
            <a className='hover:text-[#15d1c6] ease-in duration-100'>
              {" "}
              معرفی به دوستان
            </a>
          </li>
          <li className=' cursor-pointer  md:flex md:p-4 md:border-b md:border-[#4c505b]'>
            <IoDocumentText className='hidden w-6 h-6 ml-5 md:flex' />
            <a className='hover:text-[#15d1c6] ease-in duration-100'>
              {" "}
              راهنمای استفاده
            </a>
          </li>
          <li className='cursor-pointer  md:flex md:p-4 md:border-b md:border-[#4c505b]'>
            <BsFillQuestionCircleFill className='hidden w-6 h-6 ml-5 md:flex' />
            <a className='hover:text-[#15d1c6] ease-in duration-100'>
              {" "}
              سوالی داری؟
            </a>
          </li>
          <li className='hover:text-[#15d1c6]  cursor-pointer ease-in duration-100 md:flex md:p-4'>
            <img
              src='assets/images/gift-card.8bf7b60.svg'
              className='hidden w-6 ml-5 md:flex'
            />
            <a> نوبی گیفت</a>
          </li>
        </ul>
        {/* End Navbar List */}

        {/*Start Signup & Login Button  */}
        <div className='flex text-base'>
          <button className='py-1.5 px-6 md:hidden flex'>ورود</button>
          <button className='py-1.5 px-6 rounded bg-violet-500 hover:bg-violet-600 ease-in-out duration-150 md:text-xs'>
            ثبت نام
          </button>
        </div>
        {/*End Signup & Login Button  */}
      </nav>
      {/*End NavBar */}
    </div>
  );
}

export default Navbar;
