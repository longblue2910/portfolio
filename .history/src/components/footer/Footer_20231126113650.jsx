import React from "react";

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
            className="home__social-icon"
            target="_bkank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            className="home__social-icon"
            target="_bkank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com"
            className="home__social-icon"
            target="_bkank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
