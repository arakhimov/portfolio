import React from 'react';
import './styles.css';
import { Button } from '../Button/index';

const projects = {
  chat_messenger: {
    urlLocal: require('../../images/chat_messenger.png'),
    header: 'Chat Messenger',
    description: `Учебный проект Яндекс.Практикум.
                  В проекте разрабатывается приложение чат-мессенждер.
                  Приложение выполнено на React с типизацией TypeScript по принципу SPA. 
                  Для переходов между компонентами используется React Router.
                  Использовались технологии: JS, CSS, HTML, React, TS, GIT.`,
    url: 'https://arakhimov.github.io/middle.react.praktikum.yandex/'
  },
  news_analyzer: {
    urlLocal: require('../../images/news_analyzer.png'),
    header: 'News Analyzer',
    description: `Дипломный проект Яндекс.Практикум.
                  В проекте реализовано интерактивное приложение, предназначенное для анализа происходящих в мире событий.
                  В проекте использованы:
                  модульный код по БЭМ,
                  объектно-ориентированный код,
                  асинхронные GET и POST запросы к API,
                  обработка ошибок от API,
                  валидация данных формы,
                  передача данных от страницы к странице посредством localStorage,
                  сборка Webpack-ом,
                  Использовались технологии: JS, CSS, HTML, WebPack, GIT.`,
    url: 'https://arakhimov.github.io/news-analyzer/'
  },
  mesto: {
    urlLocal: require('../../images/mesto.png'),
    header: 'Mesto',
    description: `Учебный проект Яндекс.Практикум.
                  В проекте реализовано интерактивное приложение, предназначенное для размещения карточек на удаленном сервере.
                  В проекте использованы: принципы ООП, асинхронные запросы на сервер, валидация полей формы с использованием регулярных выражений, модульный принцип построения. Осуществлена сборка Webpack-ом.
                  Использовались технологии: JS, CSS, HTML, WebPack, GIT.`,
    url: 'https://arakhimov.github.io/mesto/'
  },
  travel_to_russia: {
    urlLocal: require('../../images/travel_to_russia.png'),
    header: 'Travel to Russia',
    description: `Учебный проект Яндекс.Практикум.
                  В проекте реализован одностораничный сайт, адаптированный под все виды устройств. 
                  Именование выполнено по системе БЭМ.
                  Использовались технологии: CSS, HTML, GIT.`,
    url: 'https://arakhimov.github.io/travel-to-russia/'
  }
};


export const Card = ({ name }) => {
  return (
    <div className="Card">
      <a target="_blanc" href={projects[name].url} className="Card__link">
        <div className="Card__hover-block">
          <div className="Card__left-column">
            <h1 className="Card__header">{projects[name].header}</h1>
            <Button name='Visit' />
          </div>
          <p className="Card__right-column">{projects[name].description}</p>
        </div>
        <img src={projects[name].urlLocal} alt="" className="Card__image" />
      </a>
    </div>
  );
}