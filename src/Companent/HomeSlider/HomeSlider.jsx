import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context";
import "./HomeSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Loading from "../Loading/Loading";

function HomeSlider() {
  const { homeSliderData } = useContext(GlobalContext);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 950);
  const [swiperSlider, setSwiperSlider] = useState(0);

  const handleSlideChange = (swiper) => {
    setSwiperSlider(swiper.activeIndex);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 950);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (homeSliderData.length === 0) {
    return <Loading />;
  }

  return (
    <div
      className="home-slider"
      style={{
        backgroundImage: isLargeScreen
          ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${homeSliderData[swiperSlider].backgroundImage})`
          : "none",
        backgroundColor: !isLargeScreen ? "#121212" : "transparent",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="home-slider-container container">
        <div className="home-slider-left">
          <div className="home-slider-content">
            <p className="home-slider-title">
              {homeSliderData[swiperSlider].name}
            </p>
            <span className="home-slider-description">
              {homeSliderData[swiperSlider].description}
            </span>
            <div className="home-slider-text">
              <img src="/Images/6plus.png" alt="6plus" />
              <img src="/Images/olumsuz.png" alt="olumsuz" />
              {homeSliderData[swiperSlider].hour && (
                <div className="home-slider-runtime">
                  <img src="/Images/movie-time.svg" alt="movie-time" />
                  <span>{homeSliderData[swiperSlider].hour}</span>
                </div>
              )}
            </div>
          </div>
          <div className="home-slider-left-button">
            <button className="buyBilet" aria-label="Buy Ticket">
              Hemen Bilet Al
            </button>
            <button className="incele" aria-label="View Details">
              Incele
            </button>
          </div>
        </div>
        <div className="home-slider-right">
          <Swiper
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              950: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation, Autoplay]}
            onSlideChange={handleSlideChange}
          >
            {homeSliderData.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide-content">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    loading="lazy"
                    className="firstHomeImage"
                  />
                  <img
                    src={movie.secondImage}
                    alt={movie.name}
                    loading="lazy"
                    className="secondHomeImage"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation-container">
            <div className="swiper-button-prev"></div>
            <div className="swiper-length">
              <span>
                {swiperSlider + 1} / {homeSliderData.length}
              </span>
            </div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
