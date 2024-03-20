import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import Accessories_Cards from '../Accessories cards/Accessories_Cards';
import Swiperr from './Swiperr';
import BooksSwiper from './BooksSwiper';
import BookImages, { ToyesImages } from './BookImages';
import KitchenImages from './KitchenImages';
import { CardData3 } from '../Accessories cards/CardData2';
import CardRender from '../Accessories cards/CardRender';
import Footer from '../Footer/Footer';
export default function Hero() {
  return (
    <>
        <section className=' bg-moonColor container w-[100%]'>
          <Swiperr/>
          <div className=' p-4'>
          <Accessories_Cards/>
          <BooksSwiper images={BookImages} titile='Best Seller in Books'/>
          <BooksSwiper images={KitchenImages} titile='Best Seller in Books'/>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          <CardRender CardData={CardData3}/>
          </div>
          
          <BooksSwiper images={ToyesImages} titile='Best Seller in Toyes'/>
      
          
          </div>
         
        </section>
      
       
    </>
  )
}
