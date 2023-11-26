import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
    }
  });
  return (
    <a href="#test" className="scrollup">
      <i className="uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
