import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export const Nav = (props) => {

  const changeBackground = () => props.changeBackground();

  return (
    <nav className="Nav">
      <NavLink className="Nav__link" exact to="/" activeClassName="Nav__link Nav__link_active">Главная</NavLink>
      <NavLink className="Nav__link" to="/about-me" activeClassName="Nav__link Nav__link_active">Обо мне</NavLink>
      <NavLink className="Nav__link" to="/portfolio" activeClassName="Nav__link Nav__link_active">Портфолио</NavLink>
      <NavLink className="Nav__link" to="/contacts" activeClassName="Nav__link Nav__link_active">Контакты</NavLink>
      <label className="Nav__label" >
        <button onClick={ changeBackground } className="Nav__switch-theme" />
      </label>
    </nav>
  );
  
}