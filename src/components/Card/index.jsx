import React from 'react';
import './styles.css';
import { Button } from '../Button/index';
import { projectsDescription } from '../../constants/projectsDescription';

const projectsBackground = {
  chat_messenger: require('../../images/chat_messenger.png'),
  news_analyzer: require('../../images/news_analyzer.png'),
  mesto: require('../../images/mesto.png'),
  travel_to_russia: require('../../images/travel_to_russia.png'),
  form_validation: require('../../images/form_validation.png'),
  learn_to_learn: require('../../images/learn_to_learn.png'),
  onpoin_test_task: require('../../images/onpoint_test_task.png'),
};

export const Card = ({ name }) => {
  
  return (
    <div className="Card">
      <a target="_blanc" href={ projectsDescription[name].url } className="Card__link">
        <div className="Card__hover-block">
          <div className="Card__left-column">
            <h1 className="Card__title">{ projectsDescription[name].header }</h1>
            <Button name='Visit' />
          </div>
          <p className="Card__right-column">{ projectsDescription[name].description }</p>
        </div>
        <img src={ projectsBackground[name] } alt="" className="Card__image" />
      </a>
    </div>
  );
}