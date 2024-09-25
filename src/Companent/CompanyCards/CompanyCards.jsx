import React, { useContext } from "react";
import './CompanyCards.css'
import CompanyCard from "../CompanyCard/CompanyCard";
import { GlobalContext } from "../../Context";

function CompanyCards() {
  const { SecondCompanyData } = useContext(GlobalContext);
  return (
    <div className="companyCards">
      {SecondCompanyData.map((cart, index) => (
        <CompanyCard key={index} cart={cart} />
      ))}
    </div>
  );
}

export default CompanyCards;
