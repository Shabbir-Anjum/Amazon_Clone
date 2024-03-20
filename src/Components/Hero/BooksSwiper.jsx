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
        
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={10}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          260:{
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          360:{
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
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
            <SwiperSlide key={index} >
              <div>
            <img src={imageUrl} alt="error" className=' object-fill h-auto w-auto'/>
            </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
