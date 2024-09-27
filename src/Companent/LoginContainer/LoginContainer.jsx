import React, { useState } from "react";
import "./LoginContainer.css";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const [loginActive, setLoginActive] = useState(false);
  const loginNavigate = useNavigate();
  function handleActiveLogOrAc() {
    setLoginActive((prev) => !prev);
  }
  async function handleChangeLogin(loginPath) {
    await loginNavigate(loginPath);
    handleActiveLogOrAc();
  }
  return (
    <div className="loginContainerMain">
      <div className="navbar-login-wiev">
        <div className="navbar-login" onClick={handleActiveLogOrAc}>
          <div className="navbar-login-container">
            <div className="navbar-login-left">
              <img
                src="/Images/cgv_movie_pass_1x.svg"
                alt="cgv-cinema"
                className="navbar-login-image"
              />
            </div>
            <div className="navbar-login-right">
              <p className="navbar-login-giris">Giriş Yap</p>
              <span className="navbar-login-uye">veya Üye Ol</span>
            </div>
          </div>
        </div>
        {loginActive && (
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
                CGV Cinema Club üyeliği ile hizmet bedeli ödeme, anında CGV Para
                kazan ve istediğin zaman kullan! CGV Cinema Club'ı <br />
                <span>hemen kesfet!</span>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="navbar-login-accaunt">
        <div
          className="navbar-login-accatunt-Head"
          onClick={handleActiveLogOrAc}
        >
          <p>MK</p>
        </div>
        {loginActive && (
          <div className="navbar-login-accatunt-Context">
            <ul>
              <li>
                <CgProfile className="accauntIcon" />
                Profil görüntüle
              </li>
              <li>
                <IoExitOutline className="accaount-exit" />
                <span>çıkış yap</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginContainer;
