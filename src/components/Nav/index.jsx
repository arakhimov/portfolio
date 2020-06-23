import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

export const Nav = (props) => {

  const theme = props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb'

  const imageStyles = { 
    display: `${props.menuVisibility? 'block' : 'none'} `
  };
  
  const wrapperStyles = { 
    display: `${props.menuVisibility? 'none' : 'flex'}`,
  };

  return (
    <nav className="Nav">
      <svg style={ imageStyles } className="Nav__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.21 72.17">
        <rect className="Nav__logo-path" fill={ theme } x="0.5" y="0.5" width="99.21" height="14.17" rx="5.1"/>
        <rect className="Nav__logo-path" fill={ theme } x="0.5" y="29" width="99.21" height="14.17" rx="5.1"/>
        <rect className="Nav__logo-path" fill={ theme } x="0.5" y="57.5" width="99.21" height="14.17" rx="5.1"/>
      </svg>
      <div style={ wrapperStyles } className="Nav__wrapper">
        <NavLink className="Nav__link" exact to="/portfolio" activeClassName="Nav__link Nav__link_active">Главная</NavLink>
        <NavLink className="Nav__link" to="/portfolio/about-me" activeClassName="Nav__link Nav__link_active">Обо мне</NavLink>
        <NavLink className="Nav__link" to="/portfolio/projects" activeClassName="Nav__link Nav__link_active">Портфолио</NavLink>
      </div>
    </nav>
  );
  
}