import React from "react";
 import './AyricalikliSalonlar.css'
import SliderHeader from "../SliderHeader/SliderHeader";
import Salonlar from "../Salonlar/Salonlar";

const salonlarData = [
  "/Images/imax-w.svg",
  "/Images/gold-class-w (1).svg",
  "/Images/4dx-w (1).svg",
  "/Images/screenx-w.svg",
  "/Images/starium-w.svg",
  "/Images/tempur-w.svg",
  "/Images/tempur-w (1).svg",
];
function AyricalikliSolanlar() {
  return (
    <div className="salonlarMain container">
      <SliderHeader vizyonYazi={"Ayrıcalıklı Salonlar"} />
      <div className="salonlar">
        {salonlarData.map((salon) => (
          <Salonlar key={salon} salon={salon} />
        ))}
      </div>
    </div>
  );
}

export default AyricalikliSolanlar;
