import React, { useContext } from "react";
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

function Home() {
  const { yakindaMovies, vizyonMovies } = useContext(GlobalContext);

  console.log(vizyonMovies);
  if (vizyonMovies.length === 0 && yakindaMovies.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <HomeSlider />
      <div className="homeVizyon">
        <div className="homeConext container">
          <VizyonSlider movies={vizyonMovies} vizyonYazi={"Vizyonda"} />
          <VizyonSlider
            movies={yakindaMovies}
            vizyonYazi={"Yakinda Vizyonda"}
          />
        </div>
      </div>
      <div className="homeCompanye">
        <div className="homeCompanyContext container">
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
        <div className="mobileReklamContainerSecond container">
          <MobileReklam />
        </div>
      </div>
    </div>
  );
}

export default Home;
