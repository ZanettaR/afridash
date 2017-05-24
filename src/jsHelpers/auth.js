import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
const firebase = require('firebase')
import {Firebase} from './firebase'
export default class UserAuth extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn:true,
    }
    this.handleUser = this.handleUser.bind(this)
  }
  async componentDidMount () {
     firebase.auth().onAuthStateChanged (this.handleUser)
  }
  async handleUser (user) {
    if(user){
      this.setState({loggedIn:true,})
    }else{
      this.setState({loggedIn:false})
    }
  }
  render () {
    return (
      this.state.loggedIn ? <div></div> : <Redirect to="/login" push/>
    )
  }
}
