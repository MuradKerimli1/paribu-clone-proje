import React from "react";
import './Film.css'
import SliderCart from "../SliderCart/SliderCart";

function Films({ Data }) {
  return (
    <div className="Films">
      {Data && Data.map((element,index) => <SliderCart key={index}  element={element} />)}
    </div>
  );
}

export default Films;
