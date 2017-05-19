import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class Grading extends Component {
  render() {
    return (
      <div id="page-wrapper">

                  <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                      <div className="page-header pull-left">
                          <div className="page-title">
                              Grading </div>
                      </div>
                      <ol className="breadcrumb page-breadcrumb pull-right">
                          <li><i className="fa fa-home"></i>&nbsp;<a href="/">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                          <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                          <li className="active">Grading</li>
                      </ol>
                      <div className="clearfix">
                      </div>
                  </div>
                  <div className="page-content">
                      <div className="panel panel-blue" style={{background:'#FFF'}}>
                              <div className="panel-heading">
                                  <p style = {{float:'right'}}>Curve</p>
                                  <h3>Gradebook</h3>
                                  <p>Course Name:</p>
                                  <p>Room: LT2</p>
                                  <p>Time: 2:00PM - 4:00PM</p>
                              </div>
                          <br/>
          <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#Assignments">Assignments</a></li>
          <li><a data-toggle="tab" href="#Quizzes">Quizzes</a></li>
          <li><a data-toggle="tab" href="#Tests">Tests</a></li>
          <li><a data-toggle="tab" href="#Mid">Mid-Term</a></li>
          <li><a data-toggle="tab" href="#Exam">Final Exams</a></li>
           <li><a data-toggle="tab" href="#Cum">Cummulative</a></li>
          </ul>
                          <div className="tab-content">
                              <div id="Assignments" className="tab-pane fade in active">
                                   <form role="form"  method="post">
                                  <table className="table table-hover table-bordered">
                                      <thead className = "panel panel-blue">

                                      <tr style = {{textAlign:'center'}}>
                                          <th>#</th>
                                          <th>Firstname</th>
                                          <th>Lastname</th>

                                          <th></th>
                                          <th>Total (100 %)</th>
                                          <th>Grade</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                             <td></td>

                                                 <th></th>
                                                <th>%</th>
                                                <th></th>
                                        </tr>
                                      </tbody>
                                  </table>
                  <input type="hidden" value="" name="course"/>
                  <input type="hidden" value="" name="course_code"/>
                  <input type="hidden" value="" name="num_assignment"/>
                  <input className="btn btn-default" type="submit" value="Save Scores" name="submit"/>

                </form>
                              </div>
                              <div id="Quizzes" className="tab-pane fade">
                              <table className="table table-hover table-bordered">
                                      <thead className = "panel panel-blue">

                                      <tr style = {{textAlign:'center'}}>
                                          <th>#</th>
                                          <th>Firstname</th>
                                          <th>Lastname</th>
                                          <th></th>
                                          <th>Total (100 %)</th>
                                          <th>Grade</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                             <td></td>

                                                 <th></th>
                                                <th>%</th>
                                                <th></th>
                                        </tr>
                                      </tbody>
                                  </table>
                              </div>
                              <div id="Tests" className="tab-pane fade">
                                  <table className="table table-hover table-bordered">
                                      <thead className = "panel panel-blue">

                                      <tr style = {{textAlign:'center'}}>
                                          <th>#</th>
                                          <th>Firstname</th>
                                          <th>Lastname</th>
                                           <th></th>
                                          <th>Total (100 %)</th>
                                          <th>Grade</th>
                                      </tr>
                                      </thead>
                                      <tbody>


                                      <tr>
                                       <th></th>
                                      <td></td>
                                       <td></td>

                                           <th></th>
                                          <th>%</th>
                                          <th></th>
                                          </tr>

                                      </tbody>
                                  </table>
                              </div>
                              <div id="Mid" className="tab-pane fade ">
                                  <form role="form"  method="post">
                              <table className="table table-hover table-bordered">
                                      <thead className = "panel panel-blue">

                                      <tr style = {{textAlign:'center'}}>
                                          <th>#</th>
                                          <th>Firstname</th>
                                          <th>Lastname</th>
                                          <th>100</th>
                                          <th>100</th>
                                          <th>Total (100 %)</th>
                                          <th>Grade</th>
                                      </tr>
                                      </thead>

                                      <tbody>


                                      <tr>
                                      <td></td>
                                      <td></td>
                                       <td></td>

                                           <th></th>
                                            <th></th>
                                          <th>%</th>
                                          <th></th>
                                          </tr>

                                      </tbody>
                                  </table>
                  <input type="hidden" value="" name="course"/>
                  <input type="hidden" value="" name="course_code"/>
      <input type="submit" className="btn btn-default" name="submit" value="Save"/>
      </form>
                              </div>
                              <div id="Exam" className="tab-pane fade ">
                                  <form role="form"  method="post">
                                  <table className="table table-hover table-bordered">
                                      <thead className = "panel panel-blue">

                                      <tr style = {{textAlign:'center'}}>
                                          <th>#</th>
                                          <th>Firstname</th>
                                          <th>Lastname</th>
                                          <th>100</th>
                                          <th>100</th>
                                          <th>Total (100 %)</th>
                                          <th>Grade</th>
                                      </tr>
                                      </thead>
                                      <tbody>

                                      <tr>

                                      <td></td>
                                      <td></td>



                                          <th></th>
                                          <th>%</th>
                                          <th></th>
                                            <th></th>
                                              <th></th>
                                          </tr>

                                      </tbody>
                                  </table>
                  <input type="hidden" value="" name="course"/>
                  <input type="hidden" value="" name="course_code"/>
                  <input type="submit" className="btn btn-default" name="submit" value="Save"/>
      </form>
                              </div>
                              <div id="Cum" className="tab-pane fade">
                                  <form role="form" method="post" >
                                      <table className="table table-hover table-bordered">
                                      <thead className = "panel panel-blue">
                                      <tr style = {{textAlign:'center'}}>
                                          <th>#</th>
                                          <th colspan="2">Student</th>
                                          <th><span className="label label-sm label-success">Assignments</span></th>
                                          <th><span className="label label-sm label-success">Quizzes</span></th>
                                          <th><span className="label label-sm label-success">Tests</span></th>
                                          <th><span className="label label-sm label-success">Mid Term</span></th>
                                          <th><span className="label label-sm label-success">Finals</span></th>
                                          <th><span className="label label-sm label-success">Total Weight</span></th>
                                          <th><span className="label label-sm label-success">%</span></th>
                                          <th><span className="label label-sm label-success">Grade</span></th>
                                      </tr>
                                      <tr style = {{textAlign:'center'}}>
                                          <th>#</th>
                                          <th>Firstname</th>
                                          <th>Lastname</th>
                                          <th></th>

                                          <th></th>
                                          <th>100</th>
                                          <th>100</th>
                                          <th></th>
                                          <th>100 %</th>
                                          <th>A</th>
                                      </tr>
                                      </thead>
                                      <tbody>

                            <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                            </tr>
                          </tbody>
                      </table>
                  <input type="hidden" name="mid" value=""/>
                  <input type="hidden" name="lg" value=""/>
                   <input type="hidden" name="grade" value=""/>


                                      <input type="hidden" name="course" value=""/>
                                      <input type="hidden" name="course_code" value=""/>
                                      <input list="birth_year" name="academic_year" placeholder="Academic Year"/>
                                          <datalist id="birth_year">

       </datalist>
                                      <input className="btn btn-default" type="submit" name="submit" value="Save"/>
                                  </form>
                              </div>
                          </div>
                          </div>
                        </div>
                      </div>
    );
  }
}
