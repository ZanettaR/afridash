import React, {Component} from 'react'
import {browserHistory } from 'react-router-dom'

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
                        <li><i className="fa fa-home"></i>&nbsp;<a href="index.php">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
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
              <a href="courses.php?course=<?php echo $courses['course_title']?>&course_code=<?php echo $courses['course_code']?>">
                <div className="col-sm-6 col-md-2">
                    <div className="panel panel-blue db mbm">
                        <div className="panel-body">
                                        <h4><p className="description">
                                            Hello</p></h4>
                                    </div>
                                </div>
                            </div></a>
              </div>   </div>
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
				<input type="file" name="upl" multiple />
			</div>
			<ul style={{width:20}}>
			</ul>

		</form>
                </div>
             </div>
                 </div>
                </div><div id="load_posts">
                    <div className="panel" id="update_panelBox<?php echo $msgID ?>">
                    <div className="panel-heading">
                        <input type="hidden" name="id" id="id" />
                        <div className="caption">Picture
                          <a href='#'>Richard Igbiriki</a> made a status update ";
                    <div id="1" className="panel-body post_box">
                <p>This is the first post</p><br/><br/>";
                    </div>
                    <div className="panel-footer">
                    <div>
                  </div>
                  <ol id="load_comments"></ol><div id="flash"></div>
	               </div>
               </div>
             </div></div>
           </div></div>
           <div className="col-lg-4">
             <ToDo />
           </div>
           <div id="area-chart-spline" style={{width:100, height:300,display:'none'}}></div>
   </div>
 </div></div>
    );
  }
}
class ToDo extends Component {
  render() {
    return (
      <div>
        <h1> My To-Do List </h1>
         <ul className="nav nav-tabs" role="tablist">
           <li role="presentation" className="active"><a href="#toDo" aria-controls="home" role="tab" data-toggle="tab">To Do</a></li>
           <li role="presentation"><a href="#addNew" aria-controls="profile" role="tab" data-toggle="tab">Add New</a></li>
         </ul>
         <div className="tab-content">
           <div role="tabpanel" className="tab-pane active" id="toDo">
             <div className="panel-group" id="accordion">
               <div id="todoListItems"></div>
               <p className='zerowarning'>There are zero items. Add one now!</p>
             </div>
           </div>
           <div role="tabpanel" className="tab-pane fade" id="addNew">
				         <form className="form-vertical" action="" method="post">
			              <div className="form-group">
		                    <label htmlFor="title" > Title</label>
	                          <input className="form-control" type="text" name="title" id="title" className="input"/>
                             </div>
                      <div className="form-group">
                          <label htmlFor="date"> Date</label>
                            <input className="form-control" type="date" name="date" id="date" className="input"/>
                             </div>
                      <div className="form-group">
						             <label htmlFor="description" > Description</label>
						               <textarea className="form-control" name="description" id="description" rows="4" cols="35"></textarea>
					              </div>
					             <div className="form-group">
						           <input type="button" className=" btn btn-primary addEntry" name="addEntry" id="addEntry" value="Save To-Do" />
					             </div>
				             </form>
                   </div></div>
      </div>
    )
  }
}
