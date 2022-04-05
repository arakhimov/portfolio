import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { colorTheme } from "../../constants/colorTheme";
import { projectsDescription } from "../../constants/projectsDescription";
import { Card } from "../Card/index";
import "./styles.css";

const Projects = ({ theme }) => {
  const [projectType, setType] = useState("Latest");

  const handleClick = event => {
    setType(event.target.innerHTML);
  };

  const currentTheme =
    theme === colorTheme.light ? colorTheme.dark : colorTheme.light;

  return (
    <div style={{ color: currentTheme }} className="Portfolio">
      <nav className="Portfolio__nav">
        <NavLink
          onClick={handleClick}
          className="Nav__link"
          to={"/portfolio/projects/latest"}
          activeClassName="Nav__link Nav__link_active"
        >
          Latest
        </NavLink>
        <NavLink
          onClick={handleClick}
          className="Nav__link"
          to={"/portfolio/projects/css"}
          activeClassName="Nav__link Nav__link_active"
        >
          CSS
        </NavLink>
        <NavLink
          onClick={handleClick}
          className="Nav__link"
          to={"/portfolio/projects/js"}
          activeClassName="Nav__link Nav__link_active"
        >
          JS
        </NavLink>
        <NavLink
          onClick={handleClick}
          className="Nav__link"
          to={"/portfolio/projects/react"}
          activeClassName="Nav__link Nav__link_active"
        >
          React
        </NavLink>
        <NavLink
          onClick={handleClick}
          className="Nav__link"
          to={"/portfolio/projects/redux"}
          activeClassName="Nav__link Nav__link_active"
        >
          Redux
        </NavLink>
        <NavLink
          onClick={handleClick}
          className="Nav__link"
          to={"/portfolio/projects/nodejs"}
          activeClassName="Nav__link Nav__link_active"
        >
          NodeJs
        </NavLink>
        <NavLink
          onClick={handleClick}
          className="Nav__link"
          to={"/portfolio/projects/all"}
          activeClassName="Nav__link Nav__link_active"
        >
          All
        </NavLink>
      </nav>
      {Object.entries(projectsDescription)
        .filter(([_, value]) => value.type.includes(projectType))
        .map(([key]) => (
          <Card name={key} key={key} />
        ))}
    </div>
  );
};

export default Projects;
