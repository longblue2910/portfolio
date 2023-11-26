import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Long Jr.</h1>

        <ul className="footer__list">
          <li>
            <a href="#Link1" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#Link1" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#tesiamonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Rim da silva. All rights servered
        </span>
      </div>
    </footer>
  );
};

export default Footer;
