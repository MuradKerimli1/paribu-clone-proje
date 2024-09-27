import React, { useContext, useState } from "react";
import "./Footer.css";
import { GlobalContext } from "../../Context";
import ParibuLogo from "../ParibuLogo/ParibuLogo";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function Footer() {
  const { vizyonMovies, yakindaMovies, salonlarWievData } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const [openSections, setOpenSections] = useState({
    vizyonda: false,
    yakinda: false,
    salonlar: false,
    sinemalar: false,
    uygulama: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  function handleSend(vizyon) {
    navigate(`/selectedMovie/${vizyon.title}`);
  }
  if (vizyonMovies == 0 && yakindaMovies.length == 0) {
    return <Loading />;
  }

  return (
    <div className="FooterBg">
      <div className="footerContainer container">
        <div className="footerMain">
          <ul className="mainList">
            <li>
              <div
                className="mainFtHeader"
                onClick={() => toggleSection("vizyonda")}
              >
                <p>Vizyonda</p>
                <span>{openSections.vizyonda ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div
                className={`mainFtContext ${
                  openSections.vizyonda ? "active" : ""
                }`}
              >
                {vizyonMovies.map((vizyon) => (
                  <span key={vizyon.id} onClick={() => handleSend(vizyon)}>
                    {vizyon.title}
                  </span>
                ))}
              </div>
            </li>
            <li>
              <div
                className="mainFtHeader"
                onClick={() => toggleSection("yakinda")}
              >
                <p>Yakında</p>
                <span>{openSections.yakinda ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div
                className={`mainFtContext ${
                  openSections.yakinda ? "active" : ""
                }`}
              >
                {yakindaMovies.map((vizyon) => (
                  <span key={vizyon.id} onClick={() => handleSend(vizyon)}>
                    {vizyon.title}
                  </span>
                ))}
              </div>
            </li>
            <li>
              <div
                className="mainFtHeader"
                onClick={() => toggleSection("salonlar")}
              >
                <p>Ayrıcalıklı Salonlar</p>
                <span>{openSections.salonlar ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div
                className={`mainFtContext ${
                  openSections.salonlar ? "active" : ""
                }`}
              >
                {salonlarWievData.map((salon) => (
                  <span key={salon.id}>{salon.unvan}</span>
                ))}
              </div>
            </li>
            <li>
              <div
                className="mainFtHeader"
                onClick={() => toggleSection("sinemalar")}
              >
                <p>Sinemalar</p>
                <span>{openSections.sinemalar ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div
                className={`mainFtContext ${
                  openSections.sinemalar ? "active" : ""
                }`}
              >
                <span onClick={() => navigate("/moviePass")}>
                  CGV MoviePass
                </span>
                <span onClick={() => navigate("/cocukAile")}>Çocuk Aile</span>
                <span onClick={() => navigate("/company")}>Kampanyalar</span>
                <span onClick={() => navigate("/goldenEgg")}>Golden Egg</span>
              </div>
            </li>
            <li>
              <div
                className="mainFtHeader"
                onClick={() => toggleSection("uygulama")}
              >
                <p>Uygulamamızı İndirin</p>
                <span>{openSections.uygulama ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div
                className={`mainFtContext ${
                  openSections.uygulama ? "active" : ""
                }`}
              >
                <img src="/Images/google_play_2x.png" alt="Google Play" />
                <img src="/Images/app_store_2x.png" alt="App Store" />
                <p>Reklam vermek için:</p>
                <span>www.marsmedia.com.tr</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="footerSecond">
          <ul className="secondList">
            <li>
              <ParibuLogo />
            </li>
            <li>© Copyright 2023</li>
            <li>Gizlilik Politikası</li>
            <li>Kullanım Koşulları</li>
            <li>Mesafeli Satış Sözleşmesi</li>
            <li>Kişisel Verilerin Korunması</li>
            <li>Çerez Politikası</li>
            <li>
              <img
                src="/Images/footer-mars (1).svg"
                alt="Mars"
                className="footerMars"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
