import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export class Forums extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
            <div className="page-header pull-left">
                <div className="page-title">
                    Math 101</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="hidden"><a href="#">Forums</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">Forums</li>
            </ol>
            <div className="clearfix">
            </div>
        </div>
        <div className="page-content">
          <div id="tab-general">
            <div className="row mbl">
        <div className="col-md-7">
          <form method="post" action="">
          <div className="form-group">
            <label htmlFor="comment" style={{color:'blue'}}><h3>Start a Thread</h3></label>
            <textarea className="form-control" rows="2" id="comment" name="thread"></textarea>
          </div>
          <input style={{width:80}} type="submit" className="btn btn-success" name="submit" value="Post"/>
          </form>
        </div>
        <div className="col-md-5">
             <ul className="nav nav-tabs">
                <li className="active"><a href="#TopThreads" data-toggle="tab">Top Threads</a></li>
                <li><a data-toggle="tab" href="#Online">Online Members</a></li>
                <li><a data-toggle="tab" href="#AllMembers">All Members</a></li>
            </ul>
         <div className="tab-content">
         <div id="TopThreads" className="tab-pane fade in active">
            <h3>Top Threads</h3>
        </div>
        <div id="Online" className="tab-pane fade ">
          <ul className="list-group">
          <li className="list-group-item" >&nbsp;&nbsp;<Link style={{textDecoration:'none'}} to="/profile">Richard Igbiriki</Link>
             &nbsp;&nbsp;&nbsp;&nbsp;
              </li>
          </ul>
        </div>
        <div id="AllMembers" className="tab-pane fade">
          <ul className="list-group">
          <li className="list-group-item">&nbsp;&nbsp;<Link style={{textDecoration:'none'}} to="/profile">Richard Igbiriki</Link>
             &nbsp;&nbsp;&nbsp;&nbsp;
                  <a><i className="fa fa-envelope fa-lg"></i></a>&nbsp;&nbsp;<a><i className="fa fa-plus-circle fa-lg"></i></a>
              </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
    )
  }
}
