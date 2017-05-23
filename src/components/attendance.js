import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './css/BeatPicker.min.css'
import './css/prism.css'
export class Attendance extends Component {
  componentDidMount() {
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "/script/prism.js";    // use this for linked script
    document.body.appendChild(script);
    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.src   = "/script/BeatPicker.min.js";    // use this for linked script
    document.body.appendChild(s);
  }
  render() {

    return (
      <div id="page-wrapper" >
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
                Class Attendance</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Class Attendance</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
  <div className="row mbl">
<button className="btn btn-default"><i className="fa fa-check-square"> Mark All Present</i></button>&nbsp;
<button className="btn btn-default"><i className="fa fa-times"> Clear</i></button>&nbsp;
<button className="btn btn-default"><i className="fa fa-check-square"> Mark Remaining Absent</i></button>
<br />
<form role="form" method="post" action="">
  <div className="col-sm-12">
<div className="dataTable_wrapper">
<table className="table table-striped table-bordered table-hover " id="dataTables-example">
    <thead>
      <tr className="info">
        <th>Absents</th>
         <th>Student</th>
        <th>Present</th>
        <th>Absent</th>
        <th>Tardy</th>
        <th>Excused</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0</td>
        <td>Richard Igbiriki</td>
        <td><input id="1" type="radio" name="Richard" value="1" /></td>
        <td><input id="2" type="radio" name="Richard" value="0" /></td>
        <td><input id="3" type="radio" name="Richard" value="2" /></td>
        <td><input type="checkbox" name="Igbiriki" value="1" /></td>
        <td><button className="btn btn-default" style={{width:80}}>Is At Risk</button></td>
      </tr>
    </tbody>
    </table>
    <div className="row">
      <div className="col-md-6">
        <input value="Pick a date" name="due_date" type="text" data-beatpicker="true" data-beatpicker-position="['right','bottom']" data-beatpicker-format="['DD','MM','YYYY']" />
      </div>
      <div className="col-md-6">
        <input type="submit" name="register" value="Save Attendance" style={{width:150}} className="btn btn-default" />
      </div>
    </div>
</div>
</div>
</form>
</div>
</div>
  </div>
    )
  }
}
