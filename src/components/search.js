import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export class Search extends Component{

    constructor(props){
      super(props)
      this.user = firebase.auth().currentUser
      this.courses = []
      this.state = {
        department:'',
        level:'none',
        courses:[],
        copyCourses:[],
        departments:[],
        selected:false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSelect=this.handleSelect.bind(this)
      this.handleLevel=this.handleLevel.bind(this)
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

    async componentWillMount () {
        await firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
      }

  handleUser (user) {
   if (user) {
     this.setState({userId:user.uid})
     this.readDepartments()
   }
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
            title:snap.val().title,code:snap.val().code, credit:snap.val().credit,description:snap.val().description,level:snap.val().level,semester:snap.val().semester

          })
          this.setState({courses:this.courses, copyCourses:this.courses})

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
<select className="form-control" id="sel1" onChange={this.handleSelect} name="subject">

<option></option>
{this.state.departments.map((department, key) =>
<option value={department.name} key={key} >{department.name}  </option>
)}

</select>
<br />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label htmlFor="sel1">Level:</label>
<select className="form-control" id="sel2" onChange={this.handleLevel} name="level">
{this.state.selected ? <option selected></option> : <option></option> }
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
 <div id="Result"><div className="panel-body">
        <div className="dataTable_wrapper">
            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                <thead>
                    <tr>
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
    </div>
 </div>
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
