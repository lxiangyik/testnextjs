import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slideshow1 from '../public/img/swipers/swiper1.jpg';
import slideshow2 from '../public/img/swipers/swiper2.jpg';
import slideshow3 from '../public/img/swipers/swiper3.jpg';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipers() {

  const slides = [slideshow1, slideshow2, slideshow3];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image src={slide} width="1300" height="800" className={"object-cover"} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
