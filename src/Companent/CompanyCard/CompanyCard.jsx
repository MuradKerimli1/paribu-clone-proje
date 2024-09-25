import React from "react";
import "./CompanyCard.css";
import { useNavigate } from "react-router-dom";

function CompanyCard({ cart }) {
  const detal = useNavigate();
  return (
    <div className="companyCard" key={cart.id}>
      <img src={cart.image} alt="cardCompany" />
      <div className="cardCompanyContent">
        <div className="cardCompanyText">
          <p>{cart.name}</p>
          <span>{cart.plot}</span>
        </div>
        <div className="cardCompanyBtn">
          <button onClick={() => detal(`/companyDetail/${cart.id}`)}>
            Detayli Bilgi
          </button>
          <p>
            Son Gun: <span>{cart.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
