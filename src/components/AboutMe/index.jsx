import React from 'react';
import './styles.css';
import { svgLogoSettings } from '../../constants/svgLogoSettings';

export const AboutMe = ({ theme }) => {

  return(
    <div style={{ border: `1px solid ${ theme }` }} className="AboutMe">
        <h2 style={{ color: theme }} className="AboutMe__title">Обо мне</h2>
        <h3 style={{ color: theme }} className="AboutMe__subtitle">Front-End разработчик</h3>
        <p style={{ color: theme }} className="AboutMe__text">Меня зовут Артем Рахимов, мне 32 года и я - Junior Front-End разработчик. В 2019 году законичил 9-месячное обучение и получил диплом в 
          Яндекс.Практикум по направлению Front-End разработчик. Также прошел обучение по курсу middle Front-End, где под руководством менторов разрабатывалось приложение 
          на React по принципу SPA с использованием типизации TypeScript.
        </p>
        <p style={{ color: theme }} className="AboutMe__text">
          Используемые мною технологии: HTML, CSS, JS, Git, Webpack, React.
        </p>
        <div className="AboutMe__icon-container">
          <svg className="AboutMe__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1609.02 1820.38">
            <path className="AboutMe__icon-path" fill={ theme } d={ svgLogoSettings['html'] } />
          </svg>
          <svg className="AboutMe__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.58 64.48">
            <path className="AboutMe__icon-path" fill={ theme } d={  svgLogoSettings['css'] } />
          </svg>
          <svg className="AboutMe__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path className="AboutMe__icon-path" fill={ theme } d={ svgLogoSettings['js'] } />
          </svg>
          <svg className="AboutMe__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040.41 1040.39">
            <path className="AboutMe__icon-path" fill={ theme } d={ svgLogoSettings['git'] } transform="translate(-0.01 -9.83)" />
          </svg>
          <svg className="AboutMe__icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 2209.6 2500" >
            <path className="AboutMe__icon-path" fill={ theme } d={ svgLogoSettings['webpack'] } />
          </svg>
          <svg className="AboutMe__icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 2500 2246">
            <path className="AboutMe__icon-path" fill={ theme } d={ svgLogoSettings['react']['path1'] } />
            <path className="AboutMe__icon-path" fill={ theme } d={ svgLogoSettings['react']['path2'] } />
          </svg>
        </div>
      </div>
  )
}