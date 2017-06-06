import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export class AddClass extends Component{
  constructor(props){
    super(props)
    this.user = firebase.auth().currentUser
    this.courses = []
    this.preregistration =[]
    this.state = {

      department:'',
      title:'',
      code:'',
      credit:'',
      description:'',
      semester:'',
      level:'none',
      error:"This class has aready been added",
      courses:[],
      preRegistered:[],
      registeredCourses:[],
      copyCourses:[],
      departments:[],
      preRegistration: [],
      checked:false,
      selected:false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
    this.handleLevel=this.handleLevel.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleCheck=this.handleCheck.bind(this)
  }
  async componentWillMount () {
      await firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
    }

  handleChange (event) {
  this.setState({
    [event.target.name] :event.target.value
  })
  }
  handleSelect (event){
  this.readCourses(event.target.value)
  this.setState({
    department:event.target.value, selected:true
  })

  }

  handleLevel(event){
  this.setState({
  level:event.target.value
  })
  this.readCoursesWithLevel(event.target.value)
  }

  handleSubmit (event) {
  event.preventDefault();
  }


  handleCheck (event) {
    firebase.database().ref().child('preregistration').child(this.state.userId).push(event.target.value)
    this.hideCourse(event.target.value)
  }
  hideCourse(courseKey){
    this.courses=[]
       this.courses = this.state.courses.filter((course)=>
        {

         return course.key !== courseKey

       })

        this.setState({courses:this.courses})
  }


  handleUser (user) {
  if (user) {
   this.setState({userId:user.uid})
   this.readDepartments()
   this.readPreRegistration()
   this.readRegistration()
  }
  }
  readPreRegistration (){ //Retrieve the preregistered classes from the firebase db
    this.preRegistration=[]
    this.courses=[]
    firebase.database().ref().child("preregistration").child(this.state.userId).once('value', (snapshot)=> //Retrieve the Id's of the classes under the user
    {
      snapshot.forEach((childSnapShot)=> { //Using the Id's retrieve the information about the courses
        var ref = firebase.database().ref().child('courses').child(childSnapShot.val())
        ref.once('value', (snap)=>{
            this.courses.push({
              key:snap.key,
              title:snap.val().title,
              code:snap.val().code,
              credit:snap.val().credit,
              description:snap.val().description,
              level:snap.val().level,
              semester:snap.val().semester,
              selected: false
            })
            this.setState({preRegistered:this.courses}) //Store the information for display

        })
      })
    })
  }

  readRegistration(){ //Retrieve the already registered classes from  the firebase db
    let registeredCourses=[];
    firebase.database().ref().child("registration").child(this.state.userId).once('value', (snapshot)=> //Retrieve the Id's of the classes the user has registered
    {
      snapshot.forEach((childSnapShot)=> { //Same as above
        var ref = firebase.database().ref().child('courses').child(childSnapShot.val())
        ref.once('value', (snap)=>{
            registeredCourses.push({
              key:snap.key,
              title:snap.val().title,
              code:snap.val().code,
              credit:snap.val().credit,
              description:snap.val().description,
              level:snap.val().level,
              semester:snap.val().semester,
              selected: false
            })
            this.setState({registeredCourses})

        })
      })
    })

  }

  readDepartments () {
    this.departments=[]
    this.setState({departments:[]})
    var ref = firebase.database().ref().child('departments')
    ref.on('child_added', (snap)=>{
        this.departments.push({name:snap.val()})
        this.setState({departments:this.departments})
    })
  }
  readCourses (department){

    this.courses=[]
    this.setState({courses:[],copyCourses:[]})
    var ref = firebase.database().ref().child('courses').orderByChild("department").equalTo(department)
    ref.on('child_added', (snap)=>{
        this.courses.push({
          key:snap.key, title:snap.val().title,code:snap.val().code, credit:snap.val().credit,description:snap.val().description,level:snap.val().level,semester:snap.val().semester
        })
        const inArray = (needle, haystack) => {
          console.log('got here',needle, haystack);
          var length = haystack.length;
          for(var i = 0; i < length; i++) {
              if(haystack[i].key == needle.key) return true;
          }
          return false
        }
        let {preRegistered,registeredCourses} = this.state;//set the state to carry both register and preregister table

        const filteredCourses = this.courses.filter((course) => {
            return !inArray(course, preRegistered) && !inArray(course, registeredCourses);//this filters the display to show only if you haven't added to the register or preregistered table
        })
        this.setState({courses:filteredCourses, copyCourses:filteredCourses})

    })


  }

  readCoursesWithLevel(level)
  {
    this.courses=[]
       this.courses = this.state.copyCourses.filter((course)=>
        {
         return course.level === level

       })

        this.setState({courses:this.courses})
  }

  render(){
    return (
      <div id="page-wrapper">
        <Auth />
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
            <h4>Choose a Subject and a Level for all available courses, check to add a class</h4>
              <form role="form"  method="post">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="sel1">Subjects:</label>
                    <select className="form-control" id="sel3" onChange={this.handleSelect} name="subject">
                      <option></option>
                      {this.state.departments.map((department, key) =>
                      <option value={department.name} key={key} >{department.name}  </option>
                      )}
                    </select>
                    <br/>
                  </div>
                </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="sel1">Level:</label>
                  <select className="form-control" id="sel4" onChange={this.handleLevel} name="level">
                  {this.state.selected ? <option selected></option> : <option></option> }
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

          <div id="Result">
            {this.state.courses.length !==0 ?
              <div className="panel-body">
                   <div className="dataTable_wrapper">
                       <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                           <thead>
                               <tr>
                               <td>Select</td>
                               <th>Course Title</th>
                               <th>Course Code</th>
                               <th>Credits</th>
                               <th>Description</th>
                               <th>Semester</th>
                               </tr>
                           </thead>
                           <tbody>

                   {this.state.courses.map((course, key)=>

                       <tr key={key}>
                       <td><input type="checkbox" value={course.key} name="check_list[]" onClick={this.handleCheck} className="form-control"  /> &nbsp;&nbsp;&nbsp;<a href="#" id="dropclassName"></a></td>
                       <td>{course.title}</td>
                       <td>{course.code}</td>
                       <td>{course.credit}</td>
                       <td>{course.description}</td>
                       <td>{course.semester}</td>
                     </tr>


                     )}
                       </tbody>
                   </table>
                   </div>
               </div> : <div className="container">
                 <h3>There are no classes available yet</h3>
               </div> }

          </div>
            <div className="row mbl">
            <div className="col-md-8 col-sm-offset-2">
                <div className="container" style={{marginBottom:50}} >
                  <button type="button" name="register" onClick={this.handleSubmit} className="btn btn-primary"><Link to="/registration">Continue</Link></button>&nbsp;
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
