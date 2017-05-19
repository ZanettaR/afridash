import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Advising extends Component {
  render () {
    return (
      <div id="page-wrapper">
     <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
         <div className="page-header pull-left">
             <div className="page-title">
                 VIRTUAL ADVISOR</div>
         </div>
         <ol className="breadcrumb page-breadcrumb pull-right">
             <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
             <li className="hidden"><a href="#">Virtual Advisor</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
             <li className="active">Virtual Advisor</li>
         </ol>
         <div className="clearfix">
         </div>
     </div>
     <div className="page-content">
         <div id="tab-general">
             <div className="row mbl">
                 <div className="col-md-12 col-sm-12 col-lg-12 ">
                     <div className="row">
                         <div className="col-sm-6 col-md-6 col-lg-6 ">
                             <div className="resources">
                                 <div className="resourcesContainer">
                                     <p className="lead">Registration</p>
                                 </div>

                            <div className="list-group">
                         <Link to="/search" className="list-group-item list-group-item-action">Search For classes</Link>
                         <Link to="/add" className="list-group-item list-group-item-action">Add classes</Link>
                         <Link to="/registration" className="list-group-item list-group-item-action">Register/Drop classes</Link>
                         <Link to="/registered" className="list-group-item list-group-item-action">Class Schedule</Link>
                         </div>
                         </div>
                         </div>

                         <div className="col-sm-6 col-md-6 col-lg-6">
                          <div className="resources">
                         <div className="resourcesContainer">
                         <p className="lead">Academic Module</p>
                         </div>
                         <div className="list-group">
                         <Link to="/mygrades" className="list-group-item list-group-item-action">Grades</Link>
                         <Link to="/termgrades" className="list-group-item list-group-item-action">Term GPA</Link>
                         <Link to="/transcript" className="list-group-item list-group-item-action">Transcript</Link>
                         <Link to="/program_evaluation" className="list-group-item list-group-item-action">Program Evaluation</Link>

                         </div>
                         </div>
                         </div>

                          <div className="col-sm-6 col-md-6 col-lg-6">
                          <div className="resources">
                                 <div className="resourcesContainer">
                                     <p className="lead">Virtual Intelligence</p>
                         </div>
                         <div className="list-group">
                         <Link to="/generator" className="list-group-item list-group-item-action">Resume Generator</Link>
                         <Link to="#" className="list-group-item list-group-item-action">Graduation Plan Generator</Link>
                         <Link to="#" className="list-group-item list-group-item-action">Virtual Mentor</Link>
                         </div>
                         </div>
                         </div>

                         <div className="col-sm-6 col-md-6 col-lg-6">
                          <div className="resources">
                                 <div className="resourcesContainer">
                                     <p className="lead">My Documents</p>

                         </div>
                         <div className="list-group">
                         <Link to="/resume" className="list-group-item list-group-item-action">My Resume</Link>
                         <Link to="#" className="list-group-item list-group-item-action">My Transcript</Link>
                         <Link to="#" className="list-group-item list-group-item-action">My Cover Letter</Link>
                         </div>
                         </div>
                         </div>
                     </div>
                 </div>
             </div>
</div>
</div>
</div>
    )
  }
}
