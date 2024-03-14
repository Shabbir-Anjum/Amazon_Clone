import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
export default function Hero() {
  return (
    <>
        <section className=' h-screen'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[70%]">
        <SwiperSlide className="bg-[url('../images/Swiper/1.jpg')]"></SwiperSlide>
        <SwiperSlide className="bg-[url('../images/Swiper/2.jpg')]"></SwiperSlide>
        <SwiperSlide className="bg-[url('../images/Swiper/3.jpg')]"></SwiperSlide>
        <SwiperSlide className="bg-[url('../images/Swiper/4.jpg')]"></SwiperSlide>
        <SwiperSlide className="bg-[url('../images/Swiper/5.jpg')]"></SwiperSlide>
        <SwiperSlide className="bg-[url('../images/Swiper/6.jpg')]"></SwiperSlide>
      </Swiper>
        </section>
    </>
  )
}
