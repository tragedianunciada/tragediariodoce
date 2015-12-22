var REPORT_WIDTH = 300, REPORT_HEIGHT = 360;

$(document).ready(function() {

  $('.report-item').each(function (index) {
    $(this).css('height' , REPORT_HEIGHT);
    $(this).css('width' , REPORT_WIDTH);
  })

  $('.reports').each(function (index) {
    $(this).css('height' , REPORT_HEIGHT);    
  })

  var scrollableArea = REPORT_WIDTH * $(".reports-inner .report-item").length;
  $(".reports-inner").css("width", scrollableArea);
});
