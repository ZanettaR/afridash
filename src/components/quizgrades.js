import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class QuizGrades extends Component {
  render() {
    return (
      <div id="page-wrapper">
                 <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                     <div className="page-header pull-left">
                         <div className="page-title">
                             Quiz Grades</div>
                     </div>
                     <ol className="breadcrumb page-breadcrumb pull-right">
                         <li><i className="fa fa-home"></i>&nbsp;<Link to="index.php">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                         <li className="hidden"><Link to="#">Quizzes</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
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
