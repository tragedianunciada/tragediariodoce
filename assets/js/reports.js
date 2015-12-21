var REPORT_WIDTH = 300

$(document).ready(function() {
  var scrollableArea = REPORT_WIDTH * $(".reports-inner .report-item").length;
  $(".reports-inner").css("width", scrollableArea);
});
