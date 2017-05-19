import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export class Transcript extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
            <div className="page-header pull-left">
                <div className="page-title">
                    Transcript </div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">Transcript</li>
            </ol>
            <div className="clearfix">
            </div>
        </div>
       <div className="page-content">
           <h5>Richard Igbiriki</h5>
           <table className="table table-striped table-bordered table-hover">
              <thead>
                  <tr>
                      <th>Course Code/Title</th>
                      <th>Letter Grade</th>
                      <td>Grade</td>
                      <th>Credits</th>
                      <th>Term</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Course Code Course Title</td>
                    <td>A</td>
                    <td>99</td>
                    <td>3</td>
                    <td>2016 Fall</td>
              </tr>
             </tbody>
          </table>
           <h5>Total Earned Credits: 12</h5>
           <h5>Total Earned Points: 36</h5>
           <h5>CGPA: 5.00</h5>
           <div className="container" style={{marginBottom:50}} >
            <Link className="btn btn-danger" to="/advising">Close</Link>
           </div>
       </div>
     </div>
    )
  }
}
