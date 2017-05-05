import React, {Component} from 'react'
import { Link,Redirect } from 'react-router-dom'
import './css/style.css'
import logo from './images/logo.png'
export class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      redirect:false,
    }
    this.handleChange = this.handleChange(this)
  }
  handleSubmit () {
    this.setState({redirect:true})
  }
  handleChange (event) {

  }
  render() {
    return (
      this.state.redirect ? <Redirect to="/home" push /> : <div className="wrapper">
        <div className="container">
          <h1><strong>WELCOME TO</strong></h1>
          <img width="200px" src={logo} alt=""/>
          <form className="form" onSubmit={() => this.handleSubmit()}>
            <div className="styled-input">
              <input type="text" required name="email" placeholder = "Email" />
            </div>
            <div className="styled-input wide">
              <input type="password" required name="password" placeholder="Password" />
            </div>
            <button id="login-button" type="submit" name="submit">Login</button>
            <div><p className="password" ><Link to="/home">Forgot Password</Link></p>
          </div>
          <div><p className="password" ><Link to="/home">New User</Link></p></div>
          <br/>
          <br/>
          <p className="ptext">If this is your first time visiting, click on New User!</p>
        </form>
        <br/>
        <p>Copyrights &copy; Afridash.com</p>
      </div>
      <ul className="bg-bubbles">
        <li><span className="glyphicon glyphicon-inbox" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-home" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-calender" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-grade" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-phone" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-home" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-inbox" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-comment" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-calender" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-grade" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-phone" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-home" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-inbox" style={{fontSize:70}}></span></li>
        <li><span className="glyphicon glyphicon-comment" style={{fontSize:70}}></span></li>
      </ul>
    </div>
    );
  }
}
