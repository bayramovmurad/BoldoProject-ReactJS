import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../../Style/style.css';
import {Autoplay, Pagination, Navigation,Scrollbar } from "swiper";
import SectionSliderCard from "./SectionSliderCard";

export default function SectionSliderY() {
  return (
    <div className='slider-circle-container' id="section-slider-crcle">
        <div className="slider-circle-text-container">
            <p>An enterprise template to ramp up your company website</p>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        speed={1000}
        loop={true}
        scrollbar={{draggable:true }}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.5": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            }
          }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
            <SectionSliderCard
            Title={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            IMG={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            H5={'Albus Dumbledore'}
            H6={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SectionSliderCard
            Title={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            IMG={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            H5={'Albus Dumbledore'}
            H6={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SectionSliderCard
            Title={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            IMG={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            H5={'Albus Dumbledore'}
            H6={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
            <SectionSliderCard
            Title={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            IMG={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            H5={'Albus Dumbledore'}
            H6={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SectionSliderCard
            Title={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            IMG={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            H5={'Albus Dumbledore'}
            H6={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SectionSliderCard
            Title={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            IMG={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            H5={'Albus Dumbledore'}
            H6={'Manager @ Howarts'}
            />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}