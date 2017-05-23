import React, {Component} from 'react'
//import Redirect to redirect on login
//import Link for linking navigation
import { Link,Redirect } from 'react-router-dom'
//import unique style for login
import './css/style.css'
//import logo from images
import logo from './images/logo.png'
export default class extends Component {
 constructor (props) {
    super(props);
    //Use to monior states
    this.state = {
      first_name:'',
      last_name:'',
      email:'',
      mat_number:'',
      password1:'',
      password2:'',
      redirect:false,
    }
    this.handleChange = this.handleChange(this)
  }

  handleRegister () {
    //Change states using setState
    this.setState({redirect:true})
  }
  handleChange (event) {

  }
  render() {
    return (
        this.state.redirect ? <Redirect to="/home" push /> : <div className="wrapper">


    <div className="wrapper1">
	<div className="container1">
		<h1 style={{color:'white'}}>REGISTRATION</h1>

		  <form className="form" onSubmit={() => this.handleRegister()} >
    <div className="styled-input">
    <input type="text" name="email" placeholder=" School Email" />
    </div>
      <div className="styled-input wide">
      <input type="password" name="password1" placeholder="Password"/>
      </div>
        <div className="styled-input wide">
        <input type="password" name="password2" placeholder="Confirm Password"/>
        </div>
      <button type="submit" id="login-button" name="register">Register</button>
      <div><p className="password" ><Link to="/login">Back</Link></p></div>
  </form>
		<br/>
		<br/>
		<br/>
		<p style={{color:'white'}}>Copyrights &copy; Afri-Dash.com</p>
	</div>

	<ul className="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>

</div>
);
  }
}
