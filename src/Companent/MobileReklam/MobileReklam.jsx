import React from "react";
import "./MobileReklam.css";

function MobileReklam() {
  return (
    <div className="mobileReklamMain">
      <div className="mobileReklamLeft">
        <div className="reklamTitle">
          <p>Mobil Uygulamamızı Keşfedin!</p>
        </div>
        <div className="mobile-icons">
          <img
            src="/Images/google_play_3x.png"
            alt="googlePlay"
            loading="lazy"
          />
          <img src="/Images/app_store_3x.png" alt="Appstore" loading="lazy" />
        </div>
      </div>
      <div className="mobileReklamRight">
        <div className="reklamphone">
          <img src="/Images/phone_1x.png" alt="phone" loading="lazy" className="reklamPhoneone" />
          <img src="/Images/phone_3x.png" alt="phone" loading="lazy" className="reklamPhonesecond" />
        </div>
      </div>
      <div className="reklamAvatar">
        <img
          src="/Images/phone_avatar_1x.png"
          alt="phoneAvatar"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default MobileReklam;
