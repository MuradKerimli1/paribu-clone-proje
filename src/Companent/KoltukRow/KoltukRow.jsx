import React from "react";
import './KoltukRow.css';

function KoltukRow({ koltukRow }) {
  return (
    <div className="rows">
      {koltukRow.map((koltuk, index) => (
        <span key={index}>{koltuk}</span> 
      ))}
    </div>
  );
}

export default KoltukRow;
