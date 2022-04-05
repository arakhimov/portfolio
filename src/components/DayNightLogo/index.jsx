import React from "react";
import { colorTheme } from "../../constants/colorTheme";
import "./styles.css";

export const DayNightLogo = ({ changeBackground, theme }) => {
  const currentColor =
    theme === colorTheme.light ? colorTheme.dark : colorTheme.light;

  return (
    <label className="DayNightLogo__label" title="Сменить тему">
      <button
        onClick={changeBackground}
        className="DayNightLogo__switch-theme"
      />
      <svg
        className="DayNightLogo__image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 114.39 114.39"
      >
        <path
          fill={currentColor}
          d="M56.69,0a56.7,56.7,0,1,0,56.7,56.69A56.69,56.69,0,0,0,56.69,0Zm0,110.55V2.83a53.86,53.86,0,0,1,0,107.72Z"
          transform="translate(0.5 0.5)"
        />
      </svg>
    </label>
  );
};
