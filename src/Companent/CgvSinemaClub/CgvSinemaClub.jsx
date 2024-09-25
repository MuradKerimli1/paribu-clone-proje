import React from "react";
import "./CgvSinemaClub.css";

function CgvSinemaClub() {
  return (
    <div className="cgvSinemaMain container">
      <div className="cgvLogoSinema">
        <img src="/Images/mobile-cinema-club.svg" alt="cgvIcon" loading="lazy" />
      </div>
      <div className="cgvSinemaContext">
        <p className="sub-first-paragraph">Bitmeyen fayda yapmışlar!</p>
        <div className="sub-description">
          <p>
            %3 CGV Para ve hizmet bedeli yok. İndirimli 3D gözlüklerin yanında,
            doğum günü sürprizleri. Herkesten önce sen haberdar ol!
          </p>
        </div>
        <div className="sub-buttons">
          <button className="sub-kesfet">Kesfet</button>
          <button className="sub-uye">Üye Ol</button>
        </div>
      </div>
      <div className="cgvSinemaImage">
        <img src="/Images/avatar_coin_1x.png" alt="avatarIcon" loading="lazy" />
      </div>
    </div>
  );
}

export default CgvSinemaClub;
