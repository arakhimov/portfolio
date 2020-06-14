import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import { Logo } from '../Logo/index';
import { Nav } from '../Nav/index';
import { MainPage } from '../MainPage/index';
import { Portfolio } from '../Portfolio/index';   

export const Root = ({ history, changeBackground, theme }) => {
  return (
    <div className="Root">
      <header className="header">
        <Logo { ...history } theme={ theme } />
        <Nav changeBackground={ changeBackground } />
      </header>
      <Switch>
        <Route exact path="/" render = { () => <MainPage {...history } theme={ theme } />} />
        <Route path="/about-me"></Route>
        <Route path="/portfolio" component = { Portfolio }></Route>
        <Route path="/contacts"></Route>
      </Switch>
    </div>
  );
}