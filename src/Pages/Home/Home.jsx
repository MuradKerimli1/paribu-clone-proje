import React, { useContext, useState } from "react";
import "./Home.css";
import MobileReklam from "../../Companent/MobileReklam/MobileReklam";
import AyricalikliSolanlar from "../../Companent/AyricalikliSolanlar/AyricalikliSalonlar";
import CgvSinemaClub from "../../Companent/CgvSinemaClub/CgvSinemaClub";
import HomeGift from "../../Companent/HomeGift/HomeGift";
import CgvMoviePass from "../../Companent/CgvMoviePass/CgvMoviePass";
import Loading from "../../Companent/Loading/Loading";
import { GlobalContext } from "../../Context";
import VizyonSlider from "../../Companent/VizyonSlider/VizyonSlider";
import HomeCompany from "../../Companent/HomeCompany/HomeCompany";
import HomeSlider from "../../Companent/HomeSlider/HomeSlider";
import LoginError from "../LoginError/LoginError";
import { useNavigate } from "react-router-dom";

function Home() {
  const { yakindaMovies, vizyonMovies, accauntPerson } =
    useContext(GlobalContext);
  const navigateTicket = useNavigate();
  const [showLoginError, setShowLoginError] = useState(false);

  const handleBuyTicketClick = (ElementId) => {
    if (!accauntPerson) {
      setShowLoginError(true);
    } else {
      navigateTicket(`/buyTicket/${ElementId}`);
    }
  };

  console.log(vizyonMovies);
  if (vizyonMovies.length === 0 && yakindaMovies.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      {showLoginError && (
        <LoginError onClose={() => setShowLoginError(false)} />
      )}
      <HomeSlider />
      <div className="homeVizyon">
        <div className="homeConext containerer">
          <VizyonSlider
            movies={vizyonMovies}
            vizyonYazi={"Vizyonda"}
            handleBuyTicketClick={handleBuyTicketClick}
          />
          <VizyonSlider
            handleBuyTicketClick={handleBuyTicketClick}
            movies={yakindaMovies}
            vizyonYazi={"Yakinda Vizyonda"}
          />
        </div>
      </div>
      <div className="homeCompanye">
        <div className="homeCompanyContext containerer">
          <HomeCompany />
        </div>
      </div>
      <div className="cgvSection">
        <CgvMoviePass />
      </div>
      <div className="homegiftContainer">
        <HomeGift />
      </div>
      <div className="cgvSinemaContainer">
        <CgvSinemaClub />
      </div>
      <div className="ayricalikliSaolnlarContainer">
        <AyricalikliSolanlar />
      </div>
      <div className="mobileReklamContainer ">
        <div className="mobileReklamContainerSecond containerer">
          <MobileReklam />
        </div>
      </div>
    </div>
  );
}

export default Home;
