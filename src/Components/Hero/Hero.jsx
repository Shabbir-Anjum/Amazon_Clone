import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import Accessories_Cards from '../Accessories cards/Accessories_Cards';
import Swiperr from './Swiperr';
import BooksSwiper from './BooksSwiper';
export default function Hero() {
  return (
    <>
        <section className='h-screen bg-moonColor container'>
          <Swiperr/>
          <div>
          <Accessories_Cards/>
          </div>
          <BooksSwiper/>
        </section>
        
    </>
  )
}
