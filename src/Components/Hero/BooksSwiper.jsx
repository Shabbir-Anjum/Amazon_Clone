import React from 'react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation} from 'swiper/modules';
export default function BooksSwiper() {
  return (
    <div className='p-4 bg-white'>
        <p>Best Seller in Books</p>
        <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper py-4 px-2"
      >
        
        <SwiperSlide><img src="../images/books/B1.jpg" className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B9.jpg" className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B2.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B3.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B4.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B5.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B6.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B7.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B8.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B9.jpg"  className=' h-40'/></SwiperSlide>
        <SwiperSlide><img src="../images/books/B10.jpg" className=' h-40' /></SwiperSlide>
        <SwiperSlide><img src="../images/books/B11.jpg" className=' h-40' /></SwiperSlide>
        <SwiperSlide><img src="../images/books/B12.jpg" className=' h-40' /></SwiperSlide>
        <SwiperSlide><img src="../images/books/B13.jpg" className=' h-40' /></SwiperSlide>
      </Swiper>
    </div>
  )
}
