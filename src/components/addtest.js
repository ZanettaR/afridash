import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class AddTest extends Component {
  render() {
    return (
                  <div id="page-wrapper">
                      <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                          <div className="page-header pull-left">
                              <div className="page-title">
                                  Add A Test </div>
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
                                  <form method="post" action="" >
                                      <div className="form-group">
                                          <input type="text" name="test_id" placeholder="Test ID" className="form-control"/>
                                      </div>
                                      <div className="form-group">
                                           <input type="text" name="weight" placeholder="Test Weight" className="form-control"/>
                                      </div>
                                       <div className="form-group">
                                          <input type="text" name="course_code" value="" className="form-control"/>
                                      </div>
                                       <div className="form-group">
                                          <input type="datetime-local" name="date" placeholder="Due Date" className="form-control"/>
                                      </div>
                                      <div id="myDiv" className="form-group"></div>
                                      <div id="theValue"></div>
                                      <h5>UPLOAD A FILE</h5>
                                      <input className="btn btn-default" type="file" name="file"/>
                                      <h5>OR</h5>
                                <div onclick="add();">
                              <input type = "button" value = "Add Questions" className="btn btn-default"/>
                              </div>
                               <input type="submit" name="submit" value="Submit" className="btn btn-success"/>

                              </form>
                      <div id="area-chart-spline" style={{width:100, height:300, display:'none'}}>
                                                      </div>
                           </div>
                      </div>
                    </div>
    );
  }
}
