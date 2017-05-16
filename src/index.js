import React from 'react';
import {render} from "react-dom"; //Render method

import { BrowserRouter, Route, browserHistory,Switch,Router } from 'react-router-dom' //Naviation functions
//Import our route options
import App from './App'
import {Home} from './components/home'
import {Login} from './components/login'
import {AboutMe} from './components/aboutme'
import {Profile} from './components/profile'
import {Header} from './components/header'
import {Tasks} from './components/tasks'
import {Registered_classes} from './components/registered_classes'

import './index.css';
render((
  //Render different routes
  <BrowserRouter history ={browserHistory} >
    <div>
      <Route path={"/login"} component={Login}></Route>
      <Switch>
      <Header />
      <Route exact path={"/"} component={App} />
      <Route path={'/home'} component={Home} />
      <Route path={"/aboutme"} component={AboutMe}/>
      <Route path={"/profile"} component={Profile}/>
      <Route path={'/tasks'} component={Tasks}/>
      <Route path={'/registered_classes'} component={Registered_classes}/>
      </Switch>
    </div>
</BrowserRouter>),
  document.getElementById('root')
);
