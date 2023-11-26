import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skill;
