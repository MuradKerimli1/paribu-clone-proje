import React from "react";
import "./Company.css";
import CompanyHeader from "../../Companent/CompanyHeader/CompanyHeader";
import PopularCompany from "../../Companent/PopularCompany/PopularCompany";
import MovieBrand from "../../Companent/MovieBrand/MovieBrand";
import CompanyCards from "../../Companent/CompanyCards/CompanyCards";

function Company() {
  return (
    <div className="companyBg">
      <div className="companyContainer">
        <div className="companyHeaderContainer">
          <CompanyHeader />
        </div>
        <div className="companyContextContainer container">
            <div className="companyBrand">
            <MovieBrand Brand={"Kampanyalar"} />
            </div>
         
            <div className="companyPopularContainer">
            <PopularCompany />
            </div>
          <CompanyCards />
        </div>
      </div>
    </div>
  );
}

export default Company;
