import React from 'react';
import '../styles.css';

export const Triangle = ({ color, options }) => {
  return(
    <svg style={ options } className="Figure" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.04 73.7">
      <path fill={ color } d="M42.5,0L0,73.7h85L42.5,0z M42.5,22.3l22.7,39.7H19.8L42.5,22.3z"/>
    </svg>
  )
}