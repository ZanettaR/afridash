import React, {Component} from 'react'
import {browserHistory, Link } from 'react-router-dom'
import {ToDo} from './todo'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export class Home extends Component {
  render() {
    return (
      <div id="page-wrapper">
                <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                    <div className="page-header pull-left">
                        <div className="page-title">
                            Dashboard</div>
                    </div>
                    <ol className="breadcrumb page-breadcrumb pull-right">
                        <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="hidden"><a href="#">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="active">Dashboard</li>
                    </ol>
                    <div className="clearfix">
                    </div>
                </div>
                <div className="page-content">
                  <div id="tab-general">
                    <div className="row mbl">
                        <div id="sum_box">
                          <Link to="/courses">
                            <div className="col-sm-6 col-md-2">
                              <div className="panel panel-blue db mbm">
                                <div className="panel-body">
                                  <h4><p className="description">
                                    Hello</p></h4>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    </div>
                    <div className="row mbl">
                      <div className="col-lg-8" id="wrap">
                          <div className="panel">
                            <div className="panel-heading">
                              <div className="caption">Timeline</div>
                            </div>
                      <div className="panel-body">
                        <ul className="nav nav-tabs">
                          <li className="active"><a href="#UpdateStatus" data-toggle="tab" className="btn btn-sm">Update Status</a></li>
                          <li><a data-toggle="tab" href="#AddPhoto" className="btn btn-sm">Add  Photo</a></li>
                        </ul>
                        <div className="tab-content">
                          <div id="UpdateStatus" className="tab-pane fade in active">
                            <form action="" method="POST">
                              <div className="form-group">
		                              <textarea className="form-control" rows="1" id="comment"  placeholder="What's on your mind" name="status"></textarea>
		                              </div>
		                                <input type="submit" className="btn btn-primary btn-sm" name="submit" value="Share" />
		                          </form>
                          </div>
                          <div id="AddPhoto" className="tab-pane fade" >
                          <form id="upload" method="post" action="upload.php" >
			                         <div id="drop">
				                             Drop Here
				                   <a><i className="fa fa-upload fa-2x"></i> Choose a file</a>
				                 <input type="file" name="upl" multiple /></div>
			                      <ul style={{width:20}}></ul>
                          </form>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div id="load_posts">
                    <div className="panel" id="update_panelBox<?php echo $msgID ?>">
                    <div className="panel-heading">
                        <input type="hidden" name="id" id="id" />
                        <div className="caption">Picture
                          <a href='#'>Richard Igbiriki</a> made a status update ";
                          <div id="1" className="panel-body post_box">
                            <p>This is the first post</p><br/><br/>";
                          </div>
                          <div className="panel-footer">
                            <ol id="load_comments"></ol><div id="flash"></div>
	                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <ToDo />
                </div>
           <div id="area-chart-spline" style={{width:100, height:300,display:'none'}}></div>
   </div>
 </div></div>
    );
  }
}
