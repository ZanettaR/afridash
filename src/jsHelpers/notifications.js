const firebase = require('firebase')
import {Firebase} from './firebase'
export function sendNotification (userKey, type, postID) {
  this.user = firebase.auth().currentUser
  this.notificationsRef = firebase.database().ref('notifications')
  this.userNotificationsRef = firebase.database().ref('user_notifications')
  if (userKey !== this.user.uid) {
    var postData = {
      userKey: this.user.uid,
      profilePicture: this.user.photoURL,
      displayName: this.user.displayName,
      type: type,
      postId: postID,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    }
    var notificationKey = this.notificationsRef.push(postData).key
    var item = this.userNotificationsRef.child(userKey).push()
    item.setWithPriority(notificationKey, 0 - Date.now())
  }
}
