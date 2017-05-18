import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ToDo} from './todo'
export class Calendar extends Component {
  render(){
    return (
      <div id="page-wrapper">
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
