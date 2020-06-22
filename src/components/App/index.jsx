import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Root } from '../Root/index';

const RootWithRouter = withRouter(Root);

const theme = {
  light: '#fef6eb',
  dark: '#1C1D25'
};

export class App extends Component {
  
  state = {theme: theme.dark};

  changeBackground = () => {
    if (this.state.theme === theme.light) {
      this.setState({ theme: theme.dark });
    } else {
      this.setState({ theme: theme.light });
    }
  }

  render() {
    return (
      <div style={{ background: this.state.theme }} className="App">
      <Router>
        <RootWithRouter changeBackground={ this.changeBackground } theme={ this.state.theme } />
      </Router>
    </div>  
  )
  }
} 

