import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={img} alt="" />
    </div>
  );
};

export default WorkItem;
