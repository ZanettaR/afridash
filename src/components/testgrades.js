import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class TestGrades extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
          <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
              <div className="page-header pull-left">
                  <div className="page-title">
                      Test Grades</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                  <li><i className="fa fa-home"></i>&nbsp;<Link to="index.php">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                  <li className="hidden"><a href="#">Test</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
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

               </div>
          </div>
        </div>
    )
  }
}
