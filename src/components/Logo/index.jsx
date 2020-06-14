import React from 'react';
import './styles.css';

export const Logo = ({ history, theme }) => {

  const handleClick = () => history.push('/');

  return (
    <div onClick={ handleClick } className="Logo">
      <div className="Logo__image-wrapper" />
      <p style={{ color: theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' }} className="Logo__author">AR</p>
    </div>
  );
}