$(document).ready(function() {
  var options = {
    dateInputNode:$("#myDate"),
    view:{
      position:['left','bottom'],
      format:"['MM','DD',YYYY]"
    }
  }
  var instance = new BeatPicker(options)
  instance.on('select', function(data){
    $('#myDate').change()
  })
  $('#myDate').change(function(){
    $('#dateVal').val($(this).val())
  })
	//code to display just the first description and title of others
	 $('#todo div:first').children().show();

	 // Delete anchor tag clicked
    $('a.deleteEntryAnchor').click(function() {
        var thisparam = $(this);
        var myID = $(this).data("id");
        thisparam.parent().parent().find('p').text('Please Wait...');
        $.ajax({
            type: 'GET',
            url: thisparam.attr('href'),
            success: function(results){
                $("#"+myID).fadeOut('slow');
            }
        })
        return false;
    });

	// Edit an item asynchronously

$('.editEntry').click(function() {
    var $this = $(this);
    var oldText = $this.parent().parent().find('p').text();
    var id = $this.parent().parent().find('#id').val();
    console.log('id: ' + id);
    $this.parent().parent().find('p').empty().append('<textarea class="newDescription" cols="33">' + oldText + '</textarea>');
    $('.newDescription').blur(function() {
        var newText = $(this).val();
        $.ajax({
            type: 'POST',
            url: 'ajax/updateEntry.php',
            data: 'description=' + newText + '&id=' + id,
            success: function(results) {
                $this.parent().parent().find('p').empty().append(newText);
            }
        });
    });
    return false;
});

		$('.editEntry').click(function(){
		$('.saveEntry').css('visibility', 'visible');
	});

	$('.saveEntry').click(function(){
		$('.saveEntry').css('visibility', 'hidden');
	});

});
