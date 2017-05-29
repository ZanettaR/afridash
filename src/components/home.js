import React, {Component} from 'react'
import Lightbox from 'react-image-lightbox';
import {browserHistory, Link,Redirect } from 'react-router-dom'
import {ToDo} from './todo'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
import Auth from '../jsHelpers/auth'
import comment from './images/comment.png'
import heart from './images/heart.png'
import share from './images/share.png'
import repost from './images/repost.png'
import addPost from './images/pencil.png'
import imageU from './images/image.png'
import FileReaderInput from 'react-file-reader-input'
import * as TimeStamp from '../jsHelpers/timestamp'
export class Home extends Component {
  constructor(props){
    super(props)
    this.auth = firebase.auth()
    this.postsRef = firebase.database().ref().child('posts')
    this.userPosts = firebase.database().ref().child('usersPosts')
    this.state = {
      name:'Richard',
      loggedIn:true,
      file:"",
      post:"",
      mime:"",
      posts:[],
    }
    this.posts=[]
    this.handlePost = this.handlePost.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  loadJS () {
    var s   = document.createElement("script");
    s.type  = "text/javascript";
    s.src   = "/script/dashboard.js";    // use this for linked script
    document.body.appendChild(s);
  }
  async componentWillMount () {
    await firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
    this.loadJS() //load local javascript
  }
  handlePost (event) {
  this.setState({post:event.target.value})
}
  handleSubmit (event){
    event.preventDefault()
    this.sharePost()
  }
  async sharePost () {
    var uploadTask
    if(this.state.file !== '' && this.state.post !==''){
      const sessionId = new Date().getTime()
      var ref=firebase.storage().ref().child('attachments/').child(`${sessionId}`)
       ref.putString(this.state.file, 'data_url').then(this.sendWithAttachment.bind(this))
    }else if(this.state.post !==''){
      var postData = {
        userId: this.state.userId,
        post: this.state.post,
        starCount: 0,
        profilePicture: this.state.profilePicture,
        attachment : '',
        attachmentType: this.state.mime,
        username:this.state.username,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      }
      var newPostKey = firebase.database().ref().child('posts').push(postData).key
      let Ref = firebase.storage().ref('posts/attachments/' + newPostKey)
      var item = firebase.database().ref('/usersPosts/' + this.state.userId).push()
      item.setWithPriority(newPostKey, 0 - Date.now())
      this.setState({post:''})
      this.refreshPosts()
    /*  this.state.friends.map((friend) => {
        var item = firebase.database().ref('/users_posts/' + friend.id).push()
        item.setWithPriority(postData, 0 - Date.now())
      })
      if (this.state.attachment !== '') {
        //await saveAttachment(this.state.attachment, Ref, this.state.mime).then(url => {
        //  firebase.database().ref().child('posts').child(newPostKey).update({attachment: url})
        //})
      }*/

    }
    }
  sendWithAttachment (snapshot,post) {
      var postData = {
        userId: this.state.userId,
        post: this.state.post,
        starCount: 0,
        profilePicture: this.state.profilePicture,
        attachment :snapshot.downloadURL,
        attachmentType: this.state.mime,
        username:this.state.username,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      }
      var newPostKey = firebase.database().ref().child('posts').push(postData).key
      let Ref = firebase.storage().ref('posts/attachments/' + newPostKey)
      var item = firebase.database().ref('/usersPosts/' + this.state.userId).push()
      item.setWithPriority(newPostKey, 0 - Date.now())
      this.setState({post:"",file:''})
      this.refreshPosts()
    }

  handleChange = (e, results) => {
    results.forEach(result => {
      const [e, file] = result;
      //this.props.dispatch(uploadFile(e.target.result));
      this.setState({file:e.target.result,mime:file.type})
      console.log(file.type)
    });
  }
  handleUser (user) {
   if (user) {
     this.setState({username:user.displayName, profilePicture:user.photoURL,userId:user.uid})
     this.readPosts()
   }
  }
  readPosts () {
    this.posts=[]
    this.setState({posts:[]})
    this.userPosts.child(this.state.userId).once('value', (snapShot)=>{
      snapShot.forEach((child)=>{
        this.postsRef.child(child.val()).once('value', (childSnap)=>{
          this.posts.push({username:childSnap.val().username,post:childSnap.val().post, createdAt:childSnap.val().createdAt, profilePicture:childSnap.val().profilePicture, starCount:childSnap.val().starCount, attachment:childSnap.val().attachment, attachmentType:childSnap.val().attachmentType, userId:childSnap.val().userId})
          this.setState({posts:this.posts})
          })
      })
    })
  }
  refreshPosts () {
    this.readPosts()
  }
  render() {
    return (
       <div id="page-wrapper">
         <Auth />
                <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                    <div className="page-header pull-left">
                        <div className="page-title">
                            Dashboard</div>
                    </div>
                    <ol className="breadcrumb page-breadcrumb pull-right">
                        <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="hidden"><a href="#">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li className="active">Dashboard</li>
                    </ol>
                    <div className="clearfix">
                    </div>
                </div>
                <div className="page-content">
                  <div id="tab-general">
                    <div className="row mbl">
                        <div style={{paddingTop:12}} id="sum_box">
                          <Link to="/courses">
                            <div className="col-sm-2">
                              <div className="panel panel-blue db mbm">
                                <div className="panel-body">
                                  <h4><p className="description">
                                    Hello</p></h4>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    </div>
                    <div className="row mbl">
                      <div className="col-sm-8" id="wrap">
                        {
                          this.state.posts.map((userPost,key) =>
                          <div key={key} id="load_posts">
                           <div className="panel" id="update_panelBox">
                           <div style={{borderBottomWidth:0}} className="panel-heading">
                               <div className="caption">
                                 <div className="row">
                                   <div className="col-md-11">
                                     <img src={userPost.profilePicture} style={{height:30,width:30,borderRadius:15}}/><a style={{fontSize:14, fontWeight:'700',}} href='#'> {userPost.username} <span className="fa fa-globe" style={{fontSize:12}}> {TimeStamp.timeSince(userPost.createdAt)}</span></a>
                                   </div>
                                   <div className="col-sm-1"><span className="caret"></span></div>

                                 </div>
                               </div>
                             </div>
                             <div id="1" className="panel-body post_box">
                               <p style={{fontSize:14}}>{userPost.post}</p>
                               <div className="row" style={{padding:10}}>
                                   {userPost.attachment !== '' ? <img src={userPost.attachment} height="200" className="img-rounded img-responsive" /> : <div></div>}
                               </div>
                             </div>
                             <div style={{backgroundColor:'white'}} className="panel-footer">
                               <div className="row">
                                 <div className="col-sm-3">
                                   <img src={comment} style={{width:20, height:20,}} />
                                 </div>
                                 <div className="col-sm-3">
                                   <img src={heart} style={{width:20, height:20,}} />
                                 </div>
                                 <div className="col-sm-3">
                                   <img src={share} style={{width:20, height:20,}} />
                                 </div>
                                 <div className="col-sm-3">
                                   <img src={repost} style={{width:20, height:20,}} />
                                 </div>
                               </div>
                              </div>
                           </div>
                         </div>
                        )}
                </div>
                <div className="col-sm-4">
                  <ToDo />
                </div>
                <div style={{zIndex:1000,position:'fixed',bottom:5, right:130}} className="newPost row">
                    <div style={{width:500,backgroundColor:'yellow'}} className=" addPostArea row" id="UpdateStatus" >
                      <div className="row">
                        <div style={{borderLeft:5}} className="showPicture col-sm-3">
                          {this.state.file === "" ? <FileReaderInput as="url" id="my-file-input"
                                                      onChange={this.handleChange}>
                                                      <div style={{margin:10, cursor:'pointer'}}>
                                                        <img src={imageU} height="30" width="30" alt="Icon"  />
                                                        <span >Photo</span>
                                                      </div>
                                                    </FileReaderInput> :
                          <div style={{margin:10,}}>
                            <span  style={{padding:20,marginLeft:10, cursor:'pointer', color:'red'}} onClick={()=>this.setState({file:""})} >Remove</span>
                          <img src={this.state.file} alt="Uploaded Image" width="110" height="110" style={{ border:'3px solid white', borderRadius:10}} />
                         </div>}
                        </div>
                        <div className="col-sm-9">
                          <form action="" method="POST" onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <textarea value={this.state.post} onChange={this.handlePost} style={{height:100,resize:'none',marginTop:-20}} className="form-control" id="comment"  placeholder="Share with a student" name="status" ></textarea>
                                <input type="file" style={{display:'none'}} onChange={this.handleInputChange} className="btn btn-danger btn-sm uploadImage" name="file" />
                          </div>
                          <input style={{width:80,}} type="submit" className="btn btn-primary btn-sm" name="submit" value="Share" />&nbsp;&nbsp;
                          <input style={{width:80,}} type="button" className="btn btn-danger btn-sm hidePostBox"  value="Cancel" />
                        </form>
                      </div>
                      </div>

                  </div>
                </div>
                <div className="addButton" style={{width:60, height:60,backgroundColor:'#2980b9',borderRadius:30,}}>
                  <img className="img-responsive"  height="30" width="30" src={addPost} style={{display:'block', margin:'auto', marginTop:15}}  />
                </div>

              </div>
            </div>
          </div>
    );
    }
}
