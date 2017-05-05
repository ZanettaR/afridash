import React from 'react';
import {render} from "react-dom";
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'
import App from './App'
import {Home} from './components/home'
import {Login} from './components/login'
import './index.css';
render((
  <BrowserRouter history ={browserHistory} >
    <div>
      <Route exact path={"/"} component={Login} />
      <Route path={"/home"} component={App} />
    </div>
</BrowserRouter>),
  document.getElementById('root')
);
