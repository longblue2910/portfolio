import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItem from "./WorkItem";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProject = projects.fillter((project) => {
        return project.category === item.name;
      });
    }
  });

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

      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;