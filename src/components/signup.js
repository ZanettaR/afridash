import React, {Component} from 'react'
//import Redirect to redirect on login
//import Link for linking navigation
import { Link,Redirect } from 'react-router-dom'
//import unique style for login
import './css/style.css'
//import logo from images
import logo from './images/logo.png'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export default class extends Component {
 constructor (props) {
    super(props);
    this.auth = firebase.auth()
    this.picture = "https://firebasestorage.googleapis.com/v0/b/afridash-10697.appspot.com/o/users%2Fdefaults%2FDefault.jpg?alt=media&token=8f9d5042-62fe-40b3-b702-853b67206c11"
    //Use to monior states
    this.state = {
      email:'',
      password1:'',
      password2:'',
      redirect:false,
      isError:false,
      error:'Minimum of 6 characters allowed for password',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleError = this.handleError.bind(this)
  }
  //Fetch user info using fetch
  async fetchUserInfo () {
  try {
      let response = await fetch('http://afridash.com/afridash/signup.php',{
        method:'POST',
        mode:'cors',
        headers:{
          'Accept': 'application/json',

        },
        body: JSON.stringify({
          email:this.state.email,
        })
      });
      let responseJson = await response.json();
      if(responseJson.id){
        //Handle data returned from fetch
        console.log(responseJson)
        this.setState({firstName:responseJson.firstName, lastName:responseJson.lastName,idNumber:responseJson.id_number,country:responseJson.country,
        address:responseJson.address,admissionYear:responseJson.admissionYear,bio:responseJson.bio,city:responseJson.city,college:responseJson.college,
        department:responseJson.department,dob:responseJson.dob,emergencyContact:responseJson.emergencyContact,emergencyNumber:responseJson.emergencyNumber,
        middleName:responseJson.middleName,gender:responseJson.gender, graduationYear:responseJson.graduationYear, level:responseJson.level,
        phone:responseJson.phone,state:responseJson.state, retrievedData:true})
      }
    }catch(error) {
      this.setState({error:"Registration was Unsuccessful", retrievedData:false})
      console.log(error)
    }
  }
  async handleSubmit (event) {
    //handle the form submit
    event.preventDefault()//Prevent the form from submitting by default
    if(this.state.password1 !== this.state.password2){
      this.setState({error:"Passwords must match"})
    }else{
      await this.fetchUserInfo()
      //If the user data was retrieved using fetchUserInfo, create a new user
      if(this.state.retrievedData){
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password2).catch(this.handleError)
        if(!this.state.isError) {
          var user = firebase.auth().currentUser;
          console.log(user)
             user.updateProfile({
              displayName: this.state.firstName + " "+this.state.lastName,
              photoURL:this.picture
            }).then(function() {
              // Update successful.
            }, function(error) {
              // An error happened.
            });
          this.saveUserInfo(user.uid)
         this.setState({redirect:true})
       }
      }
   }
  }
  saveUserInfo (user) {
    var data = {
      firstName: this.state.firstName,
      lastName:this.state.lastName,
      email: this.state.email,
      college : this.state.college,
      admissionYear:this.state.admissionYear,
      graduationYear:this.state.graduationYear,
      department:this.state.department,
      city:this.state.city,
      country:this.state.country,
      phone:this.state.phone,
      profilePicture:this.picture,
      status:"",
      bio:this.state.bio,
      gender:this.state.gender,
      idNumber:this.state.idNumber,
      level:this.state.level,
      state:this.state.state,
      middleName:this.state.middleName,
      address:this.state.address,
      dob:this.state.dob,
      emergencyNumber:this.state.emergencyNumber,
      emergencyContact:this.state.emergencyContact,
    }
    firebase.database().ref('users/' + user).set(data);
  }
  handleError (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    this.setState({error:errorMessage, isError:true})
  }
  handleEmailChange (event) {
    this.setState({email: event.target.value})
  }
  handlePassword2Change (event) {
    this.setState({password2: event.target.value})
  }
  handlePassword1Change (event) {
    this.setState({password1: event.target.value})
  }
  render() {
    return (
  this.state.redirect ? <Redirect to="/home" push /> : <div className="wrapper">
    <div className="wrapper">
	<div className="container">
    <img width="200px" src={logo} alt=""/>
		<h1 style={{color:'white'}}><strong>REGISTRATION</strong></h1>
		<form className="form" onSubmit={this.handleSubmit} >
      <p style={{color:'white'}}>{this.state.error}</p>
    <div className="styled-input">
    <input type="text" onChange={this.handleEmailChange.bind(this)} name="email" placeholder=" School Email" />
    </div>
      <div className="styled-input wide">
      <input type="password" onChange={this.handlePassword1Change.bind(this)} name="password1" placeholder="Password"/>
      </div>
        <div className="styled-input wide">
        <input type="password" onChange={this.handlePassword2Change.bind(this)} name="password2" placeholder="Confirm Password"/>
        </div>
      <button type="submit" onClick={this.handleSubmit} id="login-button" name="register">Register</button>
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
