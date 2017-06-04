import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../jsHelpers/auth'
const firebase = require('firebase')
import {Firebase} from '../jsHelpers/firebase'
import * as TimeStamp from '../jsHelpers/timestamp'
import * as Notifications from '../jsHelpers/notifications'
export class Post extends Component {
  constructor(props){
    super(props)
    this.postRef = firebase.database().ref().child('posts')
    this.likesRef = firebase.database().ref('comment_likes')
    this.state = {
      username:'',
      profilePicture:'none',
      post:[],
      comment:'',
      comments:[],
    }
    this.postId = this.props.match.params.id
    this.commentsRef =  firebase.database().ref().child('post_comments').child(this.postId)
    this.handleSubmit =  this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async componentWillMount () {
    await firebase.auth().onAuthStateChanged(this.handleUser.bind(this))
  }
  handleUser (user) {
   if (user) {
     this.setState({username:user.displayName, profilePicture:user.photoURL,userId:user.uid})
     this.readPost()
     this.readComments()
   }
  }
  handleChange (event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  readPost () {
    this.post = []
    this.postRef.child(this.postId).once('value', (childSnap)=>{
      if (childSnap.val().type === 'shared'){
        this.post.push({type:'shared',caption:childSnap.val().caption, createdAt:childSnap.val().createdAt, postUser:childSnap.val().postUser, postUserId:childSnap.val().postUserId, postUserProfile:childSnap.val().postUserProfile,postKey:childSnap.val().postKey,
          key:childSnap.key,comments:childSnap.val().comments, userId:childSnap.val().userId,username:childSnap.val().username,post:childSnap.val().post, sharedAt:childSnap.val().sharedAt,
          profilePicture:childSnap.val().profilePicture, likes:childSnap.val().starCount, attachment:childSnap.val().attachment, attachmentType:childSnap.val().attachmentType,})
        this.setState({post:this.post})
      }else{
        this.post.push({key:childSnap.key,comments:childSnap.val().comments, userId:childSnap.val().userId,username:childSnap.val().username,post:childSnap.val().post, createdAt:childSnap.val().createdAt, profilePicture:childSnap.val().profilePicture, likes:childSnap.val().starCount,
          attachment:childSnap.val().attachment, attachmentType:childSnap.val().attachmentType,})
        this.setState({post:this.post})
      }
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.saveComment()
  }
  saveComment () {
    if (this.state.comment !== '') {
      var data = {
        comment:this.state.comment,
        createdAt:firebase.database.ServerValue.TIMESTAMP,
        userId:this.state.userId,
        profilePicture:this.state.profilePicture,
        username:this.state.username,
        likes:0
      }
      this.postRef.child(this.postId).child('comments').once('value', (comments)=>{
        this.postRef.child(this.postId).update({comments:comments.val()+1})
      })
      firebase.database().ref().child('post_comments').child(this.postId).push(data)
      this.setState({comment:''})
      Notifications.sendNotification(this.state.postUser, 'comment', this.postId)
    }
  }
  readComments () {
    this.comments=[]
      this.commentsRef.on('child_added', (snapShot)=>{
      this.likesRef.child(snapShot.key).child(this.state.userId).once('value', (likeVal)=>{
        if(likeVal.val() === true){
          this.comments.push({key:snapShot.key, commentLike:true, comment:snapShot.val().comment, createdAt:snapShot.val().createdAt, likes:snapShot.val().likes, profilePicture:snapShot.val().profilePicture,
            userId:snapShot.val().userId, username:snapShot.val().username})
            this.setState({comments:this.comments})
        } else {
          this.comments.push({key:snapShot.key, commentLike:false, comment:snapShot.val().comment, createdAt:snapShot.val().createdAt, likes:snapShot.val().likes, profilePicture:snapShot.val().profilePicture,
            userId:snapShot.val().userId, username:snapShot.val().username})
            this.setState({comments:this.comments})
        }
      })
    })
  }
  onRowPress(key, comment){
    if (comment.commentLike) {
      this.unlikeComment(comment.key)
      comment.likes = comment.likes - 1
    } else {
      this.likeComment(comment.key, comment.userId)
      comment.likes = comment.likes + 1
    }
    comment.commentLike =!comment.commentLike
    var clone = this.state.comments
    clone[key] = comment
    this.setState({comments:clone})
  }
  likeComment (commentId, userKey) {
    this.likesRef.child(commentId).child(this.state.userId).set(true)
    var ref = this.commentsRef.child(commentId).child('likes')
    ref.once('value', (likesCount)=>{
      this.commentsRef.child(commentId).update({likes:likesCount.val()+1})
    })
    Notifications.sendNotification(userKey, 'comment_like', this.postId)
  }
  unlikeComment (commentId) {
    this.likesRef.child(commentId).child(this.state.userId).remove()
    var ref = this.commentsRef.child(commentId).child('likes')
    ref.once('value', (likesCount)=>{
      this.commentsRef.child(commentId).update({likes:likesCount.val() - 1})
    })
  }
  render() {
    return (
      <div id="page-wrapper">
        <Auth />
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
        <div className="page-header pull-left">
            <div className="page-title">
              Comments  </div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
            <li><i className="fa fa-home"></i>&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
            <li className="active">Post</li>
        </ol>
        <div className="clearfix">
        </div>
    </div>
    <div className="page-content">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1" id="wrap">
              {this.state.post.map((post, key)=>
                <div key={key} id="load_posts">
                 {post.type === 'shared' ? this.showShared(post) : this.showPost(post)}
               </div>
              )}
              {this.state.comments.map((comment,key)=>
                <div key={key} className="panel" >
                  <div className="panel-heading" style={{borderBottomWidth:0}}>
                    <div className="row">
                      <div className="col-sm-11">
                        <img src={comment.profilePicture} className="img-circle" style={{height:30,width:30}} />
                      <Link to={"/profile/"+comment.userId} style={{fontSize:14, fontWeight:'700',}} href='#'> {comment.username}&nbsp;
                      <span className="fa fa-globe" style={{fontSize:12}}> {TimeStamp.timeSince(comment.createdAt)}</span></Link>
                      </div>
                      <div className="col-sm-1">
                        <a style={{cursor:'pointer'}} ><span onClick={()=>this.onRowPress(key, comment)} className="fa fa-heart" style={{ color: !comment.commentLike ? '#2980b9' : 'red'}}> {comment.likes !== 0 ? comment.likes : <p></p>}</span></a>
                     </div>
                    </div>

                  </div>
                  <div className="panel-body">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              )}
      </div>
      <div style={{zIndex:1000,position:'fixed',bottom:-5,}} className="newPost row col-sm-10">
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-10">
            <input type="text" value={this.state.comment} onChange={this.handleChange} name="comment"  placeholder="Comment" className="form-control" />
          </div>
          <div className="col-sm-2"><input type="submit" className="btn btn-primary" style={{width:80}}  value="Post"/></div>
        </form>
      </div>
        </div>
    </div>
  </div>
    )
  }
  showShared (post) {
    return (
      <div className="panel" id="update_panelBox">
      <div style={{borderBottomWidth:0}} className="panel-heading">
          <div className="caption">
            <div className="row">
              <div className="col-sm-11">
                <img src={post.profilePicture} style={{height:30,width:30,borderRadius:15}}/>
                <Link to={"/profile/"+post.userId} style={{fontSize:14, fontWeight:'700',}} href='#'> {post.username} <span className="fa fa-globe" style={{fontSize:12}}> {TimeStamp.timeSince(post.sharedAt)}</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div id="1" className="panel-body post_box">
          <p style={{fontSize:14}}>{post.caption}</p>
          <div  style={{padding:10,border:'1px solid #2980b9',padding:10, marginTop:10, borderRadius:10,}}>
            <Link to={"/profile/"+post.postUserId}><img src={post.postUserProfile} style={{height:30,width:30,borderRadius:15}}/><span> {post.postUser}</span> <span className="fa fa-globe" style={{fontSize:12}}> {TimeStamp.timeSince(post.createdAt)}</span></Link>
            <div className="row" style={{padding:10}}>
            <Link to={"/post/"+post.postKey}><p>{post.post}</p>
                {post.attachment !== '' ? <img src={post.attachment} height="200" className="img-rounded" /> : <div></div>}
            </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  showPost (post) {
    alert(post.post)
    return (
      <div className="panel" id="update_panelBox">
      <div style={{borderBottomWidth:0}} className="panel-heading">
          <div className="caption">
            <div className="row">
              <div className="col-sm-11">
                <img src={post.profilePicture} style={{height:30,width:30,borderRadius:15}}/>
                <Link to={"/profile/"+post.userId} style={{fontSize:14, fontWeight:'700',}} href='#'> {post.username} <span className="fa fa-globe" style={{fontSize:12}}> {TimeStamp.timeSince(post.createdAt)}</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div id="1" className="panel-body post_box">
          <p style={{fontSize:14}}>{post.post}</p>
          <div className="row" style={{padding:10}}>
              {post.attachment !== '' ? <img src={post.attachment} style={{height:'300px'}} className="img-rounded img-responsive" /> : <div></div>
              }
          </div>
        </div>
      </div>
    )
  }
}
