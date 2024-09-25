import React, { useContext } from "react";
import "./HomeCompany.css";
import "swiper/css";
import "swiper/css/pagination"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SliderHeader from "../SliderHeader/SliderHeader";
import { GlobalContext } from "../../Context";
import HomeCompanyCard from "../HomeCompanyCard/HomeCompanyCard";

function HomeCompany() {
  const { companyData } = useContext(GlobalContext);

  return (
    <div className="homeCompany">
      <SliderHeader vizyonYazi={"Kampanyalar"} />
      <div className="homeCompanySlider">
        <Swiper
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
              pagination: false, 
            },
            600: {
              slidesPerView: 1.6,
              spaceBetween: 10,
              pagination: false, 
            },
            750:{
              slidesPerView: 2,
              spaceBetween: 10,
              pagination: false, 
            },
            992: {
              slidesPerView: 1.1,
              spaceBetween: 20,
              pagination: {
                clickable: true,
              },
            },
          }}
        >
          {companyData.map((item) => (
            <SwiperSlide key={item.id}>
              <HomeCompanyCard item={item} />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCompany;
