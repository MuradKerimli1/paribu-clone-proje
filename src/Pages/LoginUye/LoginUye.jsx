import React from "react";
import "./LoginUye.css";
import LoginNavbar from "../../Companent/LoginNavbar/LoginNavbar";
import LoginContextHead from "../../Companent/LoginContextHead/LoginContextHead";
import UyeLogin from "../../Companent/UyeLogin/UyeLogin";

function LoginUye() {
  return (
    <div className="loginUye">
      <div className="login_Nav_container">
        <LoginNavbar />
      </div>
      <div className="loginUyeContainerBg">
        <div className="login_Section_context containerer">
          <LoginContextHead actve={"uyeOl"} />
          <UyeLogin />
        </div>
      </div>
    </div>
  );
}

export default LoginUye;
