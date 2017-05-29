import React, {Component} from 'react'
import {BrowserHistory} from 'react-router-dom'
import { Link,Redirect } from 'react-router-dom'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
import logo from './images/logo.png'
import './css/style.css'
import './css/font-awesome.min.css'
import './css/animate.css'
import './css/all.css'
import './css/main.css'
import './css/style-responsive.css'
import './css/zabuto_calendar.min.css'
import './css/pace.css'
import './css/jquery.news-ticker.css'
import './css/newStyles.css'
import './css/jquery_notification.css'
import './css/simplelightbox.min.css'
import './css/todo.css'
import './css/hopscotch.min.css'
import './css/mikes-modal.css'
import './css/emojionearea.min.css'
export class Header extends Component {
  componentDidMount () {
    /*
    <script src="script/jquery.flot.categories.js"></script>
    <script src="script/jquery.flot.pie.js"></script>
    <script src="script/jquery.flot.tooltip.js"></script>
    <script src="script/jquery.flot.resize.js"></script>
    <script src="script/jquery.flot.fillbetween.js"></script>
    <script src="script/jquery.flot.stack.js"></script>
    */
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/jquery.flot.js";    // use this for linked script
    document.body.appendChild(script);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/jquery.news-ticker.js";    // use this for linked script
    document.body.appendChild(script);


    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/icheck.min.js";    // use this for linked script
    document.body.appendChild(script);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/jquery.cookie.js";    // use this for linked script
    document.body.appendChild(script);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/html5shiv.js";    // use this for linked script
    document.body.appendChild(script);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/jquery.form.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/jquery-migrate-1.2.1.min.js";    // use this for linked script
    document.body.appendChild(s);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/main.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/jquery-ui.js";    // use this for linked script
    document.body.appendChild(s);
    //New section
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/jquery.flot.spline.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/bootstrap.min.js";    // use this for linked script
    document.body.appendChild(s);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/bootstrap-hover-dropdown.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/jquery.menu.js";    // use this for linked script
    document.body.appendChild(s);

    //New
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/jquery.metisMenu.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/custom.min.js";    // use this for linked script
    document.body.appendChild(s);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/respond.min.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/jquery.slimscroll.js";    // use this for linked script
    document.body.appendChild(s);
    //New section
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/jquery.menu.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/responsive-tabs.js";    // use this for linked script
    document.body.appendChild(s);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/pace.min.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.setAttribute('id', 'addedScript');
    s.src   = "/script/holder.js";    // use this for linked script
    document.body.appendChild(s);

    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.setAttribute('id', 'addedScript');
    script.src   = "/script/index.js";    // use this for linked script
    document.body.appendChild(script);

    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.src   = "/script/jquery_notification_v.1.js";    // use this for linked script
    document.body.appendChild(s);
  }
  render() {
    return (
      <div>
       <HeaderContent />
       {this.props.children}
     </div>
    )
  }
}
 class HeaderContent extends Component {
   constructor (props){
     super(props)
     this.state = {
       loggedIn:true,
       username:'',
       profilePicture:'none',
     }
     //Gives access to currentUser
     firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
   }
   handleUser (user) {
      if (user) {
        this.setState({username:user.displayName, profilePicture:user.photoURL})
      }
   }
   logOUT() {
   firebase.auth().signOut().then(function() {
   // Sign-out successful.
 }).catch(function(error) {
   // An error happened.
 });
 this.setState({loggedIn:false})
   }
  render(){
    return (
      <div>
          <a id="totop" href="#"><i className="fa fa-angle-up"></i></a>
          <div style={{marginBottom:50}}></div>
          <div id="header-topbar-option-demo" className="page-header-topbar">
              <nav id="topbar" role="navigation" data-step="3" className="navbar navbar-default navbar-fixed-top">
              <div className="navbar-header">
                  <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                  <a id="logo" href="index.php" className="navbar-brand">
                  <span className="fa fa-rocket"></span>
                  <span className="logo-text"><img style={{width:180,height:50,marginTop:-20}} alt="Afri-dash Logo" src={logo}/></span>
                  <span style={{display:'none'}} className="logo-text-icon">µ</span></a>
                  </div>
              <div id="TopToggleHead" className="topbar-main"><a id="menu-toggle" href="#" className="hidden-xs"><i className="fa fa-bars"></i></a>
                  <form id="topbar-search" action="" method="" className="hidden-sm hidden-xs" style={{marginTop:-20}}>
                      <div id="SearchSite" className="input-icon right text-white"><a href="#"><i className="fa fa-search"></i></a><input type="text" placeholder="Search here..." className="search form-control text-white" id="searchbox"/><div id="display">
                      </div></div>
                  </form>
    <ul className="nav navbar navbar-top-links navbar-right mbn">
      <li className="dropdown">
        <a className="dropdown-toggle" data-hover="dropdown" href="#">
            <i className="fa fa-bell fa-users"></i>  <i className="fa fa-caret-down"></i>
        </a>
        <ul className="dropdown-menu dropdown-alerts sub4">
            <li>
              <Link to="/profile">
                    <div>
                        <span><img src={this.state.profilePicture} style={{width:20,height:20, borderRadius:10}} /></span> Richard Igbiriki Added You
                        <div style={{paddingLeft:5}}>
                          <span className="pull-right text-muted small">4 minutes ago</span>
                        </div>
                    </div>
              </Link>
            </li>
            <li className="divider"></li>
            <li>
                <a href="#">
                    <div>
                        <span><img src={this.state.profilePicture} style={{width:20,height:20, borderRadius:10}} /></span> 3 New Followers
                        <span className="pull-right text-muted small">12 minutes ago</span>
                    </div>
                </a>
            </li>
            <li className="divider"></li>
            <li>
                <a href="#">
                    <div>
                        <span><img src={this.state.profilePicture} style={{width:20,height:20, borderRadius:10}} /></span> Accepted Friend Request
                        <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                </a>
            </li>
            <li className="divider"></li>
            <li>
                <Link className="text-center" to="/friends">
                    <strong>See All Notifications</strong>
                    <i className="fa fa-angle-right"></i>
                </Link>
            </li>
        </ul>
      </li>
      <li className="dropdown">
        <a className="dropdown-toggle" data-hover="dropdown" href="#">
            <i className="fa fa-bell fa-fw"></i>  <i className="fa fa-caret-down"></i>
        </a>
        <ul className="dropdown-menu dropdown-alerts sub4">
            <li>
                <a href="#">
                    <div>
                        <span><img src={this.state.profilePicture} style={{width:20,height:20, borderRadius:10}} /></span> New Comment
                        <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                </a>
            </li>
            <li className="divider"></li>
            <li>
                <a href="#">
                    <div>
                        <span><img src={this.state.profilePicture} style={{width:20,height:20, borderRadius:10}} /></span> 3 New Followers
                        <span className="pull-right text-muted small">12 minutes ago</span>
                    </div>
                </a>
            </li>
            <li className="divider"></li>
            <li>
                <a href="#">
                    <div>
                        <span><img src={this.state.profilePicture} style={{width:20,height:20, borderRadius:10}} /></span> Server Rebooted
                        <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                </a>
            </li>
            <li className="divider"></li>
            <li>
                <Link className="text-center" to="/notifications">
                    <strong>See All Notifications</strong>
                    <i className="fa fa-angle-right"></i>
                </Link>
            </li>
        </ul>
    </li>
    <li className="dropdown">
        <a className="dropdown-toggle" data-hover="dropdown" href="#">
        <i className="fa fa-envelope fa-fw"></i>  <i className="fa fa-caret-down"></i>
        </a>
        <ul className="dropdown-menu dropdown-messages sub2">
        <li>
        <a href="#">
           <div>
               <span><img src={this.state.profilePicture} style={{width:20,height:20, borderRadius:10}} /></span>&nbsp;
                <strong style={{marginTop:10}}>John Smith</strong>
               <span className="pull-right text-muted">
                   <em>Yesterday</em>
               </span>
           </div>
           <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
        </a>
        </li>
        <li className="divider"></li>
        <li>
        <a href="#">
           <div>
               <strong>John Smith</strong>
               <span className="pull-right text-muted">
                   <em>Yesterday</em>
               </span>
           </div>
           <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
        </a>
        </li>
        <li className="divider"></li>
        <li>
        <a href="#">
           <div>
               <strong>John Smith</strong>
               <span className="pull-right text-muted">
                   <em>Yesterday</em>
               </span>
           </div>
           <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
        </a>
        </li>
        <li className="divider"></li>
        <li>
        <Link className="text-center" to="/messages">
           <strong>Read All Messages</strong>
           <i className="fa fa-angle-right"></i>
        </Link>
        </li>
        </ul>
  </li>
    <li className="dropdown">
      <a className="dropdown-toggle" data-hover="dropdown" href="#">
          <i className="fa fa-tasks fa-fw"></i>  <i className="fa fa-caret-down"></i>
      </a>
      <ul className="dropdown-menu dropdown-tasks sub3">
          <li>
              <a href="#">
                  <div>
                      <p>
                          <strong>Task 1</strong>
                          <span className="pull-right text-muted">40% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:40}}>
                              <span className="sr-only">40% Complete (success)</span>
                          </div>
                      </div>
                  </div>
              </a>
          </li>
          <li className="divider"></li>
          <li>
              <a href="#">
                  <div>
                      <p>
                          <strong>Task 2</strong>
                          <span className="pull-right text-muted">20% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:20}}>
                              <span className="sr-only">20% Complete</span>
                          </div>
                      </div>
                  </div>
              </a>
          </li>
          <li className="divider"></li>
          <li>
              <a href="#">
                  <div>
                      <p>
                          <strong>Task 3</strong>
                          <span className="pull-right text-muted">60% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:60}}>
                              <span className="sr-only">60% Complete (warning)</span>
                          </div>
                      </div>
                  </div>
              </a>
          </li>
          <li className="divider"></li>
          <li>
              <a href="#">
                  <div>
                      <p>
                          <strong>Task 4</strong>
                          <span className="pull-right text-muted">80% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:80}}>
                              <span className="sr-only">80% Complete (danger)</span>
                          </div>
                      </div>
                  </div>
              </a>
          </li>
          <li className="divider"></li>
          <li>
              <Link className="text-center" to="/tasks">
                  <strong>See All Tasks</strong>
                  <i className="fa fa-angle-right"></i>
              </Link>
          </li>
      </ul>
  </li>
      <li id="adakaprofile" className="dropdown topbar-user"><a data-hover="dropdown" href="#" className="dropdown-toggle">
          <img src={this.state.profilePicture} style={{width:25,height:25, borderRadius:12.5}} /><span className="hidden-xs">{this.state.username}</span>&nbsp;<span className="caret"></span></a>
          <ul className="dropdown-menu dropdown-user pull-right">
              <li><Link to="/aboutme"><i className="fa fa-users"></i>My Profile</Link></li>
              <li><Link to="/profile"><i className="fa fa-user"></i>My Wall</Link></li>
              <li><Link to="/tasks"><i className="fa fa-tasks"></i>My Tasks</Link></li>
              <li><Link to="/registered_classes"><i className="fa fa-book"></i>My Classes</Link></li>
              <li className="divider"></li>
              <li ><a type="button" href="" onClick={()=>this.logOUT()}><i className="fa fa-key"></i>Log Out</a></li>
          </ul>
      </li>
       <li id="topbar-chat" className="hidden-xs">
         <a href="javascript:void(0)" data-step="4" data-intro="&lt;b&gt;Form chat&lt;/b&gt; keep you connecting with other coworker" data-position="left" className="btn-chat">
         <i className="fa fa-comments"></i><span className="badge badge-info">3</span></a>
       </li>
    </ul>
    </div>
    </nav>
  </div>
          <div id="wrapper">
              <nav id="sidebar" role="navigation" data-step="2" data-intro="Template has &lt;b&gt;many navigation styles&lt;/b&gt;"
                  data-position="right" className="navbar-default navbar-static-side">
              <div className="sidebar-collapse menu-scroll">
                  <ul id="side-menu" className="nav">
                       <div className="clearfix"></div>
                      <li id ="panoramicview" className="active"><Link to="/"><i className="fa fa-tachometer fa-fw">
                          <div className="icon-bg bg-orange"></div>
                      </i><span className="menu-title">Dashboard</span></Link></li>
                              <li id="futureplan"><Link to="/advising"><i className="fa fa-graduation-cap fa-fw">
                          <div className="icon-bg bg-pink"></div>
                      </i><span className="menu-title">Virtual Advisor</span></Link>
                      </li>
                       <li id="ikulabs"><a target="_blank" href="http://resourcenet.afri-dash.com"><i className="fa fa-suitcase" aria-hidden="true"></i><span className="menu-title">ResourceNet</span></a>
                      </li>
                      <li id="pereforums"><a href="#"><i className="fa fa-comments fa-fw">
                          <div className="icon-bg bg-pink"></div>
                      </i><span className="menu-title">Forums</span><span className="fa arrow"></span></a>
                          <ul className="nav nav-second-level scroll-forums">  </ul>
                      </li>
                      <li id="yingifriends"><a href="#"><i className="fa fa-users fa-fw">
                          <div className="icon-bg bg-pink"></div>
                      </i><span className="menu-title">Friends</span><span className="fa arrow"></span></a>
                          <ul className="nav nav-second-level scroll-forums"></ul>
                      </li>
                      <li id="bayelsagrade"><Link to="/grades"><i className="fa fa-graduation-cap fa-fw">
                          <div className="icon-bg bg-pink"></div>
                      </i><span className="menu-title">Grades</span></Link>
                      </li>
                      <li id="yenagoapresent"><Link to="/roster"><i className="glyphicon-plus">
                          <div className="icon-bg bg-pink"></div>
                      </i><span className="menu-title">Class Roster</span></Link>
                      </li>
                      <li id="perewarilendar"><Link to="/calendar"><i className="fa fa-calendar fa-fw">
                          <div className="icon-bg bg-grey"></div>
                      </i><span className="menu-title">My Calender</span></Link>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
      <div id="chat-form" className="fixed">
                <div className="chat-inner">
                    <h2 className="chat-header">
                        <a href="javascript:;" className="chat-form-close pull-right"><i className="glyphicon glyphicon-remove">
                        </i></a><i className="fa fa-user"></i>&nbsp; Chat &nbsp;<span className="badge badge-info">3</span></h2>
                    <div id="group-1" className="chat-group">
                        <strong>Favorites</strong><a href="#"><span className="user-status is-online"></span> <small>
                            Verna Morton</small> <span className="badge badge-info">2</span></a><a href="#"><span
                                className="user-status is-online"></span> <small>Delores Blake</small> <span className="badge badge-info is-hidden">
                                    0</span></a><a href="#"><span className="user-status is-busy"></span> <small>Nathaniel Morris</small>
                                        <span className="badge badge-info is-hidden">0</span></a><a href="#"><span className="user-status is-idle"></span>
                                            <small>Boyd Bridges</small> <span className="badge badge-info is-hidden">0</span></a><a
                                                href="#"><span className="user-status is-offline"></span> <small>Meredith Houston</small>
                                                <span className="badge badge-info is-hidden">0</span></a></div>
                    <div id="group-2" className="chat-group">
                        <strong>Office</strong><a href="#"><span className="user-status is-busy"></span> <small>
                            Ann Scott</small> <span className="badge badge-info is-hidden">0</span></a><a href="#"><span
                                className="user-status is-offline"></span> <small>Sherman Stokes</small> <span className="badge badge-info is-hidden">
                                    0</span></a><a href="#"><span className="user-status is-offline"></span> <small>Florence
                                        Pierce</small> <span className="badge badge-info">1</span></a></div>
                    <div id="group-3" className="chat-group">
                        <strong>Friends</strong><a href="#"><span className="user-status is-online"></span> <small>
                            Willard Mckenzie</small> <span className="badge badge-info is-hidden">0</span></a><a
                                href="#"><span className="user-status is-busy"></span> <small>Jenny Frazier</small>
                                <span className="badge badge-info is-hidden">0</span></a><a href="#"><span className="user-status is-offline"></span>
                                    <small>Chris Stewart</small> <span className="badge badge-info is-hidden">0</span></a><a
                                        href="#"><span className="user-status is-offline"></span> <small>Olivia Green</small>
                                        <span className="badge badge-info is-hidden">0</span></a></div>
                </div>
                <div id="chat-box" style={{top:400}}>
                    <div className="chat-box-header">
                        <a href="#" className="chat-box-close pull-right"><i className="glyphicon glyphicon-remove">
                        </i></a><span className="user-status is-online"></span><span className="display-name">Willard
                            Mckenzie</span> <small>Online</small>
                    </div>
                    <div className="chat-content">
                        <ul className="chat-box-body">
                            <li>
                                <p>
                                    <img src={logo} className="avt" /><span className="user">John Doe</span><span
                                        className="time">09:33</span></p>
                                <p>
                                    Hi Swlabs, we have some comments for you.</p>
                            </li>
                            <li className="odd">
                                <p>
                                    <img src={logo} className="avt" /><span className="user">Swlabs</span><span
                                        className="time">09:33</span></p>
                                <p>
                                    Hi, we're listening you...</p>
                            </li>
                        </ul>
                    </div>
                    <div className="chat-textarea">
                        <input placeholder="Type your message" className="form-control" /></div>
                </div>
            </div>
      </div>
    )
  }
}
