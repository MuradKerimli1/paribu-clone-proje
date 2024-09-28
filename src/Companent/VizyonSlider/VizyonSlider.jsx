import React from "react";
import "./VizyonSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderCart from "../SliderCart/SliderCart";
import SliderHeader from "../SliderHeader/SliderHeader";

function VizyonSlider({ movies, vizyonYazi, handleBuyTicketClick }) {
  return (
    <div className="vizyonSLider">
      <SliderHeader vizyonYazi={vizyonYazi} />
      <div className="vizyonSlider_content">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            470: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5.5,
              spaceBetween: 25,
            },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {movies.map((element, index) => (
            <SwiperSlide key={index}>
              <SliderCart
                key={index}
                element={element}
                handleBuyTicketClick={handleBuyTicketClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VizyonSlider;
