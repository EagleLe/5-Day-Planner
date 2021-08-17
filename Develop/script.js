$(document).ready(function ()
{

    var today = moment().format('MMMM Do YYYY');
    var interval = setInterval(function() {
    $('#today').html(moment().format('YYYY MMMM DD') + ' '+ moment().format('dddd'));
    $('#today').html(today + " " + moment().format('hh:mm:ss A'));
  }, 100);