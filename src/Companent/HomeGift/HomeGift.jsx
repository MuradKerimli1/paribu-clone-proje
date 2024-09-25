import React, { useContext } from "react";
import "./HomeGift.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { GlobalContext } from "../../Context";
import Loading from "../Loading/Loading";
import GiftCard from "../GiftCard/GiftCard";

function HomeGift() {
  const { giftCardData } = useContext(GlobalContext);

  if (giftCardData.length === 0) {
    return <Loading />;
  }

  return (
    <div className="homeGift container">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          445: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          650:{
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1250:{
            slidesPerView: 3.5,
            spaceBetween: 20,
          }
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {giftCardData.map((item, index) => (
          <SwiperSlide key={index}>
            <GiftCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeGift;
