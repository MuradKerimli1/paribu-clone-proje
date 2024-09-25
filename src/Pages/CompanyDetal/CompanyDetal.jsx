import React, { useContext } from "react";
import "./CompanyDetal.css";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CompanyCard from "../../Companent/CompanyCard/CompanyCard";
import MovieBrand from "../../Companent/MovieBrand/MovieBrand";

function CompanyDetal() {
  const { SecondCompanyData } = useContext(GlobalContext);
  const { id } = useParams();
  const selectedCompany = SecondCompanyData.find(
    (item) => item.id === parseInt(id)
  );
  const similarCompany = SecondCompanyData.filter(
    (company) => company.id !== parseInt(id)
  );

  return (
    <div className="companyDetalBg">
      <div className="companyDetal container">
        <MovieBrand Brand={"Company"} />
        <div className="companyDetalImage">
          <img src={selectedCompany.largeImage} alt="companyImage" />
        </div>
        <div className="companyDetalText">
          <div className="companyDetalDate">
            <p>Kampanya Dönemi:</p>
            <span>{selectedCompany.date}</span>
          </div>
          <div className="companyDetalTitle">
            <p>{selectedCompany.name}</p>
          </div>
          <div className="companyDetalKosullari">
            <span>Kompaniya Kosullari:</span>
            {selectedCompany.kosullar.map((item, index) => (
              <div className="kosulItem" key={index}>
                <span>{index + 1}</span>:<p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="companyDetalSwiperContainer">
          <div className="companyDetalSwiperTitle">
            <p>İlginizi Çekebilecek Diğer Kampanyalar</p>
          </div>
          <div className="companyDetalSwiper">
            <div className="swiperGrid">
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },

                  600: {
                    slidesPerView: 1.9,
                    spaceBetween: 10,
                  },
                  810: {
                    slidesPerView: 2.2,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                }}
              >
                {similarCompany.map((element) => (
                  <SwiperSlide key={element.id}>
                    <CompanyCard cart={element} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetal;
