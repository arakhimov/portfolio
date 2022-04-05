import React from "react";
import { colorTheme } from "../../constants/colorTheme";
import { AboutMe } from "../AboutMe/index";
import { Contacts } from "../Contacts/index";
import "./styles.css";

export const AboutMePage = ({ theme }) => {
  const currentColor =
    theme === colorTheme.light ? colorTheme.dark : colorTheme.light;

  return (
    <div className="AboutMePage">
      <AboutMe theme={currentColor} />
      <Contacts theme={currentColor} />
    </div>
  );
};
