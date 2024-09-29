import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";
import ParibuLogo from "../ParibuLogo/ParibuLogo";
import NavbarList from "../NavbarList/NavbarList";
import SearchContainer from "../SearchContainer/SearchContainer";
import LoginContainer from "../LoginContainer/LoginContainer";

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
    <div className="nave">
      <div className="nav-container containerer">
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
          <div className="Login-Container-Second">
            <LoginContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
