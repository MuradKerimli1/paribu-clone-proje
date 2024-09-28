import React from "react";
import "./LoginGiris.css";
import LoginNavbar from "../../Companent/LoginNavbar/LoginNavbar";
import LoginPageForm from "../../Companent/LoginPageForm/LoginPageForm";
import LoginContextHead from "../../Companent/LoginContextHead/LoginContextHead";

function LoginGiris() {
  return (
    <div className="loginGiris">
      <div className="login_Nav_container">
        <LoginNavbar />
      </div>
      <div className="login_Section_contextBg">
        <div className="login_Section_context containerer">
          <LoginContextHead actve={'giris'} />
          <LoginPageForm />
        </div>
      </div>
    </div>
  );
}

export default LoginGiris;
