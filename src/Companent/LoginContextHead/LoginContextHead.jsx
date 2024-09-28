import React from "react";
import "./LoginContextHead.css";
import { useNavigate } from "react-router-dom";

function LoginContextHead({ actve }) {
  const loginSecPAg = useNavigate();
  return (
    <div className="loginContextHd">
      <p>CGV Cinema Club’a Hoşgeldiniz</p>
      <div className="changeLogin">
        <span
          className={`${actve == "giris" ? "active" : ""}`}
          onClick={() => loginSecPAg("/loginGiris")}
        >
          Giriş Yap
        </span>
        <span
          className={`${actve == "uyeOl" ? "active" : ""}`}
          onClick={() => loginSecPAg("/loginUye")}
        >
          Üye Ol
        </span>
      </div>
    </div>
  );
}

export default LoginContextHead;
