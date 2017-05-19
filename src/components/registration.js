import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export class Registration extends Component{
  render(){
    return(
      <div id="page-wrapper">
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
                Class Registration</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Class Registration</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
      <div id="tab-general">
        <div className="row mbl">
          <div className="col-md-12 col-sm-12 col-lg-12 ">
            <div className="row">
              <input className="form-control" id="num_pre" type="hidden" value="1" />
              <form role="form" action="className_registration.php" method="post">
              <div className="panel-body">
                <div className="dataTable_wrapper">
                  <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                      <tr>
                      <th>Registration</th>
                       <th>Course Title</th>
                      <th>Course Code</th>
                      <th>Credits</th>
                      <th>Description</th>
                      <th>Semester</th>
                      </tr>
                    </thead>
                  <tbody>
                <tr id="1">
                <td><input type="checkbox" name="check_list[]" className="form-control" value="1" /> &nbsp;&nbsp;&nbsp;<a data-id="1" href="#" id="dropclassName"><i className="fa fa-times"></i></a></td>
                <td>Course Title</td>
                <td>Course Code</td>
                <td>Course Credit</td>
                <td>Course Description</td>
                <td>Course Semester</td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
      <div className="container">
      <input type="submit" name="register" className="btn btn-primary" value="Submit"/>
      </div>
      </form>
<h1 className="text-center">Registered Classes</h1>
<div className="panel-body">
<div className="dataTable_wrapper">
<table className="table table-striped table-bordered table-hover" id="dataTables-example">
    <thead>
        <tr>
        <th>Drop</th>
         <th>Course Title</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Description</th>
        <th>Semester</th>
        </tr>
    </thead>
    <tbody>
      <tr id="1">
       <td><a data-id="1" href="#" id="deleteclassName"><i className="fa fa-times"></i></a></td>
      <td>Course Title</td>
      <td>Course Code</td>
      <td>Course Credit</td>
      <td>Course Description</td>
      <td>Course Semester</td>
      </tr>
    </tbody>
    </table>
  </div>
  <div className="container" style={{marginBottom:50}} >
  <Link className="btn btn-danger" to="/advising">Close</Link>
  </div>
  </div>
</div>
        </div>
    </div>
        </div>
      </div>
    </div>
    )
  }
}
