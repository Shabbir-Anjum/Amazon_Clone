import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import Accessories_Cards from '../Accessories cards/Accessories_Cards';
export default function Hero() {
  return (
    <>
        <section className=' h-96 container '>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full" >
        <SwiperSlide style={{ backgroundImage: "url('../images/Swiper/1.jpg')" }} className=' bg-no-repeat  bg-center'></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.1)), url('../images/Swiper/2.jpg')" }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.1)), url('../images/Swiper/3.jpg')" }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.1)), url('../images/Swiper/4.jpg')" }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.1)), url('../images/Swiper/5.jpg')" }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.1)), url('../images/Swiper/6.jpg')" }}></SwiperSlide>
      </Swiper>
      <Accessories_Cards/>
      bcvbfbfdh
        </section>
        
    </>
  )
}
