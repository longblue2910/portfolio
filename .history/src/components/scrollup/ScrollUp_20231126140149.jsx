import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollUp");
  });
  return (
    <a href="#test" className="scrollup">
      <i className="uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
