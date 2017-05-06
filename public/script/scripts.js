    $('select#sel1').change(function(){
    var course=$('option:selected',this).val();
    var level=$('#sel2').val();
    if(level != ""){
        var dataString = "department="+ course + "&level="+level;
    }else{
         var dataString = "department="+ course; 
    }
    $("#SearchResult").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
		type: "POST",
  url: "ajax/class_search.php",
   data: dataString,
  cache: false,
  success: function(results){
      $("#SearchResult").html(results);
  }
 });
});

$("select#sel2").change(function(){
   var level=$('option:selected',this).val();
    var department = $('#sel1').val();
    if(department !=""){
    var dataString = "department="+department+"&level="+level;
     $("#SearchResult").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
       type: "POST",
        url: "ajax/class_search.php",
        data: dataString,
        cache: false,
        success: function(results){
            $("#SearchResult").html(results);
        }
    });   
    }else{
        $("#SearchResult").html("<p class='lead text-center'>Pick a Subject</p>");
    }
});

$('select#sel3').change(function(){
    var course=$('option:selected',this).val();
    var level=$('#sel4').val();
    if(level != ""){
        var dataString = "department="+ course + "&level="+level;
    }else{
         var dataString = "department="+ course; 
    }
    $(".SearchResult1").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
		type: "POST",
  url: "ajax/registration_search.php",
   data: dataString,
  cache: false,
  success: function(results){
      $(".SearchResult1").html(results);
  }
 });
});

$("select#sel4").change(function(){
   var level=$('option:selected',this).val();
    var department = $('#sel3').val();
    if(department !=""){
    var dataString = "department="+department+"&level="+level;
     $(".SearchResult1").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
       type: "POST",
        url: "ajax/registration_search.php",
        data: dataString,
        cache: false,
        success: function(results){
            $(".SearchResult1").html(results);
        }
    });   
    }else{
        $(".SearchResult1").html("<p class='lead text-center'>Pick a Subject</p>");
    }
});
$(document).on("click", "#deleteClass", function(){
  if(confirm('Are you sure?')){
      var id=$(this).data('id');
      var dataString = "course_id="+id;
      $.ajax({
         type: "POST",
        data: dataString,
         cache: false,
         url: "ajax/drop_class.php",
         success: function(result){
             $("#tr"+id).fadeOut('slow');
             showNotification({
                type : "success",
                message: "Class was successfully dropped. ",
                autoClose: true, 
                 duration: 2
            });  
          },
        error: function (msg) {
                        showNotification({
                            message: "Oops! an error occurred.",
                            type: "error", // type of notification is error
                            autoClose: true, // auto close to true
                            duration: 3 // display duration
                        });
            $("#tr"+id).fadeOut('slow');
            }
      });
  }
});

$(document).on("click", "#dropClass", function(){
      var id=$(this).data('id');
      var num_pre=$("#num_pre").val();
    if(num_pre > 1){
        num_pre -=1;
        $("#num_pre").val(num_pre);
    }else{
        $("#RegistrationForm").hide(100);
    }
      var dataString = "course_id="+id+"&pre=true";
      $.ajax({
         type: "POST",
        data: dataString,
         cache: false,
         url: "ajax/drop_class.php",
         success: function(result){
             $("#tr"+id).fadeOut('slow');
             showNotification({
                type : "success",
                message: "Class was successfully removed from your list. ",
                autoClose: true, 
                 duration: 2
            });  
          },
        error: function (msg) {
                        showNotification({
                            message: "Oops! an error occurred.",
                            type: "error", // type of notification is error
                            autoClose: true, // auto close to true
                            duration: 3 // display duration
                        });
            $("#tr"+id).fadeOut('slow');
            }
      });
});

