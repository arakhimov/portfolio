import React from 'react';
import '../styles.css';

export const Octagon = ({ color, options }) => {
  
  return(
    <svg style={ options } className="Figure" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.39 113.39">
      <path fill={ color } d="M80.2,0h-47L0,33.2v47l33.2,33.2h47l33.2-33.2v-47L80.2,0z M96.4,71.4L73.1,94.6H40.3L17,71.4V38.5l23.3-23.3h32.9
	l23.3,23.3V71.4z"/>
    </svg>
  )
}