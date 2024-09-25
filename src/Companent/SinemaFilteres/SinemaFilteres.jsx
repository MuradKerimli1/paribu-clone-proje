import React, { useContext } from "react";
import "./SinemaFilteres.css";
import SinemaSearching from "../SinmeSearching/SinemaSearching";
import SinemaChooose from "../SinemaChooose/SinemaChooose";
import { GlobalContext } from "../../Context";
import SinemaSort from "../SinemaSort/SinemaSort";

function SinemaFilteres({
  setSelectedName,
  setSelectedTitle,
  setSearchTerm,
  setSortOrder,
  seFavOrSin,
}) {
  const { salonlarWievData } = useContext(GlobalContext);

  const sehirData = Array.from(
    new Set(salonlarWievData.map((item) => item.name))
  );
  const unvanData = Array.from(
    new Set(salonlarWievData.map((item) => item.unvan))
  );

  return (
    <div className="sinemaFilteres">
      <SinemaChooose
        filterHeaderText={"Şehir Seç"}
        data={sehirData}
        handleSelection={setSelectedName}
        zIndexx={15}
      />
      <SinemaChooose
        filterHeaderText={"Ayrıcalıklı Salon Seç"}
        data={unvanData}
        handleSelection={setSelectedTitle}
        zIndexx={10}
      />
      <SinemaSearching setSearchTerm={setSearchTerm} />
      <SinemaSort setSortOrder={setSortOrder} seFavOrSin={seFavOrSin} />
    </div>
  );
}

export default SinemaFilteres;
