import React, {Component} from 'react'
//import Redirect to redirect on login
//import Link for linking navigation
import { Link,Redirect, } from 'react-router-dom'
//import unique style for login
import './css/style.css'
//import logo from images
import logo from './images/logo.png'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export class Login extends Component {
  constructor (props) {
    super(props);
    //Use to monior states
    this.auth = firebase.auth()
    this.state = {
      email:'',
      password:'',
      error:'',
    }
    this.handleUser = this.handleUser.bind(this)
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(this.handleUser)
  }
  handleUser(user){
    if(user){
      this.setState({redirect:true})
    }
  }
  async handleSubmit (event) {
    event.preventDefault()
      var loggedInError = false
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      loggedInError=true
    })
    if(!loggedInError){
      this.setState({redirect:true})
    }else{
      this.setState({error:"Password and Email Do Not Match"})
    }
  }
  handleEmailChange (event) {
    this.setState({email: event.target.value})
  }
  handlePasswordChange (event){
    this.setState({password: event.target.value})
  }
  render() {
    return (
      this.state.redirect ? <Redirect to="/" push /> : <div className="wrapper">
        <div className="container">
          <h1 style={{color:'white'}}><strong>WELCOME TO</strong></h1>
          <img width="200px" src={logo} alt=""/>
          <form className="form" onSubmit={(event)=>this.handleSubmit(event)}>
            <p style={{color:'white'}}>{this.state.error}</p>
            <div className="styled-input">
              <input type="text" onChange={this.handleEmailChange.bind(this)} required name="email" placeholder = "Email" />
            </div>
            <div className="styled-input wide">
              <input type="password" onChange={this.handlePasswordChange.bind(this)} required name="password" placeholder="Password" />
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
