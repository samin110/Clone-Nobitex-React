import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import "./styles.css";

// import required modules

function Slider() {
  return (
    <div className='px-16 bg-gray-200 bg-opacity-50 py-14 h-96'>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-full mySwiper'
      >
        <SwiperSlide className='flex items-center justify-center '>
          <div className='rounded-md w-72'>
            <img
              src='../../assets/images/news-2-desktop.3c4a3d7.webp'
              className='w-full rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center '>
          <div className='rounded-md w-72'>
            <img
              src='../../assets/images/news-1-desktop.76f9a76.webp'
              className='w-full rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center '>
          <div className='rounded-md w-72'>
            <img
              src='../../assets/images/news-3-desktop.baf85ac.webp'
              className='w-full rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center '>
          <div className='rounded-md w-72'>
            <img
              src='../../assets/images/news-4-desktop.c567979.webp'
              className='w-full rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center '>
          <div className='rounded-md w-72'>
            <img
              src='../../assets/images/news-5-desktop.da35a8b.webp'
              className='w-full rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center '>
          <div className='rounded-md w-72'>
            <img
              src='../../assets/images/news-6-desktop.62bc266.webp'
              className='w-full rounded-lg'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
