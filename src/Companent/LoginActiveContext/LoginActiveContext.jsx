import React from "react";
import "./LoginActiveContext.css";

function LoginActiveContext({ handleChangeLogin }) {
  return (
    <div className="navbar-login-context">
      <div className="login-context-btns">
        <button
          className="context-giris"
          onClick={() => handleChangeLogin("/loginGiris")}
        >
          Giriş Yap
        </button>
        <button
          className="context-uye"
          onClick={() => handleChangeLogin("/loginUye")}
        >
          Üye Ol
        </button>
      </div>
      <div className="navbar-context-img">
        <img src="/Images/d_cgv_cinema_club.svg" alt="cgvClub" />
      </div>
      <div className="navbar-context-text">
        <p>
          CGV Cinema Club üyeliği ile hizmet bedeli ödeme, anında CGV Para kazan
          ve istediğin zaman kullan! CGV Cinema Club'ı <br />
          <span>hemen kesfet!</span>
        </p>
      </div>
    </div>
  );
}

export default LoginActiveContext;
