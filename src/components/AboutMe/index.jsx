import React from "react";
import technologies from "../../constants/technologies";
import TechnologyCard from "../TechnologyCard";
import "./styles.css";

export const AboutMe = ({ theme }) => {
  return (
    <div style={{ border: `1px solid ${theme}` }} className="AboutMe">
      <h2 style={{ color: theme }} className="AboutMe__title">
        Обо мне
      </h2>
      <p style={{ color: theme }} className="AboutMe__text">
        Меня зовут Артем Рахимов, мне 34 года и я - Junior Frontend разработчик.
        В 2010 году я закончил Московский Государственный технический
        университет им. Н.Э.&nbsp;Баумана. Поработал инженером, логистиком,
        администратор WMS.
      </p>
      <p style={{ color: theme }} className="AboutMe__text">
        В 2021 году успешно законичил обучение и получил дипломы в HTML Academy
        по курсам: HTML и CSS. Профессиональная вёрстка сайтов и HTML и CSS.
        Адаптивная вёрстка и автоматизация. Благодаря этому я закрепил знания и
        навыки по созданию семантичной, кроссбраузерной и доступной верстки,
        адаптированной под все виды устройств. Изучил использование
        препроцессоров, адаптивную и ретиновую графику.
      </p>
      <p style={{ color: theme }} className="AboutMe__text">
        Далее продолжил обучение на курсе Junior Frontend Developer в школе
        Владилена Минина. В ходе данного курса закрепил знания по JavaScript в
        частности контекст, асинхронность, Event Loop, классы, ООП. Углубил
        знания по react: HOC, hooks, маршрутизация, контекст, оптимизация,
        REST-архитектура, state-management Redux. Изучил основы NodeJS, Express.
      </p>
      <p style={{ color: theme }} className="AboutMe__text">
        Используемые мною технологии: HTML, CSS, JS, Git, Webpack, React,
        NodeJS.
      </p>
      <div className="AboutMe__icon-container">
        {technologies.map(technology => (
          <TechnologyCard key={technology.name} theme={theme} {...technology} />
        ))}
      </div>
      <p style={{ color: theme }} className="AboutMe__text">
        В свободное время серьезно играю в настольный теннис, путешествую на
        автомобиле, решаю задачи на CodeWars.
      </p>
    </div>
  );
};
