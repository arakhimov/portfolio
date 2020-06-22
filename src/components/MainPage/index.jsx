import React, { Component } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/index';
import { AnimateLogo } from '../AnimateLogo/index';
import { HalfCircle } from '../Figures/HalfCircle/index';
import { Triangle } from '../Figures/Triangle/index';
import { Octagon } from '../Figures/Octagon/index';

const background = require('../../images/cover.jpg');
const backgroundDark = require('../../images/cover_dark.jpg');

export class MainPage extends Component {

  state = {
    currentPositionX: 0,
    currentPositionY: 0
  };

  getBackgroundImageSettings = (theme) => {
    return {
      backgroundImage: theme === '#fef6eb' ? `url(${background})` : `url(${backgroundDark})`,
      backgroundPosition: 'top right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: window.innerWidth < 1340 ? '45%'  : 'contain'
    }
  };

  handleMoveFigure = event => {
    this.setState({
      currentPositionX: event.clientX / 20,
      currentPositionY: event.clientY / 20
    });
  };

  getCurrentTheme = (theme) => {
    return {color: theme === '#fef6eb' ? '#1c1d25' : '#fef6eb'}
  };

  render() {

    let moveFigure = `translateX(${this.state.currentPositionX}px) translateY(${this.state.currentPositionY}px)`;

    return (
      <div className="MainPage">
        <div style={ this.getBackgroundImageSettings(this.props.theme)} onMouseMove={ this.handleMoveFigure } className="MainPage__development">
          <div className="MainPage__left-column">
            <h1 style={ this.getCurrentTheme(this.props.theme) } className="MainPage__title">Рахимов Артем</h1>
            <h2 style={ this.getCurrentTheme(this.props.theme) }className="MainPage__subtitle">Front-end Developer</h2>
            <Button {...this.props} theme={ this.props.theme } className="MainPage__button" name='About Me' />
          </div>
          <AnimateLogo />
          <NavLink to='/portfolio/projects/latest' className="MainPage__link">My works</NavLink>
          {/* геометрические фигуры */}
          <HalfCircle color='#a60000' options={{ top: '15%', left: '15%', transform: moveFigure }} />
          <HalfCircle color='#c9f600' options={{ top: '45%', left: '70%', transform: 'rotate(80deg) ' + moveFigure }} />
          <HalfCircle color='#e557af' options={{ top: '85%', left: '0%', transform: 'rotate(220deg) ' + moveFigure }} />
          <HalfCircle color='#ffd300' options={{ top: '5%', right: '0%', transform: 'rotate(120deg) ' + moveFigure }} />
          <Triangle color='#218359' options={{ top: '45%', right: '5%', transform: moveFigure }} />
          <Triangle color='#ffbf40' options={{ top: '25%', left: '45%', transform: 'rotate(20deg) ' + moveFigure }} />
          <Triangle color='#37b6ce' options={{ bottom: '25%', left: '30%', transform: 'rotate(40deg) ' + moveFigure }} />
          <Triangle color='#ffff40' options={{ top: '0%', left: '0%', transform: 'rotate(40deg)' + moveFigure }} />
          <Octagon color='#a62d00' options={{ top: '0%', left: '30%', transform: moveFigure }} />
          <Octagon color='#3914af' options={{ top: '60%', left: '60%', transform: 'rotate(20deg) ' + moveFigure }} />
          <Octagon color='#85004b' options={{ top: '12%', left: '64%', transform: 'rotate(40deg) ' + moveFigure }} />
          <Octagon color='#a64800' options={{ bottom: '0%', right: '5%', transform: 'rotate(10deg) ' + moveFigure }} />
        </div>
      </div>
    );
  }
  
}