import React, { useContext } from "react";
import "./TicketSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GlobalContext } from "../../Context";
import TicketSwiperCard from "../TicketSwiperCard/TicketSwiperCard";

function TicketSwiper({ handleBufeMinus, handleBufePlus, ticketBufePrice }) {
  const { bufeArray } = useContext(GlobalContext);
  return (
    <div className="ticketSwiper">
      <div className="ticketSwiperHeader">
        <p>Büfe Ürünleri</p>
        <div className="prevs">
          <img
            src="/Images/next-slide (1).svg"
            alt="geri"
            className="ticketGeri"
          />
          <img
            src="/Images/next-slide.svg"
            alt="ireli"
            className="ticketIreli"
          />
        </div>
      </div>
      <div className="ticketSwiperjs">
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".ticketIreli",
            prevEl: ".ticketGeri",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            770: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 4.1,
              spaceBetween: 10,
            },
          }}
        >
          {bufeArray.map((bufe, index) => (
            <SwiperSlide key={index}>
              <TicketSwiperCard
                key={index}
                bufe={bufe}
                handleBufeMinus={handleBufeMinus}
                handleBufePlus={handleBufePlus}
                ticketBufePrice={ticketBufePrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TicketSwiper;
