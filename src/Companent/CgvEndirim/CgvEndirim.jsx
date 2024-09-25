import React from "react";
import "./CgvEndirim.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const cgvEndirim = [
  {
    id: 0,
    image: "/Images/migros.png",
    text: "Migros mağazaları, Migros Sanal Market, Migros Hemen’de Money kartınızla yapacağınız 750 TL ve üzeri alışverişe 75 TL değerinde Money hediye!",
  },
  {
    id: 1,
    image: "/Images/defacto-big.png",
    text: "Çocuk kategorisinde yapacağınız 1000 TL ve üzeri online alışverişlerde %20 indirim!",
  },
  {
    id: 2,
    image: "/Images/burger.png",
    text: "Çocuk Aile Menüsü (Chicken Royal, Kids Hamburger, Mega Boy Patates Kızartması, İki Adet Orta Boy Coca Cola) restoranda 382 TL yerine 300 TL!",
  },
  {
    id: 3,
    image: "/Images/vialand.png",
    text: "Vialand Tema Park gişelerinden alınacak, günlük giriş biletinde geçerli %25 indirim!",
  },
];

function CgvEndirim() {
  return (
    <div className="cgvEndirimContainer">
      <p className="endirimTitle">CGV Çocuk Aile Kulübü'ne Özel İndirimler</p>
      <div className="cgvEndirimSwiper">
        <Swiper
          breakpoints={{
            0: {
                slidesPerView: 1, 
                spaceBetween: 10, 
              },
              550:{
                slidesPerView: 2,
                spaceBetween: 15,
              },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {cgvEndirim.map((endirim) => (
            <SwiperSlide>
              <div className="endirimSwiperCard">
                <div className="endirimImage">
                  <img src={endirim.image} alt="" />
                </div>
                <p>{endirim.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CgvEndirim;
