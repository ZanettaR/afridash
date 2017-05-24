import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class AssignmentGrades extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
                <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                    <div className="page-header pull-left">
                        <div className="page-title">
                            Assignment Grades</div>
                    </div>
                    <ol className="breadcrumb page-breadcrumb pull-right">
                        <li><i className="fa fa-home"></i>&nbsp;<a href="/">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="hidden"><a href="#">Assignment</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="active">Dashboard</li>
                    </ol>
                    <div className="clearfix">
                    </div>
                </div>
                <div className="page-content">
                    <div id="tab-general">
                         <table className="table table-hover">
                            <thead>
                            <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Score</th>
                            </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                    <td></td>
                                     <td></td>
                                     <td></td>
                                     <td></td>
                                </tr>
                            </tbody>
                            </table>
                <div id="area-chart-spline" style={{width: '100%', height: '300', display:'none'}}>
                                                </div>
                     </div>
                </div>
              </div>
    );
  }
}
