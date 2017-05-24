import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ToDo} from './todo'
import Auth from '../jsHelpers/auth'
export class Calendar extends Component {
  componentDidMount () {
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "/script/zabuto_calendar.min.js";    // use this for linked script
    document.body.appendChild(script);
    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.src   = "/script/mine.js";    // use this for linked script
    document.body.appendChild(s);
  }
  render(){
    return (
      <div id="page-wrapper">
        <Auth />
 <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
     <div className="page-header pull-left">
         <div className="page-title">
            My Calender </div>
     </div>
     <ol className="breadcrumb page-breadcrumb pull-right">
         <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
         <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
     </ol>
     <div className="clearfix">
     </div>
 </div>
 <div className="page-content">
     <div className="tab-general">
         <div className="col-lg-8" id="my-calendar"></div>
         <div className="col-md-4">
         <ToDo />
      </div>

     </div>
   </div>
 </div>
    )
  }
}
