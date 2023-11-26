import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    //when the scroll is higher than 560 viewport height, and the show-scroll classs to a tag with scroll-top class
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
