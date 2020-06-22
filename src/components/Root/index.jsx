import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import { Logo } from '../Logo/index';
import { Nav } from '../Nav/index';
import { MainPage } from '../MainPage/index';
import { Portfolio } from '../Portfolio/index';  
import { AboutMePage } from '../AboutMePage/index'; 
import { DayNightLogo } from '../DayNightLogo/index';

export class Root extends Component {

  state = {
    menuVisibility: window.innerWidth < 600 ? true : false
  };

  changeVisibility = ( event ) => {
    if (event.target.classList.contains('Nav__logo') || event.target.classList.contains('Nav__logo-path')) {
      this.setState(state => ({ menuVisibility: !state.menuVisibility }));
    }
    if (!this.state.menuVisibility && window.innerWidth < 600) {
      this.setState(state => ({ menuVisibility: !state.menuVisibility }));
    }
  }

  updateDimensions = () => {
    this.setState({ menuVisibility: window.innerWidth < 600 ? true : false });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div onClick={ this.changeVisibility } className="Root">
        <header className="header">
          <Logo { ...this.props.history } />
          <div className="header__wrapper">
            <Nav menuVisibility={ this.state.menuVisibility } theme={ this.props.theme } />
            <DayNightLogo changeBackground={ this.props.changeBackground } theme={ this.props.theme } />
          </div>
        </header>
        <Switch>
          <Route exact path="/" render={ () => <MainPage { ...this.props.history } theme={ this.props.theme } /> } />
          <Route path="/about-me" render={ () => <AboutMePage theme={ this.props.theme } /> } />
          <Route path="/portfolio" component={ Portfolio }></Route>
        </Switch>
      </div>
    );
  }
}