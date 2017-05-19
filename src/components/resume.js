import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export class Resume extends Component {
  render(){
    return (
      <div id="page-wrapper">
         <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
             <div className="page-header pull-left">
                 <div className="page-title">
                     My Resume</div>
             </div>
             <ol className="breadcrumb page-breadcrumb pull-right">
                 <li><i className="fa fa-home"></i>&nbsp;<a href="index.php">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                 <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                 <li className="active">My Resume</li>
             </ol>
             <div className="clearfix">
             </div>
         </div>
          <div className="row">
            <div className="col-sm-10 col-md-10 col-lg-10 col-sm-offset-1">
              <iframe style={{height:500,width:800}} id="myresume"></iframe>
                <br />
                <div className="row">
                  <div className="col-sm-6">
                      <form action="view_resume.php" method="POST" enctype="multipart/form-data">
                      <input type="file" name="file" className="btn btn-default" />
                      <br/>
                      <button className="btn btn-primary" style={{width:100}}>Upload</button>
                    </form>
                  </div>
                  <div className="col-sm-6"><Link className="btn btn-danger pull-right" to="/advising">Close</Link></div>
                </div>
                </div>

          </div>
</div>
    )
  }
}
