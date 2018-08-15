import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './App.css';
import Router from './Router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router />
      </div>
    );
  }
}

export default hot(module)(App);
