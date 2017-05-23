import React, {Component} from 'react'
//import Redirect to redirect on login
//import Link for linking navigation
import { Link,Redirect } from 'react-router-dom'
//import unique style for login
import './css/style.css'
//import logo from images
import logo from './images/logo.png'
export class Login extends Component {
  constructor (props) {
    super(props);
    //Use to monior states
    this.state = {
      email:'',
      password:'',
      redirect:false,
    }
    this.handleChange = this.handleChange(this)
  }
  handleSubmit () {
    //Change states using setState
    this.setState({redirect:true})
  }
  handleChange (event) {

  }
  render() {
    return (
      this.state.redirect ? <Redirect to="/home" push /> : <div className="wrapper">
        <div className="container">
          <h1 style={{color:'white'}}><strong>WELCOME TO</strong></h1>
          <img width="200px" src={logo} alt=""/>
          <form className="form" onSubmit={() => this.handleSubmit()}>
            <div className="styled-input">
              <input type="text" required name="email" placeholder = "Email" />
            </div>
            <div className="styled-input wide">
              <input type="password" required name="password" placeholder="Password" />
            </div>
            <button id="login-button" type="submit" name="submit">Login</button>
            <div><p className="password" ><Link to="/signup">Sign Up</Link></p></div>
            <div><p className="password" ><Link to="/reset">Forgot Password</Link></p>
          </div>
          <br/>
          <br/>
          <p style={{color:'white'}}  className="ptext">If this is your first time visiting, please sign up</p>
        </form>
        <br/>
        <p style={{color:'white'}}>Copyrights &copy; Afridash.com</p>
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
    );
  }
}
