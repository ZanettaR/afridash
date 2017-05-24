import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class TermGrades extends Component{
  render(){
    return (
      <div id="page-wrapper">
        <Auth />
        <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
          <div className="page-header pull-left">
            <div className="page-title">Select Semester</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<a href="index.php">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Grades</li>
        </ol>
        <div className="clearfix"></div>
      </div>
    <div className="page-content">
    <div className="col-lg-12">
    <div className="row">
      <form role="form" action="" method="post">
        <div className="col-md-6">
          <div className="form-group">
            <label for="sel1">ACADEMIC YEAR</label>
              <select className="form-control" id="_academic_year" name="year">
                <option></option>
                  <option>2016</option>
              </select>
                <br />
              </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="sel1">SEMESTER</label>
                <select className="form-control" id="semester" name="semester">
                  <option></option>
                  <option>Fall</option>
                  <option>Spring</option>
              </select>
            <br />
          </div>
        </div>
      </form>
      <div className="grades_result"></div>
        <div className="container" style={{marginBottom:50}} >
        <Link className="btn btn-danger" to="/advising">Close</Link>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
