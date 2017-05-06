import React, { Component } from 'react';
import {browserHistory } from 'react-router-dom'
import {Header} from './components/header'
import logo from './logo.svg';
import './App.css';
import {Home} from './components/home'
class App extends Component {
  render() {
    return (
      <div>
    <Header />
    <div id="page-wrapper">
    <Home />
    </div>
    </div>
    );
  }
}

export default App;
