import React, { useContext, useState } from "react";
import "./SinemaFilteres.css";
import SinemaSearching from "../SinmeSearching/SinemaSearching";
import SinemaChooose from "../SinemaChooose/SinemaChooose";
import { GlobalContext } from "../../Context";
import SinemaSort from "../SinemaSort/SinemaSort";
import LoginError from "../../Pages/LoginError/LoginError";

function SinemaFilteres({
  setSelectedName,
  setSelectedTitle,
  setSearchTerm,
  setSortOrder,
  seFavOrSin,
}) {
  const { salonlarWievData,sehirData,unvanData} = useContext(GlobalContext);
  const [showLoginError, setShowLoginError] = useState(false);


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
      <SinemaSort
        setSortOrder={setSortOrder}
        seFavOrSin={seFavOrSin}
        setFavoriUye={setShowLoginError}
      />
     {showLoginError && <LoginError onClose={() => setShowLoginError(false)} />}
    </div>
  );
}

export default SinemaFilteres;
