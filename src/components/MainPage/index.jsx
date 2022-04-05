import React from "react";
import { NavLink } from "react-router-dom";
import { colorTheme } from "../../constants/colorTheme";
import { AnimateLogo } from "../AnimateLogo/index";
import { Button } from "../Button/index";
import "./styles.css";

const background = require("../../images/cover.jpg");
const backgroundDark = require("../../images/cover_dark.jpg");

const MainPage = ({ theme }) => {
  const currentColor =
    theme === colorTheme.light ? colorTheme.dark : colorTheme.light;

  const getBackgroundImageSettings = theme => {
    return {
      backgroundImage:
        theme === colorTheme.light
          ? `url(${background})`
          : `url(${backgroundDark})`,
      backgroundPosition: "top right",
      backgroundRepeat: "no-repeat",
      backgroundSize: window.innerWidth < 1340 ? "45%" : "contain"
    };
  };

  return (
    <div className="MainPage">
      <div
        style={getBackgroundImageSettings(theme)}
        className="MainPage__development"
      >
        <div className="MainPage__left-column">
          <h1 style={{ color: currentColor }} className="MainPage__title">
            Рахимов Артем
          </h1>
          <h2 style={{ color: currentColor }} className="MainPage__subtitle">
            Frontend Developer
          </h2>
          <Button theme={theme} className="MainPage__button" name="About Me" />
        </div>
        <AnimateLogo />
        <NavLink to="/portfolio/projects/latest" className="MainPage__link">
          My works
        </NavLink>
      </div>
    </div>
  );
};

export default MainPage;
