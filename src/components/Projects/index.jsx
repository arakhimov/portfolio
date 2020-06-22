import React, { Component } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { Card } from '../Card/index';
import { projectsDescription } from '../../constants/projectsDescription';

export class Projects extends Component {

  state = {
    projectsType: 'Latest'
  };

  handleClick = event => {
    this.setState({projectsType: event.target.innerHTML});
  }

  render() {

    return (
      <div style={{ color: this.props.theme === '#fef6eb' ? '#1c1d25' : '#fef6eb' }} className="Portfolio">
        <nav className="Portfolio__nav">
          <NavLink 
            onClick={ this.handleClick } 
            className="Nav__link" to={ "/portfolio/projects/latest" } 
            activeClassName="Nav__link Nav__link_active">Latest
          </NavLink>
          <NavLink 
            onClick={ this.handleClick } 
            className="Nav__link" to={ "/portfolio/projects/css" } 
            activeClassName="Nav__link Nav__link_active">CSS
          </NavLink>
          <NavLink 
            onClick={ this.handleClick } 
            className="Nav__link" to={ "/portfolio/projects/js" } 
            activeClassName="Nav__link Nav__link_active">JS
          </NavLink>
          <NavLink 
            onClick={ this.handleClick } 
            className="Nav__link" to={ "/portfolio/projects/react" } 
            activeClassName="Nav__link Nav__link_active">React
          </NavLink>
          <NavLink 
            onClick={ this.handleClick } 
            className="Nav__link" to={ "/portfolio/projects/all" } 
            activeClassName="Nav__link Nav__link_active">All
          </NavLink>
        </nav>
        {Object.entries(projectsDescription).filter( ([key, value]) => value.type.includes(this.state.projectsType)).map( ([key, value]) => <Card name={ key } key= { key } />)}
      </div>
    );
  }
}