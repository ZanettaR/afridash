import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export class Roster extends Component {
  render() {
    return (
      <div id="page-wrapper">
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
                Class Roster</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Class Roster</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
        <div className="row">
          <ul className="list-group">
             <li className="list-group-item"><Link to="grading">Course Title</Link></li>
        </ul>
        </div>
      </div>
    </div>
    )
  }
}
