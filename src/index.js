import React from 'react';
import {render} from "react-dom"; //Render method
import { BrowserRouter, Route, browserHistory } from 'react-router-dom' //Naviation functions
//Import our route options
import App from './App'
import {Home} from './components/home'
import {Login} from './components/login'
import './index.css';
render((
  //Render different routes
  <BrowserRouter history ={browserHistory} >
    <div>
      <Route exact path={"/"} component={App} />
      <Route path={"/login"} component={Login}></Route>
      <Route path={"/home"} component={Home} />
    </div>
</BrowserRouter>),
  document.getElementById('root')
);