$(document).on("click", "#delete_post", function(){
      var id=$(this).data('id');
      var dataString = "post_id="+id+"&delete_post=true";
      $.ajax({
         type: "POST",
        data: dataString,
         cache: false,
         url: "ajax/delete_updates.php",
         success: function(result){
             $("#update_panelBox"+id).fadeOut('slow');
             showNotification({
                type : "information",
                message: "Post was successfully deleted.",
                autoClose: true, 
                 duration: 2
            });  
          },
        error: function (msg) {
                        showNotification({
                            message: "Oops! an error occurred.",
                            type: "error", // type of notification is error
                            autoClose: true, // auto close to true
                            duration: 3 // display duration
                        });
            $("#update_panelBox"+id).fadeIn('slow');
            }
      });
});

$(document).on("click", "#delete_picture", function(){
      var id=$(this).data('id');
      var dataString = "post_id="+id+"&delete_picture=true";
      $.ajax({
         type: "POST",
        data: dataString,
         cache: false,
         url: "ajax/delete_updates.php",
         success: function(result){
             $("#update_panelBox"+id).fadeOut('slow');
             showNotification({
                type : "information",
                message: "Post was successfully deleted.",
                autoClose: true, 
                 duration: 2
            });  
          },
        error: function (msg) {
                        showNotification({
                            message: "Oops! an error occurred.",
                            type: "error", // type of notification is error
                            autoClose: true, // auto close to true
                            duration: 3 // display duration
                        });
            $("#update_panelBox"+id).fadeIn('slow');
            }
      });
});

$(document).on("click", "#delete_profile_picture", function(){
      var id=$(this).data('id');
      var dataString = "post_id="+id+"&delete_profile_picture=true";
      $.ajax({
         type: "POST",
        data: dataString,
         cache: false,
         url: "ajax/delete_updates.php",
         success: function(result){
             $("#update_panelBox"+id).fadeOut('slow');
             showNotification({
                type : "information",
                message: "Post was successfully deleted.",
                autoClose: true, 
                 duration: 2
            });  
          },
        error: function (msg) {
                        showNotification({
                            message: "Oops! an error occurred.",
                            type: "error", // type of notification is error
                            autoClose: true, // auto close to true
                            duration: 3 // display duration
                        });
            $("#update_panelBox"+id).fadeIn('slow');
            }
      });
});
$(document).on("click", "#delete_cover_photo", function(){
      var id=$(this).data('id');
      var dataString = "post_id="+id+"&delete_cover_photo=true";
      $.ajax({
         type: "POST",
        data: dataString,
         cache: false,
         url: "ajax/delete_updates.php",
         success: function(result){
             $("#update_panelBox"+id).fadeOut('slow');
             showNotification({
                type : "information",
                message: "Post was successfully deleted.",
                autoClose: true, 
                 duration: 2
            });  
          },
        error: function (msg) {
                        showNotification({
                            message: "Oops! an error occurred.",
                            type: "error", // type of notification is error
                            autoClose: true, // auto close to true
                            duration: 3 // display duration
                        });
            $("#update_panelBox"+id).fadeIn('slow');
            }
      });
});
var c_id;
var mine;
$(document).on("click", "#openChat", function(){
   var user = $(this).data("user");
    c_id=user;
    mine=$(this).data("mine");
    var id= $(this).data("id");
    var dataString = "id="+id+"&user="+user;
    $.ajax({
        type: "GET",
        data: dataString,
         cache: false,
         url: "ajax/chatarea.php",
         success: function(result){
             $(".myChatArea").html(result);
             $('#MessageContent').focus();
             startInterval(user, id);
         },
        error: function(result){
            $(".myChatArea").html(result);
        }
    });
});
var interval;
function startInterval(user, id){
    clearInterval(interval);
    interval= setInterval(function (){
    $('#load_messages').load('get_messages.php?q='+user+'&id='+id).fadeIn("slow");
}, 2000);
}
  $(document).on("click",".postMessage",function()
  {
    var boxval = $("#MessageContent").val();
	var dataString = 'c_id='+ c_id + '&msg=' + boxval + '&userID='+mine;
  	if(boxval.length > 0)
	{
	if(boxval.length<200)
	{
$.ajax({
  type: "POST",
  url: "chatajax.php",
   data: dataString,
  cache: false,
  success: function(html){
  $("ol#load_messages").append(html);
   $('#MessageContent').val('');
   $('#MessageContent').focus();
  },
    error: function(html){
     $("ol#load_messages").append(html);
    }
 });
}
else
	{
	alert("Please delete some Text max 200 charts");
	
	}
	}
  return false;
  });

