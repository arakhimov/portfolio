import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AboutMePage } from "../AboutMePage/index";
import { DayNightLogo } from "../DayNightLogo/index";
import { Logo } from "../Logo/index";
import MainPage from "../MainPage/index";
import { Nav } from "../Nav/index";
import Projects from "../Projects/index";
import "./styles.css";

const Root = ({ changeBackground, theme }) => {
  const [menuVisibility, setVisibility] = useState(
    window.innerWidth < 600 ? true : false
  );

  const handlechangeVisibility = event => {
    if (window.innerWidth > 600) {
      setVisibility(false);
      return;
    }
    if (event.target.closest(".Nav__logo")) {
      setVisibility(prevState => !prevState);
      return;
    }
    setVisibility(true);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setVisibility(() => (window.innerWidth < 600 ? true : false));
    });
  }, []);

  return (
    <div className="Root">
      <header className="header">
        <Logo />
        <div className="header__wrapper">
          <Nav
            menuVisibility={menuVisibility}
            theme={theme}
            changeVisibility={handlechangeVisibility}
          />
          <DayNightLogo changeBackground={changeBackground} theme={theme} />
        </div>
      </header>
      <Switch>
        <Route
          exact
          path="/portfolio"
          render={() => <MainPage theme={theme} />}
        />
        <Route
          path="/portfolio/about-me"
          render={() => <AboutMePage theme={theme} />}
        />
        <Route path="/portfolio/projects" component={Projects}></Route>
      </Switch>
    </div>
  );
};

export default Root;
