$(document).ready(function ()
{

    var today = moment().format('MMMM Do YYYY');
    var interval = setInterval(function() {
    $('#today').html(moment().format('YYYY MMMM DD') + ' '+ moment().format('dddd'));
    $('#today').html(today + " " + moment().format('hh:mm:ss A'));
  }, 100);
  var hour = parseInt(moment().hours());
  var $time9am = $("#9");
  var $time10am = $("#10");
  var $time11am = $("#11");
  var $time12pm = $("#12");
  var $time1pm = $("#13");
  var $time2pm = $("#14");
  var $time3pm = $("#15");
  var $time4pm = $("#16");
  var $time5pm = $("#17");
  var $time6pm = $("#18");
  var $time7pm = $("#19");