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
import {Advising} from './components/advising'
import {Grades} from './components/grades'
import {Roster} from './components/roster'
import {Calendar} from './components/calendar'
import {Friends} from './components/friends'
import {Messages} from './components/messages'
import {Notifications} from './components/notifications'

import {Registered_classes} from './components/registered_classes'

import './index.css';
render((
  //Render different routes
  <BrowserRouter history ={browserHistory} >
    <div>
      <Header />
      <Route path={"/login"} component={Login}></Route>
      <Switch>
      <Route exact path={"/"} component={App} />
      <Route path={'/home'} component={Home} />
      <Route path={"/aboutme"} component={AboutMe}/>
      <Route path={"/profile"} component={Profile}/>
      <Route path={'/tasks'} component={Tasks}/>
      <Route path={'/advising'} component={Advising}/>
      <Route path={'/grades'} component={Grades}/>
      <Route path={'/roster'} component={Roster}/>
      <Route path={'/calendar'} component={Calendar}/>
      <Route path={'/registered_classes'} component={Registered_classes}/>
      <Route path={'/friends'} component={Friends}/>
      <Route path={'/messages'} component={Messages}/>
      <Route path={'/notifications'} component={Notifications}/>
      </Switch>
    </div>
</BrowserRouter>),
  document.getElementById('root')
);