$(document).on("click", "#submitInfo", function(e){
           $(".address").text($("#address").val());
           $(".province").text($("#province").val());
            $(".state").text($("#state").val());
            $(".country").text($("#country").val());
            $(".phone").text($("#phone").val());
            $(".econtact").text($("#econtact").val());
            $(".ephone").text($("#ephone").val());
            var address = $("#address").val();
            var province = $("#province").val();
            var state = $("#state").val();
            var country = $("#country").val();
            var phone = $("#phone").val();
            var econtact = $("#econtact").val();
            var ephone = $("#ephone").val();
            dataString = "address="+address+"&province="+province+"&state="+state+"&country="+country+"&phone="+phone+"&econtact="+econtact+"&ephone="+ephone;
            $.ajax({
                type: "POST",
                url: "ajax/save_contact.php",
                cache: false,
                data: dataString,
                success: function(result){
                    showNotification({
                type : "information",
                message: "Contact updated successfully.",
                autoClose: true, 
                 duration: 2
            }); 
                },
                error: function(result){
                    howNotification({
                type : "error",
                message: "Contact was not updated.",
                autoClose: true, 
                 duration: 2
            }); 
                }
            });
        });

$("select#_academic_year").change(function(){
   var year=$('option:selected',this).val();
    var semester = $('#semester').val();
    var dataString="";
    if(semester !=""){
        dataString = "year="+year+"&semester="+semester;
    }else{
        dataString = "year="+year;
    }
     $(".grades_result").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
       type: "POST",
        url: "ajax/grades_search.php",
        data: dataString,
        cache: false,
        success: function(results){
            $(".grades_result").html(results);
        }
    });   
});
$("select#semester").change(function(){
   var semester=$('option:selected',this).val();
    var year = $('#_academic_year').val();
    if(year != ""){
        var dataString = "year="+year+"&semester="+semester;
    $(".grades_result").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
       type: "POST",
        url: "ajax/grades_search.php",
        data: dataString,
        cache: false,
        success: function(results){
            $(".grades_result").html(results);
        }
    }); 
    }else{
        $(".grades_result").html("<p class='lead text-center'>Please Select An Academic Year</p>");
    }
  
});

$("select#_academic_year_").change(function(){
   var year=$('option:selected',this).val();
    var semester = $('#_semester_').val();
    var dataString="";
    if(semester !=""){
        dataString = "year="+year+"&semester="+semester;
    }else{
        dataString = "year="+year;
    }
     $(".grades_result").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
       type: "POST",
        url: "ajax/term_grades_search.php",
        data: dataString,
        cache: false,
        success: function(results){
            $(".grades_result").html(results);
        }
    });   
});
$("select#_semester_").change(function(){
   var semester=$('option:selected',this).val();
    var year = $('#_academic_year_').val();
    if(year != ""){
        var dataString = "year="+year+"&semester="+semester;
    $(".grades_result").html("<p class='lead text-center'>Please Wait...</p>");
    $.ajax({
       type: "POST",
        url: "ajax/term_grades_search.php",
        data: dataString,
        cache: false,
        success: function(results){
            $(".grades_result").html(results);
        }
    }); 
    }else{
        $(".grades_result").html("<p class='lead text-center'>Please Select An Academic Year</p>");
    }
  
});
$("select#_department_").change(function(){
   var id=$('option:selected',this).val();
    $("#program_eval").html("<p class='lead text-center'>Please Wait...</p>");
    var dataString = "department_id="+id;
    $.ajax({
       type: "POST",
        url: "ajax/get_evaluation.php",
        data: dataString,
        cache: false,
        success: function(results){
            $("#program_eval").html(results);
        }
    }); 
  
});