$(document).ready(function () {
  $('body').popover({
    selector: '[data-toggle=popover]',
    trigger:'focus',
    html: true,
    content: function () {
        var content =  $(this).data("popover-content")
        return $(content).removeClass('hide')
    }
});
  $('.newPost').hide()
  var showing = false
$('.addButton').click(function(){
  if(!showing){
    $('.newPost').show()
    showing = true
  }
  else {
    $('.newPost').hide()
    showing=false
  }

})
$('.hidePostBox').click(function(){
    $('.newPost').hide()
})

$('.addImage').click(function(){
    $('.uploadImage').click()
})
$('.uploadImage').bind('change', function() {
  readURL(this)
  console.log(this)
   })
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          //console.log(e)
          var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
          img.attr({'src': e.target.result, width:100, height:100,});
          img.css({'margin-left':'10px'})
          img.appendTo('.showPicture');

        }
        reader.readAsDataURL(input.files[0]);
    }
}
});
