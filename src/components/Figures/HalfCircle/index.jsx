import React from 'react';
import '../styles.css';

export const HalfCircle = ({ color, options }) => {

  return(
    <svg style={ options } className="Figure" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.69 28.35">
      <path fill={ color } d="M48,0c-0.8,11.9-9.3,19.8-19.6,19.8C18,19.8,9.5,11.9,8.5,0H0c0,15.7,12.7,28.4,28.3,28.4C44,28.4,56.7,15.7,56.7,0 c0,0,0,0,0,0H48z"/>
    </svg>
  )
}