import React, {Component} from 'react'
import {browserHistory,Link } from 'react-router-dom'
export class AboutMe extends Component {
  render() {
    return (
    <div id="page-wrapper">
      <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
          <div className="page-header pull-left">
              <div className="page-title">
                  Profile</div>
          </div>
          <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
              <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
              <li className="active">My Profile</li>
          </ol>
          <div className="clearfix">
          </div>
      </div>
           <div className="page-content">
          <div id="tab-general">
              <div className="row mbl">
                  <div className="col-md-12 col-sm-12 col-lg-12 ">
                      <div className="row">
                          <div className="col-md-4 col-sm-4 col-lg-4">
                              <div className="panel panel-default">
                              <div className="panel-body">
                                  <div style={{height:200,width:70, display:'block', margin:'auto'}}>
                                   Richard Igbiriki Picture</div>
                                  <div className="text-center">
                                  <h3>Richard Igbiriki</h3>
                                  <h3 className="lead label label-info">Status: Active</h3>
                                  <h3 className="lead label label-info">Program: Full Time</h3>
                                  <h3 className="lead label label-info">Level: 200</h3>
                                  </div>
                                  </div>
                              </div>
                          </div>
                           <div className="col-md-8 col-dm-8 col-lg-8">
                              <div className="panel panel-default">
                                  <div className="panel-body">
                                      <div className="row">
                                      <h3 className="panel-heading"><strong> Basic Info</strong></h3>
                                      <hr/>
                                      <div className="col-sm-6 col-md-6 col-lg-6 demarcation">
                                      <div className="row">
                                          <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">First Name: </p>
                                      <p className="text-left">Middle Name: </p>
                                      <p className="text-left">Last Name: </p>
                                      <p className="text-left">Date of Birth: </p>
                                          </div>
                                      <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">First Name</p>
                                      <p className="text-left">Middle Name</p>
                                      <p className="text-left">Last Name</p>
                                      <p className="text-left">D.O.B</p>
                                          </div>
                                          </div>
                                      </div>
                                  <div className="col-sm-6 col-md-6 col-lg-6">
                                      <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">Gender: </p>
                                      <p className="text-left">College ID: </p>
                                      <p className="text-left">Country: </p>
                                      <p className="text-left">State: </p>
                                      </div>
                                      <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">Gender</p>
                                      <p className="text-left">Mat Number</p>
                                      <p className="text-left">Country</p>
                                      <p className="text-left">State</p>
                                      </div>
                                      </div>
                                      </div>
                                      <hr/>
                                      <h3 className="panel-heading"><strong>Contact</strong></h3>
                                      <hr/>
                                      <div className="col-sm-6 col-md-6 col-lg-6 demarcation">
                                      <div className="row">
                                          <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">Address: </p>
                                      <p className="text-left">City/Province: </p>
                                      <p className="text-left">State: </p>
                                      <p className="text-left">Country: </p>
                                          </div>
                                      <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left address">Address</p>
                                      <p className="text-left province">City</p>
                                      <p className="text-left state">State</p>
                                      <p className="text-left country">Country</p>
                                          </div>
                                          </div>
                                      </div>
                                  <div className="col-sm-6 col-md-6 col-lg-6">
                                      <div className="row">
                                          <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">Email: </p>
                                      <p className="text-left">Phone: </p>
                                      <p className="text-left">Emergency: </p>
                                      <p className="text-left">Emergency Name: </p>
                                          </div>
                                      <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left email">Email</p>
                                      <p className="text-left phone">Phone</p>
                                      <p className="text-left econtact">Emergency</p>
                                      <p className="text-left ephone">Emergency Contact Name</p>
                                          <button type="button" data-toggle="modal" href="#editContact" className="btn btn-primary">Edit Contact</button>
                                          </div>
                                          </div>
                                          </div>
                                      <h3 className="panel-heading"><strong>Academics</strong></h3>
                                      <hr/>
                                      <div className="col-sm-6 col-md-6 col-lg-6 demarcation">
                                      <div className="row">
                                          <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">Major: </p>
                                      <p className="text-left">Minor: </p>
                                      <p className="text-left">College: </p>
                                          </div>
                                      <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">Major College</p>
                                      <p className="text-left">Minor Name</p>
                                          <p className="text-left">College Name</p>
                                          </div>
                                          </div>

                                      </div>
                                  <div className="col-sm-6 col-md-6 col-lg-6">
                                      <div className="row">
                                      <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">Admission Year: </p>
                                      <p className="text-left">Expected Graduation: </p>
                                      </div>
                                      <div className="col-sm-6 col-md-6 col-lg-6">
                                      <p className="text-left">2014</p>
                                      <p className="text-left">2018</p>
                                      </div>
                                      </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
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
