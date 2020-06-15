import React from 'react';
import './styles.css';
import { Card } from '../Card/index';

const projectsName = ['chat_messenger', 'news_analyzer', 'mesto', 'travel_to_russia'];

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <ul className="Portfolio__list">
        <li className="Portfolio__list-item">All</li>
        <li className="Portfolio__list-item">CSS</li>
        <li className="Portfolio__list-item">JS</li>
        <li className="Portfolio__list-item">React</li>
        <li className="Portfolio__list-item">Latest</li>
      </ul>
      {projectsName.map(project => <Card name={ project } key= { project } />)}
    </div>
  );
}