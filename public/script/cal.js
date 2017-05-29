$(document).ready(function () {
$("#my-calendar").zabuto_calendar({
        ajax: {
      url: "show_data.php",
      modal: true
  },
  cell_border: true,
  today: true,
  show_days: true,
  weekstartson: 0,
  nav_icon: {
    prev: '<i class="fa fa-chevron-circle-left fa-lg"></i>',
    next: '<i class="fa fa-chevron-circle-right fa-lg"></i>'
  }
    });
});
