import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class Tasks extends Component {
  render() {
    return (
      <div id="page-wrapper">
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">Tasks</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<a href="index.php">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Tasks</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
<Link to="/courses/:_id/">
<div className="display_pan">A new test has been added</div></Link>
          <Link to="/courses/:_id/">
            <div className="display_pan">A new quiz has been added</div></Link>
          <Link to="/courses/:_id/">
            <div className="display_pan">A new Assignment has been added</div></Link>
  </div>
</div>
    );
  }
}
