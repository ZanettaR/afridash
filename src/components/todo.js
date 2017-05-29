import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export class ToDo extends Component {
  constructor(props){
    super(props)
    this.user = firebase.auth().currentUser
    this.todos = []
    this.state = {
      title:'',
      description:'',
      todos:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event){
    event.preventDefault()
    var date=document.getElementById('dateVal').value
    var data = {
      title:this.state.title,
      description:this.state.description,
      date:date
    }
    var ref = firebase.database().ref().child('todos').child(this.state.userId).push()
    ref.setWithPriority(data, 0 - Date.now())
    this.setState({title:'',description:''})
    document.getElementById('title').focus()
    this.setState({status:'Successfully Added a To-Do Item'})
    this.readToDo()
  }
  handleChange (event) {
    this.setState({
      [event.target.name] :event.target.value
    })

  }
  async componentWillMount () {
    await firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.src   = "/script/todo.js";    // use this for linked script
    document.body.appendChild(s);
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "/script/prism.js";    // use this for linked script
    document.body.appendChild(script);
    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.src   = "/script/BeatPicker.min.js";    // use this for linked script
    document.body.appendChild(s);
  }
  handleUser (user) {
   if (user) {
     this.setState({userId:user.uid})
     this.readToDo()
   }
  }
  readToDo () {
    this.todos=[]
    this.setState({todos:[]})
    var ref = firebase.database().ref().child('todos').child(this.state.userId)
    ref.on('child_added', (snap)=>{
        this.todos.push({key:snap.key, date:snap.val().date, description:snap.val().description, title:snap.val().title})
        this.setState({todos:this.todos})
    })
  }
  handleEdit (key){
    alert(key)
  }
  handleDelete (key) {
    alert(key)
  }
  render() {
    return (
      <div style={{marginTop:-16,}} className="row">
        <h1 className="todoHeader"> My To-Do List </h1>
         <ul className="nav nav-tabs" role="tablist">
           <li role="presentation" className="active"><a href="#toDo" aria-controls="home" role="tab" data-toggle="tab">To Do</a></li>
           <li role="presentation"><a href="#addNew" aria-controls="profile" role="tab" data-toggle="tab">Add New</a></li>
         </ul>
         <div className="tab-content">
           <div role="tabpanel" className="tab-pane active" id="toDo">
             <div className="panel-group" id="accordion">
               {this.state.todos.map((todo,key)=>
                 <div className="panel panel-info">
                   <div className="panel-heading">
                     <h4 className="panel-title">
                       <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+key}>{todo.title} ***** {todo.date}</a>
                     </h4>
                   </div>
                   <div id={"collapse"+key}className="panel-collapse collapse">
                     <div className="panel-body">
                       <p>{todo.description}</p>
                     </div>
                     <div className="panel-footer">
                       <span onClick={()=>this.handleDelete(todo.key)} className="fa fa-remove btn btn-danger"> Delete</span>&nbsp;&nbsp;
                       <span onClick={()=>this.handleEdit(todo.key)} className="fa fa-pencil btn btn-primary"> Edit</span>
                     </div>
                   </div>
                 </div>
               )}
             </div>
           </div>
           <div role="tabpanel" className="tab-pane fade" id="addNew">
                <span>{this.state.status}</span>
				         <form className="form-vertical" method="post" onSubmit={this.handleSubmit}>
			              <div className="form-group">
		                    <label htmlFor="title" > Title</label>
	                          <input onChange={this.handleChange} value={this.state.title} className="form-control" type="text" name="title" id="title"/>
                             </div>
                      <div className="form-group">
                          <label htmlFor="date"> Date</label>
                            <input style={{width:150,}}  id="myDate" value="Pick a date"  type="text"  />
                            <input style={{display:'none'}} name="due_date" type="text" id="dateVal" className="form-control" />
                             </div>
                      <div className="form-group">
						             <label htmlFor="description" > Description</label>
						               <textarea onChange={this.handleChange} value={this.state.description} className="form-control" name="description" id="description" rows="4" cols="35"></textarea>
					              </div>
					             <div className="form-group">
						           <input style={{width:80}} type="submit" className=" btn btn-primary addEntry" name="addEntry" id="addEntry" value="Save" />
					             </div>
				             </form>
                   </div></div>
      </div>
    )
  }
}
