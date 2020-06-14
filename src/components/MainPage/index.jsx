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
        <h1 style={{ color: props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' }} 
            className="MainPage__title">Рахимов Артем
        </h1>
        <h2 style={{ color: props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' }}
            className="MainPage__subtitle">Front-end Developer
        </h2>
        <Button {...props} theme={ props.theme } className="MainPage__button" name='About Me' />
      </div>
      
      <Portfolio />
    </div>
  );
}