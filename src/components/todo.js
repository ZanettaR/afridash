import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export class ToDo extends Component {
  componentWillMount () {
    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.src   = "/script/todo.js";    // use this for linked script
    document.body.appendChild(s);
  }
  render() {
    return (
      <div>
        <h1> My To-Do List </h1>
         <ul className="nav nav-tabs" role="tablist">
           <li role="presentation" className="active"><a href="#toDo" aria-controls="home" role="tab" data-toggle="tab">To Do</a></li>
           <li role="presentation"><a href="#addNew" aria-controls="profile" role="tab" data-toggle="tab">Add New</a></li>
         </ul>
         <div className="tab-content">
           <div role="tabpanel" className="tab-pane active" id="toDo">
             <div className="panel-group" id="accordion">
               <div id="todoListItems"></div>
               <p className='zerowarning'>There are zero items. Add one now!</p>
             </div>
           </div>
           <div role="tabpanel" className="tab-pane fade" id="addNew">
				         <form className="form-vertical" action="" method="post">
			              <div className="form-group">
		                    <label htmlFor="title" > Title</label>
	                          <input className="form-control" type="text" name="title" id="title" className="input"/>
                             </div>
                      <div className="form-group">
                          <label htmlFor="date"> Date</label>
                            <input className="form-control" type="date" name="date" id="date" className="input"/>
                             </div>
                      <div className="form-group">
						             <label htmlFor="description" > Description</label>
						               <textarea className="form-control" name="description" id="description" rows="4" cols="35"></textarea>
					              </div>
					             <div className="form-group">
						           <input type="button" className=" btn btn-primary addEntry" name="addEntry" id="addEntry" value="Save To-Do" />
					             </div>
				             </form>
                   </div></div>
      </div>
    )
  }
}
