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
    registeredCourses:[],
    add:[],
    userId: '',
    drop:[],
    courseIds: [],
    selectedCoursesID: [],
    selectedCourses:[],
    dropCourses:[],
    selected:false
    }
    this.handleCheckboxClick=this.handleCheckboxClick.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleRemove=this.handleRemove.bind(this)
}
componentDidMount ()  {
  let unsubscribe = firebase.auth().onAuthStateChanged(this.handleUser.bind(this));
  unsubscribe();

}
handleUser(user){
  if(user){
    this.setState({userId:user.uid}, () => {
      this.readPreRegistration()
      this.readRegistration()
      console.log(this.state);
    })

  }
}
handleCheckboxClick (course, key) {
   //Same as handleDropBox below :-)
    course.selected = !course.selected;
    var clone = this.state.courses
    clone[key] = course
    let {selectedCoursesID} =this.state
     course.selected ? selectedCoursesID.push({key:course.key}) : selectedCoursesID = selectedCoursesID.filter((c)=> { return c.key !== course.key})
     this.setState({courses:clone, selectedCoursesID});
}
handleDropBox(course, key){
      course.selected = !course.selected; //Negate the value of the checkbox
      var clone = this.state.selectedCourses //Make a clone of the state variable
      clone[key] = course //Update the item at the index[key]
      let {dropCourses} =this.state
      //Determine if the box was checked or unchecked (add to dropCourses list or remove from it)
      course.selected ? dropCourses.push({key:course.key}) : dropCourses = dropCourses.filter((c)=> {return c.key !== course.key })
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
          this.hideCourse(course.key, 'drop') //Remove the course being dropped from the registration db
        }
      })
    })
    })
}

handleDelete (){
    let  {selectedCoursesID} = this.state
    selectedCoursesID.map((course)=> {
    firebase.database().ref().child('preregistration').child(this.state.userId).once('value', (snapshot)=>{
    snapshot.forEach((childSnapShot)=>{
      if(childSnapShot.val() === course.key){
        childSnapShot.ref.remove() //Delete course using its reference
        this.hideCourse(course.key, 'register')
        }
      })
    })
  })
  this.setState({selectedCoursesID:[]})
}
//Handle submit event
handleSubmit (event) {

  // TODO: I have completed most of the functionalities. However, I wanted to let you think about how you can prevent a student from registering more than once into one class.
  // TODO: While it may be unthoughtful for students to do so, accidents happen, and some people outrightly try to just see what happens.
  //Hint: The key to solving this lies in the fact that we are storing every registered class under the user/student. Good luck! :-)

  event.preventDefault();
   const  {selectedCoursesID} = this.state;
   selectedCoursesID.map((course)=> {
     firebase.database().ref().child('registration').child(this.state.userId).push(course.key)//Store the registered course under the userId
     firebase.database().ref().child('registeredCourses').child(course.key).push(this.state.userId)//Store the userId under the course for course activities
    })

  this.handleDelete() //Delete the courses that were selected to be registered from the preregistration db
  this.handleDrop() //Delete the courses that were selected for drop from the registration db
  this.handleRemove()
  this.readRegistration() //Retrieve and display the current list of registered classes

}
//Remove courses from the display once they have been either registered or drop
hideCourse(key, type){
  if (type === 'register'){ //If the user is registering for a class
    this.remainder = this.state.courses.filter((c)=>{ return c.key !== key}) //Filter the courses, return only the ones that haven't been registered
    this.setState({courses:this.remainder})//Change the state of the courses being displayed
  }else if (type === 'drop'){
    this.remainder = this.state.selectedCourses.filter((c)=>{ return c.key !== key})//Filter the courses and return only the ones the user is not dropping
    this.setState({selectedCourses:this.remainder})
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
          this.setState({courses:this.courses}) //Store the information for display

      })
    })
  })
}
readRegistration(){ //Retrieve the already registered classes from  the firebase db
  let selectedCourses=[];
  firebase.database().ref().child("registration").child(this.state.userId).once('value', (snapshot)=> //Retrieve the Id's of the classes the user has registered
  {
    snapshot.forEach((childSnapShot)=> { //Same as above
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
handleRemove(){
  let  {dropCourses} = this.state
dropCourses.map((course)=> {
  firebase.database().ref().child('registeredCourses').child(course.key).once('value', (snapshot)=>{
  snapshot.forEach((childSnapShot)=>{
    if(childSnapShot.val() === this.state.userId){
      childSnapShot.ref.remove() //Delete course using its reference
      //this.hideCourse(course.key, 'drop')
      }
    })
  })
})
this.setState({selectedCoursesID:[]})
}
handleRemoveCourse(key){
  //Remove course from firebase
  firebase.database().ref().child('preregistration').child(this.state.userId).once('value', (snapshot)=>{ //Retrieve all preregistered courses at once
    snapshot.forEach((childSnapShot)=>{ //Loop through each course using forEach
      if(childSnapShot.val()===key) childSnapShot.ref.remove() //Remove the course with the specified key
    })
  })
  this.hideCourse(key, 'register') //Remove from the table
}
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
                              onClick={(event) => {this.handleCheckboxClick(course, key)}} />
                             &nbsp;&nbsp;&nbsp;
                           </div>
                            <div className="col-sm-6"><span style={{cursor:'pointer'}} onClick={()=>this.handleRemoveCourse(course.key)} className="fa fa-close" href="#" id="dropclassName" ></span></div>
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
{this.state.selectedCourses.length !== 0 ? <div className="panel-body">
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
</div> : <div className="col-sm-4 col-sm-offset-4"><p  className="text-center lead">There are no registered courses</p>
<div className="text-center" >
  <button type="button" name="register" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>&nbsp;
  <Link className="btn btn-danger" to="/advising">Close</Link>
</div>
</div>}

</div>
        </div>
    </div>
        </div>
      </div>
    </div>
    )
  }
}
