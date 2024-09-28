import React, { useContext, useState } from "react";
import "./LoginContainer.css";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import LoginActiveContext from "../LoginActiveContext/LoginActiveContext";
import { GlobalContext } from "../../Context";

function LoginContainer() {
  const { accauntPerson, setAccauntPerson } = useContext(GlobalContext);
  const [loginActive, setLoginActive] = useState(false);
  const loginNavigate = useNavigate();

  function handleActiveLogOrAc() {
    setLoginActive((prev) => !prev);
  }

  async function handleChangeLogin(loginPath) {
    await loginNavigate(loginPath);
    handleActiveLogOrAc();
  }

  function handleLogout() {
    setAccauntPerson(null);
    localStorage.removeItem("accauntPerson");
  }

  const isimler = accauntPerson
    ? `${accauntPerson.name.charAt(0).toUpperCase()}${accauntPerson.surname
        .charAt(0)
        .toUpperCase()}`
    : "";

  return (
    <div className="loginContainerMain">
      {accauntPerson != null ? (
        <div className="navbar-login-accaunt">
          <div
            className="navbar-login-accatunt-Head"
            onClick={handleActiveLogOrAc}
          >
            <p>{isimler}</p>
          </div>
          {loginActive && (
            <div className="navbar-login-accatunt-Context">
              <ul>
                <li onClick={handleLogout}>
                  <IoExitOutline className="accaount-exit" />
                  <span>çıkış yap</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
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
            <LoginActiveContext handleChangeLogin={handleChangeLogin} />
          )}
        </div>
      )}
    </div>
  );
}

export default LoginContainer;
