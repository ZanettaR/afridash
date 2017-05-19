import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export class Registration extends Component{
  render(){
    return (
      <div id="page-wrapper">
        <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
            <div className="page-header pull-left">
                <div className="page-title">
                    Add Classes</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">Add Classes</li>
            </ol>
            <div className="clearfix">
            </div>
        </div>
        <div className="page-content">
          <div id="tab-general">
            <div className="row mbl">
            <div className="col-lg-12 col-sm-12">
            <div className="row">
            <p>Choose a Subject and a Level for all available courses:</p>
              <form role="form"  method="post">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="sel1">Subjects:</label>
                    <select className="form-control" id="sel3" name="subject">
                      <option></option>
                      <option value="Biology">Biology</option>
                    </select>
                    <br/>
                  </div>
                </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="sel1">Level:</label>
                  <select className="form-control" id="sel4" name="level">
                    <option></option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                </select>
              <br/>
              </div>
            </div>
          </form>
          <div className="SearchResult1"></div>
            <div className="row mbl">
              <div className="col-md-8 col-sm-offset-2">
                <div className="container" style={{marginBottom:50}} >
                 <Link className="btn btn-danger" to="/advising">Close</Link>
                </div>
                </div>
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
