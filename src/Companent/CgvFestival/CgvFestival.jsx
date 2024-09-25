import React, { useContext } from "react";
import './CgvFestival.css'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GlobalContext } from "../../Context";
import SliderCart from "../SliderCart/SliderCart";

function CgvFestival() {
  const { vizyonMovies } = useContext(GlobalContext);
  return (
    <div className="cgvFestivalContaiber">
      <p className="festivalTitle">CGV Çocuk Aile Kulübü Film Festivali</p>
      <p className="festivalDate">
        Festival 27 Eylül - 3 Ekim tarihleri arasındadır.
      </p>
      <div className="cgvFestivalSwiper">
        <Swiper
          breakpoints={{
            0:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            550:{
                slidesPerView: 3,
                spaceBetween: 20,
            },
            910: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1100: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {vizyonMovies.map((movie) => (
            <SwiperSlide>
              <SliderCart element={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CgvFestival;
