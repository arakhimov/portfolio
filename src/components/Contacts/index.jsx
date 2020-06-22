import React from 'react';
import './styles.css';
import { svgLogoSettings } from '../../constants/svgLogoSettings';

export const Contacts = ({ theme }) => {

  return(
    <div style={{ border: `1px solid ${ theme }` }} className="Contacts">
      <h2 style={{ color: theme }} className="Contacts__title">Контакты</h2>
      <h3 style={{ color: theme }} className="Contacts__subtitle">Для связи со мной испольльзуйте удобный для вас способ:</h3>
      <ul className="Contacts__list">
        <li style={{ color: theme }} className="Contacts__list-item">
          <svg className="Contacts__image" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.006 60.006">
            <path className="Contacts__image-path" fill={ theme } d={ svgLogoSettings['phone'] } />
          </svg>
          +7 977 480 58 45, +7 965 228 36 28
        </li>
        <li style={{ color: theme }} className="Contacts__list-item">
          <svg className="Contacts__image" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 493.332 493.332">
            <path className="Contacts__image-path" fill={ theme } d={ svgLogoSettings['email'] } />
          </svg>
          artemiirakhimov@yandex.ru
        </li>
        <li style={{ color: theme }} className="Contacts__list-item">
          <svg className="Contacts__image" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 418.135 418.135" >
            <path className="Contacts__image-path" fill={ theme } d={ svgLogoSettings['whatsapp']['path1'] } />
            <path className="Contacts__image-path" fill={ theme } d={ svgLogoSettings['whatsapp']['path2'] } />
          </svg>
          +7 965 228 36 28
        </li>
        <li style={{ color: theme }} className="Contacts__list-item">
          <svg className="Contacts__image" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
            <path className="Contacts__image-path" fill={ theme } d={ svgLogoSettings['telegram']['path1'] } />
            <path className="Contacts__image-path" fill={ theme } d={ svgLogoSettings['telegram']['path2'] } />
          </svg>
          +7 977 480 58 45
        </li>
      </ul>
      <a href="https://github.com/arakhimov" className="Contacts__link" target="_blanc">
        <svg className="Contacts__image" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 291.32 291.32">
          <path className="Contacts__image-path" d={ svgLogoSettings['github'] } />
        </svg>
        GitHub-репозиторий
      </a>
      <a href="https://www.codewars.com/users/Artem%20Rakhimov" className="Contacts__link" target="_blanc">
        <svg className="Contacts__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.09 157.14">
          <path className="Contacts__image-path" d={svgLogoSettings['codewars']} transform="translate(-0.93)" />
        </svg>
        Аккаунт CodeWars
      </a>
      <h3 style={{ color: theme }} className="Contacts__subtitle">
        Мое резюме можно скачать здесь:
        <a href="https://yadi.sk/i/NTe5j1AsU3-W3g" download target="_blanc" className="Contacts__link">&emsp;here@</a>
      </h3>
    </div>
  )
}