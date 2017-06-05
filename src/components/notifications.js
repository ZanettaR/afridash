import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
import Auth from '../jsHelpers/auth'
import * as TimeStamp from '../jsHelpers/timestamp'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
export class Notifications extends Component {
  constructor(props){
    super(props)
    this.state = {
      notifications:[],
      userId:''
    }
    this.notificationsRef = firebase.database().ref().child('notifications')
    this.usersNotif = firebase.database().ref().child('user_notifications')
    firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
  }
  handleUser (user) {
    if(user) {
      this.setState({userId:user.uid})
      this.listenForNotifications ()
    }
  }
  listenForNotifications () {
    this.notifications = []
    this.usersNotif.child(this.state.userId).on('child_added', (snapShot)=>{
      this.notificationsRef.child(snapShot.val()).once('value', (notif)=>{
        this.notifications.push({createdAt:notif.val().createdAt, displayName:notif.val().displayName, postId:notif.val().postId, profilePicture:notif.val().profilePicture, type:notif.val().type, userId:notif.val().userKey})
        this.setState({notifications:this.notifications})
      })
    })
  }
  showNotifications (notification, key){
    switch (notification.type) {
      case 'post_like':
        return this.showPostLike (notification, key)
        break
      case 'comment':
         return this.showComment (notification,key)
         break
      case 'comment_like':
         return this.showCommentLike (notification, key)
      default:
      return null

    }
  }
  showPostLike (notification, key) {
    return (
      <Link to={"/post/"+notification.postId}>
      <div className="display_pan" style={{marginTop:2}}>
      <img src={notification.profilePicture} style={{width:40,height:40, borderRadius:20, backgroundColor:'red',margin:15}} />
      <span style={{fontSize:14}} >{notification.displayName} liked your post <i style={{margin:20}} className="pull-right">{TimeStamp.timeSince(notification.createdAt)}</i></span>
      </div>
    </Link>
    )
  }
  showComment (notification, key) {
    return (
      <Link to={"/post/"+notification.postId}>
      <div className="display_pan" style={{marginTop:2}}>
      <img src={notification.profilePicture} style={{width:40,height:40, borderRadius:20, backgroundColor:'red',margin:15}} />
      <span style={{fontSize:14}} >{notification.displayName} commented on your post <i style={{margin:20}} className="pull-right">{TimeStamp.timeSince(notification.createdAt)}</i></span>
      </div>
    </Link>
  )
  }
  showCommentLike (notification, key) {
    return (
      <Link to={"/post/"+notification.postId}>
      <div className="display_pan" style={{marginTop:2}}>
      <img src={notification.profilePicture} style={{width:40,height:40, borderRadius:20, backgroundColor:'red',margin:15}} />
      <span style={{fontSize:14}} >{notification.displayName} liked your comment on a post <i style={{margin:20}} className="pull-right">{TimeStamp.timeSince(notification.createdAt)}</i></span>
      </div>
    </Link>
    )
  }
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
         <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
             <div className="page-header pull-left">
                 <div className="page-title">Notifications</div>
             </div>
             <ol className="breadcrumb page-breadcrumb pull-right">
                 <li><i className="fa fa-home"></i>&nbsp;<a href="/">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                 <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                 <li className="active">Notifications</li>
             </ol>
             <div className="clearfix">
             </div>
         </div>
         <div className="page-content">
           <div className="row" style={{border:'10px'}}>
             <div className="col-sm-8 col-sm-offset-2">
             {this.state.notifications.map((notification, key)=>
               this.showNotifications(notification,key)
             )}
           </div>
         </div>
        </div>
    </div>
    );
  }
}
