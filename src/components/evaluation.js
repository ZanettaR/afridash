import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export default class Evaluation extends Component {
  render() {
    return(
      <div id="page-wrapper">
      <Auth />
             <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                 <div className="page-header pull-left">
                     <div className="page-title">Program Evaluation</div>
                 </div>
                 <ol className="breadcrumb page-breadcrumb pull-right">
                     <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                     <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                     <li className="active">Program Evaluation</li>
                 </ol>
                 <div className="clearfix">
                 </div>
             </div>
             <div className="page-content">
             <div className="col-lg-12">
             <div className="row">
      <div className="col-md-6">
      <form role="form" action="" method="post">
      <div className="form-group">
      <label htmlFor="sel1">SELECT ACADEMIC DEPARTMENT</label>
      <select className="form-control" id="_department_" name="department">
      <option value="1">Biology</option>
           <option value="12">Biology</option>
      </select>
      <br />
      </div>
      </form>
      </div>
      <div className="col-md-6"></div></div>
      <div id="program_eval">
      <div className="col-sm-12 col-md-12">
      <div className="panel panel-green" style={{background:'#FFF'}}>
      <div className="panel-heading">
      <div className="row">
         <div className="col-sm-6"><h3>Richard Igbiriki</h3></div>
         <div className="col-sm-6"><h3>Expected Graduation: 2018 </h3></div>
         <div className="col-sm-6" ><h3 id="tcredits">Total Completed Credits: 12 </h3></div>
         <div className="col-sm-6"><h3 id="tqp">Cummulative Grade Point Average: 4.00</h3></div>
      </div>
      </div>
      <div className="panel-body">
      <div className="table-responsive">
      <table className="table table-hover table">
        <thead>
        <tr>
        <th>#</th>
        <th>Course Code</th>
        <th>Course Title</th>
        <th>Credits</th>
        <th>Grade</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
             <tr>
               <td>1</td>
               <td>Course Code</td>
               <td>Course Title</td>
               <td>3</td>
               <td>A</td>
               <td>Completed</td>
             </tr>
        </tbody>
      </table>
      <input id="mycredits" className="form-control" type="hidden" value="1" />
      <input id="mytqp" className="form-control" type="hidden" value="1" />
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="container" style={{marginBottom:50}} >
      <Link className="btn btn-danger" to="/advising">Close</Link>
      </div>
        </div>
      </div>
    </div>
    )
  }
}
