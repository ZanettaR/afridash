import React, {Component} from 'react'
import {Link } from 'react-router-dom'
export class Registered_classes extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
            <div className="page-header pull-left">
                <div className="page-title">
                    Registered classes</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<Link href="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">Registered classes</li>
            </ol>
            <div className="clearfix">
            </div>
        </div>
                <div className="page-content">
                    <div id="tab-general">
                        <div className="row mbl">
                        <div className="col-lg-12 col-sm-12">
                            <div className="row">
    <div className="panel-body">
        <div className="dataTable_wrapper">
            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                <thead>
                    <tr>
                     <th>Course Title</th>
                    <th>Course Code</th>
                    <th>Credits</th>
                    <th>Description</th>
                    <th>Semester</th>
                    </tr>
                </thead>
                <tbody>
         <tr>
            <td>Class Title</td>
            <td>Course Code</td>
            <td>Course Credit</td>
            <td>Course Description</td>
            <td>Course Semester</td></tr>
            </tbody>
        </table>
        </div>
    </div>
        <div className="container" style={{marginBottom:50,}} >
            <Link className="btn btn-danger" to="/advising">Close</Link>
        </div>
    </div>
    </div>
 </div>
    </div>
  </div>
</div>
    );
  }
}
