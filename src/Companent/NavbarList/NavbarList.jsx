import React from "react";
import { Link } from "react-router-dom";
import "./NavbarList.css";

function NavbarList({ onMenuClose }) {
  return (
    <nav className="navbarList">
      <ul className="navigation-parent">
        <li className="navigation-child" onClick={onMenuClose}>
          <Link to="/filmler">
            <span className="navigation-icon">
              <img src="/Images/m_video-play.svg" alt="Video Play Icon" />
            </span>
            <p className="navigation-text">Filmler</p>
          </Link>
        </li>
        <li className="navigation-child" onClick={onMenuClose}>
          <Link to="/sinemalar">
            <span className="navigation-icon">
              <img src="/Images/m_location.svg" alt="Location Icon" />
            </span>
            <p className="navigation-text">Sinemalar</p>
          </Link>
        </li>
        <li className="navigation-child" onClick={onMenuClose}>
          <Link to="/company">
            <span className="navigation-icon">
              <img src="/Images/m_star.svg" alt="Star Icon" />
            </span>
            <p className="navigation-text">Kampaniyalar</p>
          </Link>
        </li>
        <li className="navigation-child" onClick={onMenuClose}>
          <Link to="/moviePass">
            <span className="navigation-image">
              <img src="/Images/cgv_movie_pass_1x.svg" alt="CGV Movie Pass" />
            </span>
            <span className="premium-text">CGV MoviePass</span>
          </Link>
        </li>
        <li className="navigation-child" onClick={onMenuClose}>
          <Link to="/cocukAile">
            <span className="navigation-image">
              <img
                src="/Images/cocuk-kulubu-head-logo.svg"
                alt="Çocuk Kulübü"
              />
            </span>
            <span className="premium-text">CGV Çocuk Aile Kulübü</span>
          </Link>
        </li>
        <li className="navigation-child" onClick={onMenuClose}>
          <Link to="/goldenEgg">
            <span className="navigation-image">
              <img src="/Images/golden-egg-logo.svg" alt="Golden Egg" />
            </span>
            <span className="premium-text">Golden Egg</span>
          </Link>
        </li>
      </ul>

      <footer className="navbar-list-footer">
        <p className="footer-list-paragraph">Bizi Takip Et</p>
        <div className="navbar-footer-icons">
          <ul className="navbar-footer-parent">
            <li className="navbar-footer-child">
              <img src="/Images/facebook.svg" alt="Facebook Icon" />
            </li>
            <li className="navbar-footer-child">
              <img src="/Images/twitter.svg" alt="Twitter Icon" />
            </li>
            <li className="navbar-footer-child">
              <img src="/Images/youtube.svg" alt="YouTube Icon" />
            </li>
            <li className="navbar-footer-child">
              <img src="/Images/instagram.svg" alt="Instagram Icon" />
            </li>
            <li className="navbar-footer-child">
              <img src="/Images/tiktok.svg" alt="TikTok Icon" />
            </li>
          </ul>
        </div>
        <div className="navbar-copyRight">
          <img
            src="/Images/footer-mars.svg"
            alt="Footer Mars Logo"
            className="footer-mars"
          />
        </div>
      </footer>
    </nav>
  );
}

export default NavbarList;
