import React from "react";

const WorkItem = ({ item }) => {
  return <div className="work__card" key={item.id}></div>;
};

export default WorkItem;
