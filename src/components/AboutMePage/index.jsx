import React from 'react';
import './styles.css';
import { AboutMe } from '../AboutMe/index';
import { Contacts } from '../Contacts/index';

export const AboutMePage = ({ theme }) => {

  const currentColor = theme === '#fef6eb' ? '#1c1d25' : '#fef6eb';

  return (
    <div className="AboutMePage">
      <AboutMe theme= { currentColor } />
      <Contacts theme={ currentColor } />
    </div>
  )
}