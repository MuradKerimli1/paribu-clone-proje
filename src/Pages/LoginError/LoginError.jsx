import React from "react";
import "./LoginError.css";
import { useNavigate } from "react-router-dom";

function LoginError({ onClose }) {
  const loginNav = useNavigate();
  return (
    <div className="loginError">
      <div className="loginErrorContext">
        <img
          src="/Images/cgv-banner (1).jpg"
          alt="banner"
          className="cgVVBanner"
        />
        <div className="loginErrorText">
          <p>
            Hey! Bu işlemi yapabilmek için CGV Cinema Club hesabınla giriş
            yapmalısın!
          </p>
          <div className="loginErrorBtns">
            <button
              className="context-uye"
              onClick={() => loginNav("/loginUye")}
            >
              Üye Ol
            </button>
            <button
              className="context-giris"
              onClick={() => loginNav("/loginGiris")}
            >
              Giriş Yap
            </button>
          </div>
          <span>CGV Cinema Club'ı Keşfet</span>
          <img
            onClick={onClose}
            src="/Images/close-modal.svg"
            alt="close"
            className="cgVErrorClose"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginError;
