import React from 'react';
import './styles.css';
import { Portfolio } from '../Portfolio/index';
import { Button } from '../Button/index';

const background = require('../../images/cover.jpg');
const backgroundDark = require('../../images/cover_dark.jpg');

export const MainPage = (props) => {
  return (
    <div className="MainPage">
      <div style={{ backgroundImage: props.theme === '#fef6eb' ? `url(${background})` : `url(${backgroundDark})`,
      backgroundPosition: 'top right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
     }} className="MainPage__development">
        {/* заголовок */}
        <h1 style={{ color: props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' }} 
            className="MainPage__title">Рахимов Артем
        </h1>
        {/* подзаголовок */}
        <h2 style={{ color: props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' }}
            className="MainPage__subtitle">Front-end Developer
        </h2>
        {/* кнопка обо мне */}
        <Button {...props} theme={ props.theme } className="MainPage__button" name='About Me' />
        {/* ссылка на работы */}
        <div className="MainPage__link-wrapper">
          <h3 style={{ color: props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' }} className="MainPage__link">Works</h3>
          <svg className="MainPage__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
            <path fill={ props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' } 
                  d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607" />
          </svg>
        </div>
        {/* геометрические фигуры */}
      </div>
      <h2 className="MainPage__anchor">Latest Works</h2>
      <Portfolio />
    </div>
  );
}