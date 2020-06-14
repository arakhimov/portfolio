import React from 'react';
import './styles.css';
import { Card } from '../Card/index';

const projectsName = ['chat_messenger', 'news_analyzer', 'mesto', 'travel_to_russia'];

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      {projectsName.map(project => <Card name={ project } key= { project } />)}
    </div>
  );
}