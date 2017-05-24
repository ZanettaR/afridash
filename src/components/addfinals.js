import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class AddFinals extends Component {
  render() {
    return (
<div id="page-wrapper">
  <Auth />
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
                Add Final </div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Final</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Dashboard</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>

    <div className="page-content">
        <div id="tab-general">
                <form method="post" action="">
                    <div className="form-group">
                         <input type="text" name="weight" placeholder="WEIGHT" className="form-control"/>
                    </div>
                     <div className="form-group">
                        <input type="text" name="course_code" value="" className="form-control"/>
                    </div>
                     <div className="form-group">
                        <input type="datetime-local" name="date" placeholder="Due Date" className="form-control"/>
                    </div>
                    <div id="myDiv" className="form-group"></div>
                    <div id="theValue"></div>
              <div onclick="add();">
            <input type = "button" value = "Add Questions" className="btn btn-default"/>
            </div>
             <input type="submit" name="submit" value="Submit" className="btn btn-success"/>
            </form>

         </div>
    </div>
  </div>
    );
  }
}
