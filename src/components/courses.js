import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class Courses extends Component {
  render() {
    return (
              <div id="page-wrapper">
                  <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                      <div className="page-header pull-left">
                          <div className="page-title">
                             </div>
                      </div>
                      <ol className="breadcrumb page-breadcrumb pull-right">
                          <li><i className="fa fa-home"></i>&nbsp;<a href="/">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                          <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                          <li className="active">Course</li>
                      </ol>
                      <div className="clearfix">
                      </div>
                  </div>
              <div className="page-content">
              <div className="row mbl">
          <ul className="nav nav-tabs">
          <li className=""><a data-toggle="tab" href="#Notifications">Notifications</a></li>
          <li><a data-toggle="tab" href="#About">About</a></li>
          <li><a data-toggle="tab" href="#Syllabus">Syllabus</a></li>
          <li><a data-toggle="tab" href="#Instructor">Instructor</a></li>
          <li><a data-toggle="tab" href="#Assignments">Assignments</a></li>
           <li className=""><a data-toggle="tab" href="#Quizzes">Quizzes</a></li>
            <li><a data-toggle="tab" href="#Tests">Tests</a></li>
          <li><a data-toggle="tab" href="#Midterm">Midterm</a></li>
          <li><a data-toggle="tab" href="#Final">Final</a></li>
          <li><a data-toggle="tab" href="#List">Students</a></li>
      </ul>
      <div className="tab-content">
           <div id="Notifications" className="tab-pane fade">
          </div>
          <div id="About" className="tab-pane fade ">
              <h5>Course Description</h5>
              <h5>Course Semester</h5>
          <h5>Course Credits</h5>
              <a className="btn btn-primary" data-toggle="modal" href="#course_description">Edit</a>
              <br/><br/>
              <h5>Course Semester</h5>
              <h5>Course Credits</h5>
          </div>
          <div id="Syllabus" className="tab-pane fade">
              <h3>Syllabus</h3>
               <iframe src="" style={{width:800, height:600}}></iframe>
              <iframe src="" style={{width:100, height:600}} ></iframe>
              <form  method="post" >
                  <input className="btn btn-default" type="file" name="file"/>
                  <input className="btn btn-primary" type="submit" name="submit_syllabus" value="Upload"/>
              </form>
          </div>
          <div id="Instructor" className="tab-pane fade">
              <h3 style={{align:'center'}}>About Instructor</h3>
              <div style={{align:'center'}}>
              </div>
             <div style={{align:'center'}}>
          </div>
          </div>
          <div id="Assignments" className="tab-pane fade" >
          <table className = "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
              <th>SEE ASSIGNMENT</th>
  						<th>GRADES </th>
  						<th>PUBLISH/HIDE</th>
  					</tr>
  				</thead>
  				<tbody>
              <tr>
              <td>Assignment</td>
              <td></td>
              <td><Link className="btn btn-primary" to="/assignment/view"> VIEW </Link></td>
              <td><Link className="btn btn-success" to="/assignment/grades.">SEE GRADES</Link></td>
              <td><a className="btn btn-danger" href="#"></a></td>
              </tr>
          </tbody>
  			</table>
              <Link className="btn btn-default" to="/assignment/add">Add Assignment</Link>
        <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
  						<th>GRADES </th>
  						<th>START</th>
  					</tr>
  				</thead>
  				<tbody>
  							<tr>
  							<td>Assignment</td>
  							<td></td>
  							<td> A </td>
  							<td><Link className="btn btn-danger" to="/assignment/start"> START</Link></td>
  							</tr>
  	   </tbody>
  			</table>
          </div>
           <div id="Quizzes" className="tab-pane fade">
           <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
              <th>SEE QUIZ</th>
  						<th>GRADES </th>
  						<th>PUBLISH/HIDE</th>
  					</tr>
  				</thead>
  				<tbody>
        <tr>
	        <td>Quiz</td>
	        <td></td>
          <td><Link className="btn btn-primary" to="/quiz/view"> VIEW </Link></td>
	        <td><Link className="btn btn-success" to="/quiz/grades">SEE GRADES</Link></td>
	        <td><a className="btn btn-danger" href="#"></a></td>
	    </tr>
      </tbody>
        </table>
        <Link className="btn btn-default" to="/quiz/add">Add A Quiz</Link>
         <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
  						<th>GRADE </th>
  						<th>START</th>
  					</tr>
  				</thead>
  				<tbody>
            <tr>
  				      <td>Quiz</td>
  							<td></td>
  							<td></td>
  							<td><a className="btn btn-danger" href="#"> COMPLETED</a></td>
  				</tr>
               <tr>
  				      <td>Quiz</td>
  							<td></td>
  							<td> NOT STARTED</td>
  							<td><Link className="btn btn-danger" to="/start/quiz"> START</Link></td>
  				</tr>
             </tbody></table>
          </div>
          <div id="Tests" className="tab-pane fade">
              <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
              <th>SEE TEST</th>
  						<th>GRADES </th>
  						<th>PUBLISH/HIDE</th>
  					</tr>
  				</thead>
  				<tbody>
              <tr>
                  <td>Test</td>
                  <td></td>
                  <td><Link className="btn btn-primary" to="/test/view">VIEW</Link></td>
                  <td><Link className="btn btn-success" to="/test/grades">SEE GRADES</Link></td>
                  <td><a className="btn btn-danger" href="#"></a></td>
              </tr>
              </tbody>
              </table>
              <Link className="btn btn-default" to="/test/add">Add A Test</Link>
              <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
  						<th>GRADE </th>
  						<th>START</th>
  					</tr>

  				</thead>
  				<tbody>
                      <tr>
                      <td>Test</td>
                      <td></td>
                      <td></td>
                      <td><a className="btn btn-danger" href="#">COMPLETED</a></td>
                      </tr>
                      <tr>
                       <td>Quiz</td>
                       <td></td>
                       <td> NOT STARTED</td>
                       <td><Link className="btn btn-danger" to="/start/test"> START</Link></td>
                      </tr>
                      </tbody>
              </table>
          </div>
          <div id="Midterm" className="tab-pane fade" >
              <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
              <th>SEE MIDTERM</th>
  						<th>GRADES </th>
  						<th>PUBLISH/HIDE</th>
  					</tr>
    				</thead>
    				<tbody>
                <tr>
                    <td>MIDTERM </td>
                    <td></td>
                    <td><Link className="btn btn-primary" to="/mid/view">VIEW</Link></td>
                    <td><Link className="btn btn-success" to="/mid/grades">SEE GRADES</Link></td>
                    <td><a className="btn btn-danger" href="#"></a></td>
                </tr>
              </tbody>
              </table>
               <Link className="btn btn-default" to="/midterm/add">ADD MIDTERM</Link>
              <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
  						<th>GRADE </th>
  						<th>START</th>
  					</tr>
  				</thead>
  				<tbody>
            <tr>
            <td>MIDTERM</td>
            <td></td>
            <td></td>
            <td><a className="btn btn-danger" href="#">COMPLETED</a></td>
            </tr>
            <tr>
            <td>MIDTERM</td>
            <td></td>
            <td>NOT STARTED</td>
            <td><Link className="btn btn-danger" to="/mid/start">START</Link></td>
            </tr>
            </tbody>
              </table>
          </div>
          <div id="Final" className="tab-pane fade" >
              <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
              <th>SEE FINAL</th>
  						<th>GRADES </th>
  						<th>PUBLISH/HIDE</th>
  					</tr>
  				</thead>
  				<tbody>
              <tr>
                  <td>FINAL</td>
                  <td></td>
                  <td><Link className="btn btn-primary" to="/finals/view">VIEW</Link></td>
                  <td><Link className="btn btn-success" to="/final/grades">SEE GRADES</Link></td>
                  <td><a className="btn btn-danger" href="#"></a></td>
              </tr>
              </tbody>
              </table>
               <Link className="btn btn-default" to="/finals/add">ADD FINAL</Link>
              <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>TITLE  </th>
  						<th>DUE DATE  </th>
  						<th>GRADE </th>
  						<th>START</th>
  					</tr>

  				</thead>
  				<tbody>
            <tr>
            <td>MIDTERM</td>
            <td></td>
            <td></td>
            <td><a className="btn btn-danger" href="">COMPLETED</a></td>
            </tr>
            <tr>
            <td>FINAL</td>
            <td></td>
            <td>NOT STARTED</td>
            <td><Link className="btn btn-danger" to="/finals/start">START</Link></td>
            </tr>
            </tbody>
        </table>
      </div>
      <div id="List" className="tab-pane fade">
      <table className= "table table-striped">
  				<thead>
  					<tr>
  						<th>NAME</th>
  						<th>DEPARTMENT</th>
  						<th>EMAIL</th>
  						<th>CLASS</th>
  					</tr>

  				</thead>
          <tbody>
              <tr>
              <td>&nbsp;&nbsp;<Link style={{textDecoration:'none'}} to="/profile"></Link>
              </td>
              <td></td>
              <td></td>
              <td></td>
              </tr>
            </tbody>
              </table>
              </div>
</div>
</div>
</div>
</div>

    );
  }
}
