import React from "react";
import "./HomeCompanyCard.css";
import { useNavigate } from "react-router-dom";

function HomeCompanyCard({ item }) {
  const detal=useNavigate()
  return (
    <div className="homecompanyCard">
      <div className="homeCompanyImage">
        <img src={item.image} alt="companyImage" loading="lazy" />
      </div>
      <div className="homeCompanyContextText">
        <div className="homeCompanyContextHeader">
          <p className="companyHeader">{item.name}</p>
        </div>
        <div className="homeCompanyContextFooter">
        <button onClick={() => detal(`/companyDetail/${item.id}`)}>
            Detayli Bilgi
          </button>
          <p>
            Son gun<span>{item.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCompanyCard;
