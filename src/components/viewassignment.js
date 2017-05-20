import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class ViewAssignment extends Component {
  render() {
    return (
                  <div id="page-wrapper">
                      <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                          <div className="page-header pull-left">
                              <div className="page-title">
                                  View Assignment</div>
                          </div>
                          <ol className="breadcrumb page-breadcrumb pull-right">
                              <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                              <li className="hidden"><a href="#">Assignment</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                              <li className="active">Dashboard</li>
                          </ol>
                          <div className="clearfix">
                          </div>
                      </div>
                      <div className="page-content">
                          <div id="tab-general">

           <form method="post" action="">
              <ul className="questions">
              <li></li>
              <input type="radio" name="answer<?php echo $count?>" value="a" />
              <input type="radio" name="answer<?php echo $count?>" value="b" />
              <input type="radio" name="answer<?php echo $count?>" value="c" />
               <input type="radio" name="answer<?php echo $count?>" value="d" />
              </ul>
       </form>
      <p></p>


                      </div>
                      </div>
                    </div>


    );
  }
}
