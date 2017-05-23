import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './css/style.css'
import logo from './images/logo.png'

export class Forgot extends Component{
  constructor (props) {
    super(props);
    this.state={
      email:'',
      redirect:false,
    }
    this.handleChange = this.handleChange(this)
  }

  handleSubmit() {
    this.setState({redirect:true})
  }

  handleChange(event) {

  }

  render(){
    return(
      this.state.redirect ? <Redirect to="/login" push /> :
      <div className="wrapper">
	  <div className="container">
		<img width="200px" src={logo} alt="" />

		<form id="myform" className="form" onSubmit={()=> this.handleSubmit()}>
		<div className="head">
		</div>
      <div className="styled-input">
			<input  type="text" required name="email" placeholder="School Email" />
            <span></span>
            </div>
            <div className="styled-input">
              <br/>
      <button type="submit" id="login-button" name="submit">Reset Password</button>
    <div><p className="password" ><Link to="/login">Back</Link></p></div>
      <br/>
      <p style={{color:'white'}} className="ptext">A password reset link will be sent to the email you provide after you hit the reset button!</p>
			<br/>
			<br/>

		<br/>
		<br/>
		<br/>
    <br/>
		<br/>
		<p style={{color:'white'}}>Copyrights &copy; Afridash.com</p>
	</div>
</form>
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
