import React from 'react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation} from 'swiper/modules';
export default function BooksSwiper({title, images}) {
  return (

    <div className='p-4 bg-white my-4'>
        <p className=' font-Roboto font-bold'>{title}</p>
        <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={10}
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
        className="mySwiper py-4"
      >
        {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} className=" object-cover block w-full h-48" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
