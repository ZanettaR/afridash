import React from 'react';
import {render} from "react-dom"; //Render method

import { BrowserRouter, Route, hashHistory,Switch,Router } from 'react-router-dom' //Naviation functions
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
import {Search} from './components/search'
import {AddClass} from './components/addClass'
import {Registration} from './components/registration'
import {UserGrades} from './components/userGrades'
import {TermGrades} from './components/termGrades'
import {Transcript} from './components/transcript'
import RGenerator from './components/generator'
import {Resume} from './components/resume'
import Evaluation from './components/evaluation'
import {Grading} from './components/grading'
import {Attendance} from './components/attendance'
import {Forums} from './components/forums'
import {TestGrades} from './components/testgrades'
import {QuizGrades} from './components/quizgrades'
import {MidGrades} from './components/midgrades'
import {AssignmentGrades} from './components/assignmentgrades'
import {FinalGrades} from './components/finalgrades'
import {Courses} from './components/courses'
import {AddAssignment} from './components/addassignment'
import {StartAssignment} from './components/startassignment'
import {ViewAssignment} from './components/viewassignment'
import {AddQuiz} from './components/addquiz'
import {StartQuiz} from './components/startquiz'
import {ViewQuiz} from './components/viewquiz'
import {AddTest} from './components/addtest'
import {StartTest} from './components/starttest'
import {ViewTest} from './components/viewtest'
import {AddMid} from './components/addmid'
import {StartMid} from './components/startmid'
import {ViewMid} from './components/viewmid'
import {AddFinals} from './components/addfinals'
import {StartFinals} from './components/startfinals'
import {ViewFinals} from './components/viewfinals'
import {Forgot} from './components/forgotPassword'
import SignUp from './components/signup'
import './index.css';
render((
  //Render different routes

  <BrowserRouter history ={hashHistory} >
    <div>
      <Switch>
      <Route path={"/reset"} component={Forgot} />
      <Route path={"/login"} component={Login}></Route>
      <Route path={"/signup"} component={SignUp} />
      <Header >
      <Route exact path={"/"} component={App} />
      <Route exact path={'/home'} component={Home} />
      <Route path={"/aboutme"} component={AboutMe}/>
      <Route path={"/profile"} component={Profile}/>
      <Route path={'/tasks'} component={Tasks}/>
      <Route path={'/advising'} component={Advising}/>
      <Route path={'/grades'} component={Grades}/>
      <Route path={'/roster'} component={Roster}/>
      <Route path={'/calendar'} component={Calendar}/>
      <Route path={'/registered'} component={Registered_classes}/>
      <Route path={'/friends'} component={Friends}/>
      <Route path={'/messages'} component={Messages}/>
      <Route path={'/notifications'} component={Notifications}/>
      <Route path={'/search'} component={Search}/>
      <Route path={'/add'} component={AddClass}/>
      <Route path={'/mygrades'} component={UserGrades}/>
      <Route path={'/termgrades'} component={TermGrades}/>
      <Route path={'/transcript'} component={Transcript}/>
      <Route path={'/generator'} component={RGenerator} />
      <Route path={'/resume'} component={Resume} />
      <Route path={'/evaluation'} component={Evaluation} />
      <Route path={'/grading/:id'} component={Grading} />
      <Route path={'/attendance'} component={Attendance} />
      <Route path={'/registration'} component={Registration}/>
      <Route path={'/forums'} component={Forums}/>
      <Route path={'/test/grades'} component={TestGrades}/>
      <Route path={'/quiz/grades'} component={QuizGrades}/>
      <Route path={'/mid/grades'} component={MidGrades}/>
      <Route path={'/assignment/grades'} component={AssignmentGrades}/>
      <Route path={'/final/grades'} component={FinalGrades}/>
      <Route path={'/courses'} component={Courses}/>
      <Route path={'/assignment/add'} component={AddAssignment}/>
      <Route path={'/assignment/start'} component={StartAssignment}/>
      <Route path={'/assignment/view'} component={ViewAssignment}/>
      <Route path={'/quiz/add'} component={AddQuiz}/>
      <Route path={'/quiz/start'} component={StartQuiz}/>
      <Route path={'/quiz/view'} component={ViewQuiz}/>
      <Route path={'/test/add'} component={AddTest}/>
      <Route path={'/test/start'} component={StartTest}/>
      <Route path={'/test/view'} component={ViewTest}/>
      <Route path={'/mid/add'} component={AddMid}/>
      <Route path={'/mid/start'} component={StartMid}/>
      <Route path={'/mid/view'} component={ViewMid}/>
      <Route path={'/finals/add'} component={AddFinals}/>
      <Route path={'/finals/start'} component={StartFinals}/>
      <Route path={'/finals/view'} component={ViewFinals}/>
    </Header>
      </Switch>
    </div>
</BrowserRouter>),
  document.getElementById('root')
);
