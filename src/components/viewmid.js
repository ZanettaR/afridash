import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class ViewMid extends Component {
  render() {
    return (
                  <div id="page-wrapper">
                      <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                          <div className="page-header pull-left">
                              <div className="page-title">
                                  Midterm </div>
                          </div>
                          <ol className="breadcrumb page-breadcrumb pull-right">
                              <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                              <li className="hidden"><a href="#">Quizzes</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                              <li className="active">Dashboard</li>
                          </ol>
                          <div className="clearfix">
                          </div>
                      </div>
                      <div className="page-content">
                          <div id="tab-general">
              <ul className="questions">
              <li></li>
              <input type="radio" name="answer" value="a" />
              <input type="radio" name="answer" value="b" />
              <input type="radio" name="answer" value="c" />
               <input type="radio" name="answer" value="d" />
              </ul>
                           </div>
                      </div>
                    </div>
    );
  }
}
