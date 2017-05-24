import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export class Search extends Component{
  render(){
    return (
      <div id="page-wrapper">
        <Auth />
        <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
         <div className="page-header pull-left">
             <div className="page-title">Search Classes</div>
         </div>
         <ol className="breadcrumb page-breadcrumb pull-right">
             <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
             <li className="hidden"><a href="#">Search classes</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
             <li className="active">Search Classes</li>
         </ol>
         <div className="clearfix">
         </div>
     </div>
     <div className="page-content">
         <div id="tab-general">
             <div className="row mbl">
                     <p>Choose a Subject and a Level for all available courses:</p>
<form role="form"  method="post">
<div className="col-md-6">
<div className="form-group">
<label htmlFor="sel1">Subjects:</label>
<select className="form-control" id="sel1" name="subject">
<option></option>
   <option value="Biology">Biology</option>
   <option value="Chemistry">Chemistry</option>

</select>
<br />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label htmlFor="sel1">Level:</label>
<select className="form-control" id="sel2" name="level">
<option></option>
<option value="100">100</option>
<option value="200">200</option>
<option value="300">300</option>
<option value="400">400</option>
<option value="500">500</option>
</select>
<br />
</div>
</div>
<br />
</form>
 <div id="SearchResult"></div>
<div className="container" style={{marginBottom:50}} >
 <Link className="btn btn-danger" to="/advising">Close</Link>
</div>
  </div>
</div>
</div>
</div>
    )
  }
}
