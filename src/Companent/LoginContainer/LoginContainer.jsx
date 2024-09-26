import React from "react";
import "./LoginContainer.css";
import { RxExit } from "react-icons/rx";

function LoginContainer() {
  return (
    <div className="loginContainerMain">
      <div className="navbar-login">
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
    </div>
  );
}

export default LoginContainer;
