import React from "react";
import { projectsNav } from "./Data";

const Works = () => {
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span className="work__item" key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid"></div>
    </div>
  );
};

export default Works;
