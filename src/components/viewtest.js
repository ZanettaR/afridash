import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class ViewTest extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
          <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
              <div className="page-header pull-left">
                  <div className="page-title">
                    VIEW  TEST</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                  <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                  <li className="hidden"><a href="#">Test</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
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
