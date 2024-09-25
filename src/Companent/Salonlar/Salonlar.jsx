import React from "react";
import "./Salonlar.css";

function Salonlar({ salon }) {
  return (
    <div className="salon" key={salon.id}>
      <img src={salon} alt="salon" loading="lazy" />
    </div>
  );
}

export default Salonlar;