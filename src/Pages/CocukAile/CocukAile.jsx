import React, { useContext } from "react";
import "./CocukAile.css";
import UyeRight from "../../Companent/UyeRight/UyeRight";
import UyeAyricalik from "../../Companent/UyeAyricalik/UyeAyricalik";
import CgvEndirim from "../../Companent/CgvEndirim/CgvEndirim";
import { GlobalContext } from "../../Context";
import CgvFag from "../../Companent/CgvFag/CgvFag";
import MobileReklam from "../../Companent/MobileReklam/MobileReklam";
import CgvFestival from "../../Companent/CgvFestival/CgvFestival";

function CocukAile() {
  const { cgvPassFag } = useContext(GlobalContext);
  return (
    <div className="cocukAile">
      <div className="cocukAileHeaderBg">
      <div className="cocukAileHeader containerer">
        <ul className="cocukAileList">
          <li>
            <a href="#aileKUlub">
              <img src="/Images/cocuk-kulubu-logo.svg" alt="cocukAile" />
              <span>CGV Çocuk Aile Kulübü</span>
            </a>
          </li>
          <li>
            <a href="#aileCocuk">
              <img src="/Images/members.svg" alt="members" />
              <span>Nasıl Üye Olabilirim?</span>
            </a>
          </li>
          <li>
            <a href="#uyeAyri">
              <img src="/Images/ballon-sm.svg" alt="goldenEgg" />
              <span>CGV Çocuk Aile Kulübü Ayrıcalıkları</span>
            </a>
          </li>
          <li>
            <a href="#fagozellik">
              <img src="/Images/cgv-cinemaclub-faq.svg" alt="goldenEgg" />
              <span>Sıkça Sorulan Sorular</span>
            </a>
          </li>
        </ul>
      </div>
      </div>
     
      <div className="cocukAileMainImage">
        <img src="/Images/aile-cocuk-banner.svg" alt="mainImage" />
      </div>
      <div className="cocukAileAbout containerer" id="aileKUlub">
        <div className="cocukAileAboutContent">
          <div className="cocukAileAboutLeft">
            <p>Nedir bu “CGV Çocuk Aile Kulübü”?</p>
            <span>
              Ailecek sinema keyfini, size özel firsatlarla yaşayabileceğiniz
              bir sinema kulübü. Renkli filmler, cazip indirimler, sürpriz
              hediyeler ve daha fazlasi CGV Çocuk Aile Kulübü'nde sizi bekliyor.
            </span>
            <strong>
              <strong>
                Bu keyifli dünyaya katilmak için gişelerimize gelin ve hemen üye
                olun!
              </strong>
            </strong>
          </div>
          <div className="cocukAileAboutRight">
            <img src="/Images/about-img-mobile.svg" alt="about-img" />
          </div>
        </div>
        <img src="/Images/ballon.svg" alt="ballon" className="balonLeft" />
        <img src="/Images/ballon.svg" alt="ballon" className="balonRight" />
        <img src="/Images/union-red.svg" alt="ballon" className="uniionLeft" />
      </div>
      <div className="cocukAileUyeBg" id="aileCocuk">
        <div className="cocukAileUye containerer">
          <div className="cocukAileUyeLeft">
            <img src="/Images/ballon-boy.png" alt="balon-boy" />
            <div className="uyeLeftContext">
              <span>CGV Çocuk Aile Kulübü</span>
              <p>Nasıl Üye Olabilirim?</p>
            </div>
          </div>
          <div className="cocukAileUyeRight">
            <UyeRight
              rightImage={"gise-1.svg"}
              rightNumber={"1.png"}
              str={"Gişeden Üyeliğini Oluşturmalısın!"}
              paragraph={
                '12 yaş ve altı çocuğun ile birlikte gişemize gelip, üyeliğine çocuğunu ekleterek "CGV Çocuk Aile Kulübü"ne üye olmalısın.'
              }
              spText={"Üyelik için sadece 50 TL ödemen yeterli."}
            />
            <UyeRight
              rightImage={"gise-4.svg"}
              rightNumber={"2.png"}
              str={"Üyelik Kartını Almalısın!"}
              paragraph={
                "CGV Çocuk Aile Kulübü üyelik kartını edinmek çok kolay. Kartını gişeden aldıktan sonra bilgilerini bizimle paylaş, kısa sürede üyeliğin hazır olsun."
              }
            />
            <UyeRight
              rightImage={"hediye-kutusu.svg"}
              rightNumber={"3.png"}
              str={"'Hoş Geldin Hediyesi' Zamanı!"}
              paragraph={
                "Aramıza 'Hoş Geldin Hediyen' seni bekliyor. Üyeliğini oluşturduktan sonra hediyeni teslim almayı unutma!"
              }
            />
            <UyeRight
              rightImage={"yildizlar.svg"}
              rightNumber={"4.png"}
              str={"Avantajların Tadını Çıkar!"}
              paragraph={
                "Sana özel avantaj ve indirimlerle CGV Çocuk Aile Kulübü'nün tadını çıkarmak için hazırsın!"
              }
            />
          </div>
        </div>
      </div>
      <div className="uyeAyricalik containerer" id="uyeAyri">
        <p className="uyeAyricalikTitle">CGV Çocuk Aile Kulübü Ayrıcalıkları</p>
        <div className="uyeAyricalikItems">
          <UyeAyricalik
            uyeImg={"bilet.png"}
            uyeImgSpan={"1 Bilet Alana 2. si Bedava"}
            uyeBtn={"% 30 İNDİRİMLİ"}
            uyeParagraph={
              "Kulübe katılarak 1. bilet alımında 2. bileti %30 indirimli alma fırsatı!"
            }
            uySpan={"Bu fırsattan sene sonuna kadar 6 kez yararlanılabilir."}
          />
          <UyeAyricalik
            uyeImg={"misir.png"}
            uyeImgSpan={"Mısır Menülerde"}
            uyeBtn={"% 50 İNDİRİMLİ"}
            uyeParagraph={
              "Aile Menüsü'nde %50, Kova Menü'de %40 ve Büyük İki İçecekli Menü'de %30indirim fırsatı!"
            }
          />
          <UyeAyricalik
            uyeImg={"kalemlik.png"}
            uyeImgSpan={"Aramıza Katılanlara"}
            uyeBtn={"HOŞ GELDİN HEDİYESI"}
            uyeParagraph={
              "Gişeden çocuğuna özel üyelik kartını aldıktan sonra 'Hoş Geldin Hediye'si fırsatı!"
            }
          />
        </div>
        <img src="/Images/ballon.svg" alt="ballon" className="uyeBalonLeft" />
        <img src="/Images/ballon.svg" alt="ballon" className="uyeBalonRight" />
      </div>
      <div className="cgvOzelEndirimlerBg">
        <div className="containerer">
          <CgvEndirim />
        </div>
      </div>
      <div className="cgvFilmFestivalBg">
        <div className="cgvFilmFestival containerer">
          <CgvFestival />
        </div>
      </div>
      <div className="cgOzellikFooter">
        <div className="cgvOzellikfag containerer" id="fagozellik">
          <CgvFag fag={cgvPassFag} max={5} />
        </div>
        <div className="cgvOzellikReklam containerer">
          <MobileReklam />
        </div>
      </div>
    </div>
  );
}

export default CocukAile;
