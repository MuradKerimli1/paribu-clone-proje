import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";
import ParibuLogo from "../ParibuLogo/ParibuLogo";
import NavbarList from "../NavbarList/NavbarList";
import SearchContainer from "../SearchContainer/SearchContainer";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }
  function handleToggleSearch() {
    setIsSearchOpen((prev) => !prev);
  }

  return (
    <div className="nav">
      <div className="nav-container container">
        <div
          className={`navbar-bars ${isMenuOpen ? "active" : ""}`}
          onClick={handleToggleMenu}
        >
          <span className="navbar-bars-open">
            <FaBarsStaggered />
          </span>
          <span className="navbar-bars-close">
            <img src="/Images/m_close.svg" alt="close" />
          </span>
        </div>
        <div className="navbar-logo">
          <ParibuLogo />
        </div>
        <div className={`navbar-list ${isMenuOpen ? "active" : ""}`}>
          <NavbarList onMenuClose={handleToggleMenu} />
        </div>

        <div className="navbar-right">
          <div className="navbar-search">
            <span className="navbar-search-icon" onClick={handleToggleSearch}>
              <IoSearch />
            </span>
            <div
              className={`navbar-search-container ${
                isSearchOpen ? "active" : ""
              }`}
            >
              <SearchContainer handleToggleSearch={handleToggleSearch} />
            </div>
          </div>
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
      </div>
    </div>
  );
}

export default Navbar;
