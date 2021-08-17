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
    $(".time").each(function () 
    {
        var thishour = parseInt($(this).attr("id"));
        if (hour > thishour) 
        {
            $(this).addClass("past");
        } else if (hour < thishour) 
        {
            $(this).addClass("future");
        } else 
        {
            $(this).addClass("present");
        }
    });
    $(".saveSchedule").on("click", function(){
        localStorage.setItem("9AM", ($time9am.val()))
        localStorage.setItem("10AM", ($time10am.val()))
        localStorage.setItem("11AM", ($time11am.val()))
        localStorage.setItem("12PM", ($time12pm.val()))
        localStorage.setItem("1PM", ($time1pm.val()))
        localStorage.setItem("2PM", ($time2pm.val()))
        localStorage.setItem("3PM", ($time3pm.val()))
        localStorage.setItem("4PM", ($time4pm.val()))
        localStorage.setItem("5PM", ($time5pm.val()))
        localStorage.setItem("6PM", ($time6pm.val()))
        localStorage.setItem("7PM", ($time7pm.val()))
      })

      $time9am.append(localStorage.getItem("9AM"));
      $time10am.append(localStorage.getItem("10AM"));
      $time11am.append(localStorage.getItem("11AM"));
      $time12pm.append(localStorage.getItem("12PM"));
      $time1pm.append(localStorage.getItem("1PM"));
      $time2pm.append(localStorage.getItem("2PM"));
      $time3pm.append(localStorage.getItem("3PM"));
      $time4pm.append(localStorage.getItem("4PM"));
      $time5pm.append(localStorage.getItem("5PM"));
      $time6pm.append(localStorage.getItem("6PM"));
      $time7pm.append(localStorage.getItem("7PM"));
      $("#clear").on("click", function()
      {
        localStorage.clear();
        location.reload(true);
      }) 
})