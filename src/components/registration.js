import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export class Registration extends Component{
constructor(props){
  super(props)
  this.user = firebase.auth().currentUser
  this.courses=[]
  this.state={
    courses:[],
    preRegistration:[],
    registration:[],
    add:[],
    drop:[],
    courseIds: [],
    selectedCoursesID: [],
    selectedCourses:[],
    dropCourses:[],
    selected:false
    }
    this.handleCheckboxClick=this.handleCheckboxClick.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleSelect=this.handleSelect.bind(this)


    firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
}
componentDidMount () {


  }
  shouldComponentUpdate(nextProps, nextState) {
    // You can access `this.props` and `this.state` here
    // This function should return a boolean, whether the component should re-render.
    return true;
  }
handleUser(user){
  if(user){
    this.setState({userId:user.uid})
    this.readPreRegistration()
    this.readRegistration()
    this.hideCourse()
  }
}
handleCheckboxClick (event, course, key) {
  course.selected = !course.selected;
  var clone = this.state.courses
  clone[key] = course
  let {selectedCoursesID} =this.state
  if(course.selected){
    //console.log("selected", cours)
 selectedCoursesID.push({key:course.key})
  }
  else
  {
  selectedCoursesID = selectedCoursesID.filter((c)=>
{
  return c.key !== course.key
})
  }
   this.setState({courses:clone, selectedCoursesID});
}
handleDropBox(course, key)
{
  course.selected = !course.selected;
  var clone = this.state.selectedCourses
  clone[key] = course
  let {dropCourses} =this.state
  if(course.selected){
    //console.log("selected", cours)
 dropCourses.push({key:course.key})
  }
  else
  {
  dropCourses = dropCourses.filter((c)=>
{
  return c.key !== course.key
})
  }
   this.setState({selectedCourses:clone, dropCourses});
}
handleDrop(){
  let  {dropCourses} = this.state
  dropCourses.map((course)=>
{
  firebase.database().ref().child('registration').child(this.state.userId).once('value', (snapshot)=>{
  snapshot.forEach((childSnapShot)=>{
    if(childSnapShot.val() === course.key){
      childSnapShot.ref.remove()
    }
  })
})
})
}

handleDelete (){
  let  {selectedCoursesID} = this.state
  selectedCoursesID.map((course)=>
{
  firebase.database().ref().child('preregistration').child(this.state.userId).once('value', (snapshot)=>{
  snapshot.forEach((childSnapShot)=>{
    if(childSnapShot.val() === course.key){
      childSnapShot.ref.remove()
    }
  })
})
})
this.setState({selectedCoursesID:[]})
}
handleSelect(event){
  event.preventDefault();
  selected:true
}

handleSubmit (event) {

  event.preventDefault();
 const  {selectedCoursesID} = this.state;
 selectedCoursesID.map((course)=>
{
  firebase.database().ref().child('registration').child(this.state.userId).push(course.key)
})

this.handleDelete()
this.handleDrop()
this.readRegistration()
}

hideCourse(){
  console.log(this.state.courses);
firebase.database().ref().child('preregistration').child(this.state.userId).on('child_removed',(snapShot)=>{
   this.courses = this.state.selectedCourses.filter((course)=>
    {
console.log(snapShot.val())
     return course.key !== snapShot.val()

   })
console.log(this.courses);
    this.setState({courses:this.courses})
 })
 firebase.database().ref().child('registration').child(this.state.userId).on('child_removed',(snapShot)=>{ this.courses=[]
    this.courses = this.state.selectedCourses.filter((course)=>
     {

      return course.key !== snapShot.val()

    })

     this.setState({selectedCourses:this.courses})
  })


}


readCourses (department){

  this.courses=[]
  this.setState({courses:[],copyCourses:[]})
  var ref = firebase.database().ref().child('courses').orderByChild("department").equalTo(department)
  ref.on('child_added', (snap)=>{
      this.courses.push({
        selected:false,
         key:snap.key,
          title:snap.val().title,
          code:snap.val().code, credit:snap.val().credit,description:snap.val().description,level:snap.val().level,semester:snap.val().semester
      })
      this.setState({courses:this.courses, copyCourses:this.courses})

  })


}
readPreRegistration (){
  this.preRegistration=[]
  this.courses=[]
  firebase.database().ref().child("preregistration").child(this.state.userId).once('value', (snapshot)=>
  {
    snapshot.forEach((childSnapShot)=> {
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
          this.setState({courses:this.courses})

      })
    })
  })
}
readRegistration(){
  let selectedCourses=[];
  firebase.database().ref().child("registration").child(this.state.userId).once('value', (snapshot)=>
  {
    snapshot.forEach((childSnapShot)=> {
      var ref = firebase.database().ref().child('courses').child(childSnapShot.val())
      ref.once('value', (snap)=>{
          selectedCourses.push({
            key:snap.key,
            title:snap.val().title,
            code:snap.val().code,
            credit:snap.val().credit,
            description:snap.val().description,
            level:snap.val().level,
            semester:snap.val().semester,
            selected: false
          })
          this.setState({selectedCourses})

      })
    })
  })

}

//var add = ('select option[selected="selected"]').val();
//var drop=[drop];
  render(){
    return(
      <div id="page-wrapper">
        <Auth />
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
                Class Registration</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Class Registration</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
      <div id="tab-general">
        <div className="row mbl">
          <div className="col-md-12 col-sm-12 col-lg-12 ">
            <div className="row">
              <input className="form-control" id="num_pre" type="hidden" value="1" />

              <div className="dataTable_wrapper">
                {this.state.courses.length !==0 ?
                  <div>  <h1 className="text-center">Added Classes</h1>
              <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                      <tr>
                      <th>Registration</th>
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
                          <td>
                            <div  className="row">
                              <div className="col-sm-6">
                              <input
                              type="checkbox"
                              value={course.key}
                              name="check_list[]"
                              checked={course.selected}
                              onClick={(event) => {this.handleCheckboxClick(event,course, key)}} />
                             &nbsp;&nbsp;&nbsp;
                           </div>
                            <div className="col-sm-6"><a><i className="fa fa-close" href="#" id="dropclassName" ></i></a></div>
                          </div>


        </td>
                        <td>{course.title}</td>
                        <td>{course.code}</td>
                        <td>{course.credit}</td>
                        <td>{course.description}</td>
                        <td>{course.semester}</td>
                      </tr>
                      )}
                  </tbody>
                  </table>
                </div> : <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                </div>
                </div>
              }
              </div>




<h1 className="text-center">Registered Classes</h1>
<div className="panel-body">
<div className="dataTable_wrapper">
<table className="table table-striped table-bordered table-hover" id="dataTables-example">

    <thead>
        <tr>
          <th>Drop</th>
         <th>Course Title</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Description</th>
        <th>Semester</th>
        </tr>
    </thead>
    <tbody>
      {this.state.selectedCourses.map((course, key)=>

          <tr key={key}>
            <td>
              <input
                type="checkbox"
                checked={course.selected}
                value={course.key}
                onClick={(event) => {this.handleDropBox(course, key)}}
                name="check_list[]"
            />
            &nbsp;&nbsp;&nbsp;<a  href="#" id="dropclassName" ></a></td>
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
    <div className="container" style={{marginBottom:50}} >

      <button type="button" name="register" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>&nbsp;

      <Link className="btn btn-danger" to="/advising">Close</Link>
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
