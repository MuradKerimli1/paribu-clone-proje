import React from "react";
import "./FooterContact.css";

function FooterContact() {
  return (
    <div className="footerContactBg">
      <div className="footerContactMain container">
        <div className="contact-text">
          <p>Bizi Takip Et</p>
        </div>
        <div className="footerContactTerms">
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/facebook.svg" alt="Facebook" loading="lazy" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/twitter.svg" alt="Twitter" loading="lazy" />
          </a>
          <a
            href="https://www.youtube.com"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/youtube.svg" alt="YouTube" loading="lazy" />
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/instagram.svg" alt="Instagram" loading="lazy" />
          </a>
          <a
            href="https://www.tiktok.com"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/tiktok.svg" alt="TikTok" loading="lazy" />
          </a>
          <a
            href="https://www.example.com"
            aria-label="Mobile App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/wp-mobile-app-icon.svg"
              alt="Mobile App"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
