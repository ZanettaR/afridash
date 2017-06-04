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
import * as Notifications from '../jsHelpers/notifications'
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
      loading:false,
      friends:[],
    }
    this.posts=[]
    this.friends=[]
    this.likesRef = firebase.database().ref('post_likes')
    this.handlePost = this.handlePost.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.friendsRef = firebase.database().ref().child('friends')
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
      this.setState({loading:true})
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
        comments:0,
        attachmentType: this.state.mime,
        username:this.state.username,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      }
      var newPostKey = firebase.database().ref().child('posts').push(postData).key
      let Ref = firebase.storage().ref('posts/attachments/' + newPostKey)
      var item = firebase.database().ref('/usersPosts/' + this.state.userId).push()
      item.setWithPriority(newPostKey, 0 - Date.now())
      this.setState({post:'', loading:false})
      this.refreshPosts()
     this.state.friends.map((friend) => {
        var item = firebase.database().ref('/usersPosts/' + friend.friendId).push()
        item.setWithPriority(newPostKey, 0 - Date.now())
      })
    }
    }
  sendWithAttachment (snapshot,post) {
      var postData = {
        userId: this.state.userId,
        post: this.state.post,
        starCount: 0,
        comments:0,
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
      this.setState({post:"",file:'',loading:false})
      this.refreshPosts()
      this.state.friends.map((friend) => {
         var item = firebase.database().ref('/usersPosts/' + friend.friendId).push()
         item.setWithPriority(newPostKey, 0 - Date.now())
       })
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
     this.retrieveFriends()
   }
  }
  retrieveFriends () {
    this.friendsRef.child(this.state.userId).on('child_added', (snapShot)=>{
      this.friends.push({friendId:snapShot.key, displayName:snapShot.val().displayName})
      this.setState({friends:this.friends})
    })
  }
  readPosts () {
    this.posts=[]
    this.setState({posts:[]})
    this.userPosts.child(this.state.userId).once('value', (snapShot)=>{
      snapShot.forEach((child)=>{
        this.postsRef.child(child.val()).once('value', (childSnap)=>{
          this.likesRef.child(childSnap.key).child(this.state.userId).once('value', (likeVal)=>{
            if(likeVal.val() == true){
          this.posts.push({key:childSnap.key,comments:childSnap.val().comments,postLike:true, userId:childSnap.val().userId,username:childSnap.val().username,post:childSnap.val().post, createdAt:childSnap.val().createdAt, profilePicture:childSnap.val().profilePicture, likes:childSnap.val().starCount, attachment:childSnap.val().attachment,
            attachmentType:childSnap.val().attachmentType,})
            this.setState({posts:this.posts})
          }else{
            this.posts.push({key:childSnap.key,postLike:false,comments:childSnap.val().comments, userId:childSnap.val().userId,username:childSnap.val().username,post:childSnap.val().post, createdAt:childSnap.val().createdAt, profilePicture:childSnap.val().profilePicture, likes:childSnap.val().starCount, attachment:childSnap.val().attachment,
              attachmentType:childSnap.val().attachmentType,})
              this.setState({posts:this.posts})
          }
          })
      })
    })
    })
  }
  refreshPosts () {
    this.readPosts()
  }
  deletePost (post,user) {
    if(this.state.userId === user)
    this.ref = firebase.database().ref().child('posts').child(post).remove()

    var ref = firebase.database().ref().child('usersPosts').child(this.state.userId).orderByValue().equalTo(post)

    ref.once('value', (snap)=>{
      snap.forEach((childSnap)=>{
        if(childSnap.val()===post)
        childSnap.ref.remove()
      })
    })

    this.hidePost(post)

  }
  hidePost (postKey) {
    this.posts = this.state.posts.filter((post)=>{return post.key !== postKey})
    this.setState({posts:this.posts})
  }
  onRowPress(key, post){
    if (post.postLike) {
      this.unlikePost(post.key)
      post.likes = post.likes - 1
    } else {
      this.likePost(post.key, post.userId)
      post.likes = post.likes + 1
    }
    post.postLike =!post.postLike
    var clone = this.state.posts
    clone[key] = post
    this.setState({posts:clone})
  }
  likePost (postId, userKey) {
    this.likesRef.child(postId).child(this.state.userId).set(true)
    var ref = this.postsRef.child(postId).child('starCount')
    ref.once('value', (likesCount)=>{
      this.postsRef.child(postId).update({starCount:likesCount.val()+1})
    })
    Notifications.sendNotification(userKey, 'post_like', postId)
  }
  unlikePost (postId) {
    this.likesRef.child(postId).child(this.state.userId).remove()
    var ref = this.postsRef.child(postId).child('starCount')
    ref.once('value', (likesCount)=>{
      this.postsRef.child(postId).update({starCount:likesCount.val() - 1})
    })
  }
  showShare (post) {
    this.setState({post:post.post, postUser:post.username})
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
                                   <div className="col-sm-11">
                                     <img src={userPost.profilePicture} style={{height:30,width:30,borderRadius:15}}/>
                                     <Link to={"/profile/"+userPost.userId} style={{fontSize:14, fontWeight:'700',}} href='#'> {userPost.username} <span className="fa fa-globe" style={{fontSize:12}}> {TimeStamp.timeSince(userPost.createdAt)}</span></Link>
                                   </div>
                                   <div className="col-sm-1">
                                     <a href="#" data-toggle="popover" data-popover-content={"#popover-content"+key} data-placement="bottom"><span className="caret"></span>
                                    </a>
                                    <div id={"popover-content"+key} className="hide">
                                      <p id="postDelete"  onClick={()=>this.hidePost(userPost.key)} style={{cursor:'pointer',height:20}}>Hide</p>
                                      <p id="postDelete"  onClick={()=>this.deletePost(userPost.key, userPost.userId)} style={{cursor:'pointer',height:20}}>Delete</p>
                                    </div>
                                  </div>

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
                                   <Link to={"/post/"+userPost.key}>
                                   <span className="fa fa-comment-o" style={{fontSize:25, color:'#2980b9'}}><i style={{fontSize:12}}>{userPost.comments !== 0 ? userPost.comments : <p></p>}</i></span>
                                   </Link>
                                 </div>
                                 <div className="col-sm-3">
                                   <span className="fa fa-heart" onClick={()=>this.onRowPress(key, userPost)} style={{fontSize:25, color: !userPost.postLike ? '#2980b9' : 'red', cursor:'pointer'}}><i style={{fontSize:12}}>{userPost.likes !== 0 ? userPost.likes : <p></p>}</i></span>
                                 </div>
                                 <div className="col-sm-3">
                                   <span className="fa fa-share-alt" style={{fontSize:25, color:'#2980b9',cursor:'pointer'}}></span>
                                 </div>
                                 <div className="col-sm-3">
                                   <a href="#Share" data-toggle="modal" ><span onClick={()=>this.showShare(userPost)} className="fa fa-retweet" style={{fontSize:25, color:'#2980b9',cursor:'pointer'}}></span></a>
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
                          {this.state.loading ? <div><i style={{fontSize:20}} className="fa fa-spinner fa-pulse fa-4x fa-fw"></i><span className="sr-only">Loading...</span></div> : <input style={{width:80,}} type="submit" className="btn btn-primary btn-sm" name="submit" value="Share" />}&nbsp;&nbsp;
                          <input style={{width:80,}} type="button" className="btn btn-danger btn-sm hidePostBox"  value="Hide" />

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
            <div id="Share" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Share {this.state.postUser}'s Post</h4>
                  </div>
                  <div className="modal-body">
                    <p>{this.state.post}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
    }
}
