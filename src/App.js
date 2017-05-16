import React, { Component } from 'react';
import {browserHistory } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {Home} from './components/home'
class App extends Component {
  render() {
    return (
      <div>
    <Home />
    </div>
    );
  }
}

export default App;
