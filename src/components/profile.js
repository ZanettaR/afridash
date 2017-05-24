import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import logo from './images/logo.png'
import './css/timeline.css'
import Auth from '../jsHelpers/auth'
export class Profile extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
         <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
             <div className="page-header pull-left">
                 <div className="page-title">
                     My Wall </div>
             </div>
             <ol className="breadcrumb page-breadcrumb pull-right">
                 <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                 <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                 <li className="active">Timeline</li>
             </ol>
             <div className="clearfix">
             </div>
         </div>
   <div className="page-content">
       <div id="tab-general">
           <div className="row">
         <div id="timelineContainer">
          <div id="timelineBackground">
          <img src={logo} className="bgImage"  style={{flex:0}} />
          </div>
          <div id="timelineProfilePic" >
          <img src={logo} width="100" height="100" style={{borderRadius:50}}/>
          </div>
          <a id="popover-link" data-toggle="modal" href="#ChangeProfile"><i className="fa fa-camera fa-2x"></i></a>
          <div id="timelineTitle"><p>Richard Igbiriki</p></div>
             <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                 <div className="btn-group" role="group">
                     <button data-toggle="modal" href="#SendMessage" type="button" id="start" className="btn btn-primary "><span className="fa fa-star fa-fw" aria-hidden="true"></span>
                        <div className="hidden-xs">Send Message</div>
                     </button>
                 </div>
                 <div className="btn-group" role="group">
                     <button type="button" id="stars" className="btn btn-primary " href="#tab2" data-toggle="tab"><span className="fa fa-star fa-fw" aria-hidden="true"></span>
                         <div className="hidden-xs">Posts</div>
                     </button>
                 </div>
                 <div className="btn-group" role="group">
                        <button type="button" id="favorites" className="btn btn-primary"><a className = "arequest" href="#"><span className="fa fa-user-plus" aria-hidden="true"></span>
                 <div className="hidden-xs">Request Friend</div></a></button>
                 </div>
       <div className="btn-group" role="group">
           <button type="button" id="following" className="btn btn-primary" href="#tab4" data-toggle="tab"><span className="fa fa-heart fa-fw" aria-hidden="true"></span>
               <div className="hidden-xs">About</div>
           </button>
       </div>
          <div className="btn-group" role="group">
           <button type="button" id="following" className="btn btn-primary" href="#tab5" data-toggle="tab"><span className="fa fa-heart fa-fw" aria-hidden="true"></span>
               <div className="hidden-xs">Gallery</div>
                   </button>
       </div>
   </div>
</div>
     <div className="tab-content">
       <div className="tab-pane fade in active" id="tab2">
      </div>
         <div className="tab-pane fade" id="tab3">
        <div className="row">
          <Link to="/profile/:_id/" className="aprofile">
               <div className="col-md-3">
                   <div className="panel panel-blue db mbm">
                       <div className="panel-body">
                          <p>Richard Igbiriki</p>
                       </div>
                    </div>
                </div></Link>
            </div>
         </div>
       <div className="tab-pane fade" id="tab4">
           <div className="row resources">
               <div className="resourcesContainer lead"><h1>About Me </h1></div>
              <div className="col-md-6 col-sm-6 col-lg-6 demarcation">
               <div id="cf">
                   <img className="bottom" src="images/tmp1.jpg" />
                   <img className="top" src="images/tmp2.jpg" />
                  </div>
               </div>
               <div className="col-md-6 col-sm-6 col-lg-6">
               <h1>Bio</h1>
                   <hr/>
                   <p>Georgia Italic is a debate font and takes inspiration from calligraphy. Use it to emphasize small sections of text on paragraphs.</p>
                   <hr/>
                   <p>Favorite Word: Ignite</p>
               </div></div>
               <br/>
               <div className="row resources">
               <div className="resourcesContainer lead"><h1>Academics</h1></div>
                   <div className="col-md-12 col-sm-12 col-lg-12">
                   <table className="table">
                     <tbody>
                       <tr>
                         <td><h3>Major:</h3> </td>
                         <td><h3>Computer Science</h3></td>
                       </tr>
                       <tr>
                         <td><h3>Minor: </h3></td>
                         <td><h3>Business Management</h3></td>
                       </tr>
                       <tr>
                         <td><h3>Department: </h3></td>
                         <td><h3>Electrical/Electronics</h3></td>
                       </tr>
                         <tr>
                         <td><h3>Faculty: </h3></td>
                         <td><h3>Engineering</h3></td>
                       </tr>
                     </tbody>
                   </table>
                   </div>
               </div>
           <br/>
       </div>
       <div className="tab-pane fade" id="tab5">
         <div className="gallery">
        </div>
       </div>
     </div>
   </div>
</div>
</div>
</div>
    );
  }
}
