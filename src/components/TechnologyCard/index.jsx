import React from "react";
import "./styles.css";

const TechnologyCard = ({ theme, component: Component, name }) => {
  return (
    <div className="TechnologyCard">
      <Component theme={theme} />
      <p className="TechnologyCard__tooltip">{name}</p>
    </div>
  );
};

export default TechnologyCard;
