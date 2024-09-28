import React from "react";
import './LoginNavbar.css'
import { useNavigate } from "react-router-dom";

function LoginNavbar() {
    const homeNavigate=useNavigate()
  return (
    <div className="loginNavbarimg" onClick={()=>homeNavigate("/")}>
      <img src="/Images/logo.svg" alt="Login_navbar"/>
    </div>
  );
}

export default LoginNavbar;
