import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class Friends extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
                  <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                      <div className="page-header pull-left">
                          <div className="page-title">Friend Requests</div>
                      </div>
                      <ol className="breadcrumb page-breadcrumb pull-right">
                          <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                          <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                          <li className="active">Friend Request</li>
                      </ol>
                      <div className="clearfix">
                      </div>
                  </div>
                  <div className="page-content">

      <Link to="/profile"><div className="display_pan">
      <span className="user">
          </span>
          </div>
      </Link>

                 <Link to="/profile"><div className="display_pan"><span className="user">
                      </span>
                    </div> </Link>
                    </div>
                  </div>
    );
  }
}
