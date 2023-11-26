import React from "react";
import { projectsNav } from "./Data";

const Works = () => {
  return (
    <div className="work__filters">
      {projectsNav.map((item, index) => {
        return <span className="work__item"></span>;
      })}
    </div>
  );
};

export default Works;
