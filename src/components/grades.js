import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class Grades extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
                Select A Class To Grade</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Grades</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
        <div className="row">
          <ul className="list-group">
             <li className="list-group-item"><Link to="/grading">Course Title</Link></li>
        </ul>
        </div>
      </div>
    </div>
    )
  }
}
