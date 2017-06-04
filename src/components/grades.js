import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
import Auth from '../jsHelpers/auth'

export class Grades extends Component {
  constructor (props){
    super(props)
    this.courseRef = firebase.database().ref().child('courses')
    this.myRef = firebase.database().ref().child('trialClasses')
    this.courses=[]
    this.state = {
      courses:[]
    }
  }
  async componentWillMount () {
    await firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
  }
  handleUser(user){
    if(user){
      this.setState({userId:user.uid})
      this.readCourses()
    }
  }
  readCourses(){
    this.myRef.child(this.state.userId).once('value',(snap)=>{
      snap.forEach((childSnap)=>{
        this.courseRef.child(childSnap.val()).once('value', (snapShot)=>{
          this.courses.push({title:snapShot.val().title, key:snapShot.key})
          this.setState({courses:this.courses})
        })
      })
    })
  }
  /*writeCourse() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      department: this.state.department,
      credit: this.state.credit,
      level: this.state.level,
      code:this.state.code,
      semester: this.state.semester

    }
    this.courseRef.push(data)
  }
  writeDept() {
   firebase.database().ref().child('departments').push(this.state.department)
  }
  writeCollege() {
   firebase.database().ref().child('colleges').push(this.state.college)
  }

  readCourses(){
    this.courseRef.once('value', (snap) => {
      snap.forEach((childSnap)=>{

      })
    })
  }
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.writeCollege()
    this.writeDept()
    this.writeCourse()
  }*/

  render() {
    return (
      <div id="page-wrapper">
        <Auth />
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
                Select A Class To Grade</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Grades</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
        <div className="row">
          <ul className="list-group">
            {this.state.courses.map((course)=>
              <li className="list-group-item"><Link to={"/grading/"+course.key}>{course.title}</Link></li>
             )}
        </ul>
        </div>
      </div>
    </div>
    )
  }
}
