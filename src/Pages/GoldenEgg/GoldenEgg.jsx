import React, { useContext } from "react";
import "./GoldenEgg.css";
import CgvFag from "../../Companent/CgvFag/CgvFag";
import { GlobalContext } from "../../Context";
import MobileReklam from "../../Companent/MobileReklam/MobileReklam";

function GoldenEgg() {
  const { cgvPassFag } = useContext(GlobalContext);
  return (
    <div className="goldenEggBg">
      <div className="goldenEgg">
        <div className="goldenEggNavbar">
          <ul className="goldenNavbarList">
            <li>
              <a href="#EggHomeSec">
                <img src="/Images/golden-egg-icon.svg" alt="goldenEgg" />
                <span>Golden Egg</span>
              </a>
            </li>
            <li>
              <a href="#ayricalikTitle">
                <img src="/Images/kova-icon.svg" alt="goldenEgg" />
                <span>Golden Egg Ayrıcalıkları</span>
              </a>
            </li>
            <li>
              <a href="#fagSeci">
                <img src="/Images/cgv-cinemaclub-faq.svg" alt="goldenEgg" />
                <span>Sıkça Sorulan Sorular</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="goldenEggImage">
          <img src="/Images/golden-egg-banner.svg" alt="egg" id="EggHomeSec" />
        </div>
        <div className="goldenEggText">
          <div className="textImageFirst">
            <img src="/Images/golden-egg-1.svg" alt="egg" />
          </div>
          <p>GELDİM, GÖRDÜM, PUANLADIM! GOLDEN EGG'DE İNDİRİMLERİ KAPTIM</p>
          <div className="textImageSecond">
            <img src="/Images/golden-egg-2.svg" alt="egg2" />
          </div>
        </div>
        <div className="goldenEggNavigationImage">
          <div className="mainGolden">
            <img
              src="/Images/golden-egg-text.svg"
              alt="golden-egg"
              className="mainGolden"
            />
          </div>
          <img
            src="/Images/golden-egg-3.svg"
            alt="golden-egg"
            className="birdEgg"
          />
          <img
            src="/Images/golden-egg-2.svg"
            alt="golden-egg"
            className="birdEggSiniq"
          />
          <img
            src="/Images/phone (1).svg"
            alt="golden-egg"
            className="eggPhone"
          />
        </div>
        <div className="goldenEggAyricalik container">
          <div id="ayricalikTitle">
            <p>Golden Egg Ayrıcalıkları</p>
          </div>
          <div className="goldenEggNumbers">
            <div className="ayricalikNumber">
              <img src="/Images/misir-kova-set.png" alt="kova" />
              <div className="ayricalikText">
                <span>Filmi Puanla</span>
                <p>Tüm Mısırlarda</p>
                <button>%20 İNDİRİM</button>
                <p>Kazan!</p>
              </div>
            </div>
            <div className="ayricalikNumber">
              <img src="/Images/misir-menu.svg" alt="menu" />
              <div className="ayricalikText">
                <span>Hem filmi puanla hem de yorumla</span>
                <p>Tüm Mısır Menülerde</p>
                <button>%15 İNDİRİM</button>
                <p>Kazan!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="goldenEggFagBg">
          <div className="goldenEggFag container">
            <p id="fagSeci">Sıkça Sorulan Sorular</p>
            <CgvFag fag={cgvPassFag} max={4} />
          </div>
        </div>
        <div className="goldenEggReklamBg">
          <div className="goldenEggReklam container">
            <MobileReklam />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldenEgg;
