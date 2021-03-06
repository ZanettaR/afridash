export function timeSince (date) {
  var seconds = Math.floor((new Date() - date) / 1000)

  var interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return interval + ' years'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    if(interval>=24){
      return 'Yesterday'
    }else{
      return interval + ' hrs'
    }
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    if (interval > 60) {
      return '1 hr'
    } else {
      return interval + ' mins'
    }
  }
  return 'Now'
}
