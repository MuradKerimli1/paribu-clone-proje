import React, { useContext, useState } from "react";
import "./LoginPageForm.css";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function LoginPageForm() {
  const { globalPersons, setAccauntPerson } = useContext(GlobalContext);
  const navigateHom = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [inpVision, setInpVision] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleVisionINp() {
    setInpVision((prev) => !prev);
  }

  function handleLogin() {
    const foundPerson = globalPersons.find(
      (person) =>
        (person.email === emailOrPhone || person.number === emailOrPhone) &&
        person.password === password
    );

    if (foundPerson) {
      setAccauntPerson(foundPerson);
      localStorage.setItem("accauntPerson", JSON.stringify(foundPerson));
      setErrorMessage("");
      navigateHom("/");
    } else {
      setErrorMessage("Email/Phone Yalnis");
    }
  }

  return (
    <div className="loginForms">
      <input
        type="text"
        placeholder="Cep Telefonu / E-Posta"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}
      />
      <div className="pasword-Inp">
        <input
          type={inpVision ? "text" : "password"}
          placeholder="Sifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {inpVision ? (
          <FaRegEye className="password-eye" onClick={handleVisionINp} />
        ) : (
          <FaEyeSlash className="password-eye" onClick={handleVisionINp} />
        )}
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
}

export default LoginPageForm;
