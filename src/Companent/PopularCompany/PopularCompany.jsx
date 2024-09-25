import React from "react";
import './PopularCompany.css'

function PopularCompany() {
  return (
    <div className="popularCompany">
      <div className="popularCompanyLeft">
        <span>POPÜLER</span>
      </div>
      <div className="popularCompanyRight">
        <div className="companyDate">
          <p>
            Kampanya Dönemi:<span>01 Ocak 2023 - 31 Aralık 2024</span>
          </p>
        </div>
        <div className="popularCompanyTitle">
          <p>Her Pazartesi ve Çarşamba Halk Günü!</p>
        </div>
        <div className="popularCompanyDescription">
         <p> Her Pazartesi ve Çarşamba Sinema Biletlerinde İndirim Seni Bekliyor!</p>
        </div>
        <div className="popularCompanyButton">
          <button>Detayli Bilgi</button>
        </div>
      </div>
    </div>
  );
}

export default PopularCompany;
