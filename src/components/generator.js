import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
export  default class Generator extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
                <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                    <div className="page-header pull-left">
                        <div className="page-title">
                            Resume Generator </div>
                    </div>
                    <ol className="breadcrumb page-breadcrumb pull-right">
                        <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="active">Resume Generator</li>
                    </ol>
                    <div className="clearfix">
                    </div>
                </div>
    <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="row">
          <div className="col-sm-12 col-lg-12 col-md-12">
            <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Complete the forms on the left to generate your resume. "Update Preview" to see your resume progress.</p>
            <div className="col-sm-6 resumeInfo">
              <div className="row">
  <div className="panel-group" id="accordion">
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Contact Information</a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse in">
        <div className="panel-body">
          <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Enter Contact Information</p>
          <form className="form-horizontal" action="">
            <div className="form-group">
              <div className="form-group row">
                <div className="col-sm-10 col-sm-offset-1">
                  <input type="text" className="form-control"  id="inputName" placeholder="Enter Full Name" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-1">
                <input type="text" className="form-control" id="inputAddress" placeholder="Enter Full Address" />
            </div>
          </div>
              <div className="form-group row">
                <div className="col-sm-10 col-sm-offset-1">
                  <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-1">
                <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone Number" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 col-sm-offset-1">
              <input type="text" className="form-control" id="inputPortfolio" placeholder="Enter Portfolio URL (Optional)" />
          </div>
        </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Education</a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">
          <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Enter Education Details</p>
          <form className="form-horizontal" action="">
            <div className="form-group">
              <div className="form-group row">
                <div className="col-sm-10 col-sm-offset-1">
                  <input type="text" className="form-control"  id="inputUniversity" placeholder="Name Of University" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-1">
                <input type="text" className="form-control" id="inputMajor" placeholder="Enter Major" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 col-sm-offset-1">
              <input type="text" className="form-control" id="inputMajor2" placeholder="Second Major/Minor" />
          </div>
        </div>
              <div className="form-group row">
                <div className="col-sm-4 col-sm-offset-1">
                  <input type="text" className="form-control"  id="inputStartYear" placeholder="Year Started" />
              </div>
              <div className="col-sm-4">
              <input type="text" className="form-control" id="inputExpected" placeholder="Expected Graduation" />
              <p id="courseHelpBlock" className="form-text text-muted">e.g May 2017</p>
            </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-1">
                <input type="text" className="form-control" id="inputGPA" maxlength="4" placeholder="Enter GPA" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 col-sm-offset-1">
            <textarea className="form-control" maxlength="170" id="inputCoursework" placeholder="Related Coursework" rows="5" maxlength="200"></textarea>
            <p id="courseHelpBlock" className="form-text text-muted">Max Length: 200</p>
          </div>
        </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Work Experience</a>
        </h4>
      </div>
      <div id="collapse3" className="panel-collapse collapse">
        <div className="panel-body">
          <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Add Up To Four Relevant Work Experiences</p>
          <form className="form-horizontal" action="" >
            <div id="myForm">
              <div className="form-group row">
                <div className="col-sm-10 col-sm-offset-1">
                  <input type="text" className="form-control" id="Institution1" placeholder="Name of Institution" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-1">
                <input type="text" className="form-control" id="Location1"  placeholder="Location of Institution" />
                <p id="courseHelpBlock" className="form-text text-muted">e.g San Francisco, CA</p>
            </div>
          </div>
              <div className="form-group row">
                <div className="col-sm-10 col-sm-offset-1">
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="StartDate1" placeholder="Start Date" />
                    <p id="courseHelpBlock" className="form-text text-muted">e.g May 2017</p>
                </div>
                <div className="col-sm-6">
                <input type="text" className="form-control" id="EndDate1" placeholder="End Date or Present " />
                <p id="courseHelpBlock" className="form-text text-muted">e.g May 2017</p>
              </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-1">
                <textarea rows="3" maxlength="170" className="form-control" id="Description1" placeholder="Synopsis of Institution (Optional)"></textarea>
                <p id="courseHelpBlock" className="form-text text-muted">e.g Design and development of consumer electronics, computer software, and online services.</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 col-sm-offset-1">
              <input type="text" className="form-control" id="jobTitle1" placeholder="Enter Job Title" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 col-sm-offset-1">
            <textarea rows="3" maxlength="170" className="form-control" id="FRole1" placeholder="Enter a Duty Performed"></textarea>
            <p id="courseHelpBlock" className="form-text text-muted">Hint: Use action words</p>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10 col-sm-offset-1">
          <textarea rows="3" maxlength="170" className="form-control" id="SRole1" placeholder="Enter Another Duty Performed"></textarea>
      </div>
    </div>
    </div>
    <div className="col-sm-10"></div>
    <div className="col-sm-2"><a id="work"><i className="fa fa-plus fa-2x" aria-hidden="true"></i></a></div>
          </form>
        </div>
      </div>
    </div>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Skills</a>
        </h4>
      </div>
      <div id="collapse4" className="panel-collapse collapse">
        <div className="panel-body">
          <div id="skillSet">
         <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Add Up To Six Relevant Skill Sets </p>
         <div className="form-group row">
           <div className="col-sm-10 col-sm-offset-1">
             <textarea rows="3" maxlength="170" className="form-control" id="skill1" placeholder="Enter Skill 1 "></textarea>
             <p id="courseHelpBlock" className="form-text text-muted">e.g Exceptional strategic and analytical thinking abilities</p>
         </div>
       </div>
       </div>
       <div className="col-sm-10"></div>
       <div className="col-sm-2"><a id="skills"><i className="fa fa-plus fa-2x" aria-hidden="true"></i></a></div>
       </div>
      </div>
    </div>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Academic Honors and Activities</a>
        </h4>
      </div>
      <div id="collapse5" className="panel-collapse collapse">
        <div className="panel-body">
          <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Add Up To Six Relevant Academic Honor/Activities </p>
          <p className="text-danger">For Activities, please provide a start and end date or enter present if still involved. For Honors/Award, enter semester received as start year. For e.g Fall 2015 or Spring 2016.</p>
          <div id="Activities">
          <div className="form-group row">
            <div className="col-sm-10 col-sm-offset-1">
              <textarea rows="3" maxlength="170" className="form-control" id="honor1" placeholder="Enter an Activity or Honor"></textarea>
              <p id="courseHelpBlock" className="form-text text-muted">e.g Member of the Horace Mann Bond Honors Program</p>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-4 col-sm-offset-1">
            <input type="text" className="form-control" id="StartYear1" placeholder="Start Year" />
            <p id="courseHelpBlock" className="form-text text-muted">e.g 2016</p>
        </div>
        <div className="col-sm-6">
        <input type="text" className="form-control" id="EndYear1" placeholder="End Date or Present" />
        <p id="courseHelpBlock" className="form-text text-muted">e.g 2017</p>
      </div>
      </div>
      </div>
        <div className="col-sm-10"></div>
        <div className="col-sm-2"><a id="honors"><i className="fa fa-plus fa-2x" aria-hidden="true"></i></a></div>
        </div>
      </div>
    </div>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">Projects</a>
        </h4>
      </div>
      <div id="collapse6" className="panel-collapse collapse">
        <div className="panel-body">
        <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Add Up To Three Relevant Projects </p>
        <div id="Projects">
        <div className="form-group row">
          <div className="col-sm-10 col-sm-offset-1">
            <textarea rows="3" maxlength="170" className="form-control" id="project1" placeholder="Project 1"></textarea>
            <p id="courseHelpBlock" className="form-text text-muted">This could be a className project or personal project</p>
        </div>
      </div>
      </div>
      <div className="col-sm-10"></div>
      <div className="col-sm-2"><a id="project"><i className="fa fa-plus fa-2x" aria-hidden="true"></i></a></div>
      </div>
      </div>
    </div>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">Community Service</a>
        </h4>
      </div>
      <div id="collapse7" className="panel-collapse collapse">
        <div className="panel-body">
          <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Add Up To Two Relevant Community Service Activities </p>
          <div id="community">
          <div className="form-group row">
            <div className="col-sm-10 col-sm-offset-1">
              <textarea rows="3" maxlength="170" className="form-control" id="cs1" placeholder="Enter a Community Project"></textarea>
              <p id="courseHelpBlock" className="form-text text-muted">e.g Mapping areas missing on maps through the missing maps project and red cross</p>
          </div>
        </div>
        </div>
        <div className="col-sm-10"></div>
        <div className="col-sm-2"><a id="cs"><i className="fa fa-plus fa-2x" aria-hidden="true"></i></a></div>
        </div>
      </div>
    </div>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">Customize</a>
        </h4>
      </div>
      <div id="collapse8" className="panel-collapse collapse">
        <div className="panel-body">
          <div id="customize">
            <p className="lead"><i className="fa fa-info-circle" aria-hidden="true"></i> Use the buttons below to change the location of your contact information, and other system edits. </p>
                  <div className="form-group row">
                    <div className="col-sm-4"><label for="font" >Name: </label></div>
                    <div className="col-sm-2"><a id="decName"><i id="decButton" className="fa fa-minus " aria-hidden="true"></i></a></div>
                    <div className="col-sm-4"><input id="namePosition" className="form-control" type="text" /></div>
                    <div className="col-sm-2"><a id="incName"><i id="incButton" className="fa fa-plus " aria-hidden="true"></i></a></div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-4"><label for="font" >Address: </label></div>
                    <div className="col-sm-2"><a id="decAddress"><i id="decButton" className="fa fa-minus " aria-hidden="true"></i></a></div>
                    <div className="col-sm-4"><input id="addressPosition" className="form-control" type="text" /></div>
                    <div className="col-sm-2"><a id="incAddress"><i id="incButton" className="fa fa-plus " aria-hidden="true"></i></a></div>
                  </div>
                <div className="form-group row">
                  <div className="col-sm-4"><label for="font" >Phone: </label></div>
                  <div className="col-sm-2"><a id="decPhone"><i id="decButton" className="fa fa-minus " aria-hidden="true"></i></a></div>
                  <div className="col-sm-4"><input id="phonePosition" className="form-control" type="text"/></div>
                  <div className="col-sm-2"><a id="incPhone"><i id="incButton" className="fa fa-plus " aria-hidden="true"></i></a></div>
              </div>
              <div className="form-group row">
                <div className="col-sm-4"><label for="font" >Portfolio: </label></div>
                <div className="col-sm-2"><a id="decPortfolio"><i id="decButton" className="fa fa-minus " aria-hidden="true"></i></a></div>
                <div className="col-sm-4"><input id="portfolioPosition" className="form-control" type="text" /></div>
                <div className="col-sm-2"><a id="incPortfolio"><i id="incButton" className="fa fa-plus" aria-hidden="true"></i></a></div>
            </div>
            <div className="form-group row">
              <div className="col-sm-4"><label for="font" >Font Size: </label></div>
              <div className="col-sm-8">
              <select className="form-control" id="fontSize">
                <option value="8">12</option>
                <option value="8.5">13</option>
                <option value="9">14</option>
                <option value="9.5">15</option>
                <option value="10">16</option>
                <option value="10.5">17</option>
                <option value="11">18</option>
              </select>
              </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-4"><label for="font" >Font Type: </label></div>
            <div className="col-sm-8">
            <select className="form-control" id="fontType">
              <option value="Calibri">Calibri</option>
              <option value="New Times Roman">New Times Roman</option>
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Cambria">Cambria</option>
              <option value="Garamond">Garamond</option>
              <option value="Book Antiqua">Book Antiqua</option>
            </select>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
                <iframe height="500px" width="100%" id="output"></iframe>
                <button id="update_preview" className="btn btn-default">Update Preview</button>&nbsp;
                <button className="btn btn-primary" id="download">Download</button>&nbsp;
                <Link to="/advising" className="btn btn-danger">Close</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
