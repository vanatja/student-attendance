$(document).ready(function(){
    $("#day_off_area").hide();
    $("#day-off-btn").click(function () {
        $("#day_off_area").toggle();
        $("#change-attendance-area").toggle();
      });
  });