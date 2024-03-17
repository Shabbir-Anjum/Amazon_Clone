import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

const Swiperr = () => {
  return (
    <div className="h-[600px]">
      <Swiper
     
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide className="bg-[url('../images/Swiper/1.jpg')] bg-cover bg-no-repeat "/>
        <SwiperSlide className="bg-[url('../images/Swiper/2.jpg')] bg-cover bg-no-repeat "/>
        <SwiperSlide className="bg-[url('../images/Swiper/3.jpg')] bg-cover bg-no-repeat "/>
        <SwiperSlide className="bg-[url('../images/Swiper/4.jpg')] bg-cover bg-no-repeat "/>
        <SwiperSlide className="bg-[url('../images/Swiper/5.jpg')] bg-cover bg-no-repeat "/>
        <SwiperSlide className="bg-[url('../images/Swiper/6.jpg')] bg-cover bg-no-repeat "/>
      </Swiper>
      <div className="h-[30%] bg-gradient-to-b from-white to-moonColor" />
    </div>
  );
};

export default Swiperr;