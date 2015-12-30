$(document).ready(function() {
  var $relatosList = $('.relatos-list');
  var relatoItemWidth = $('.relatos-list li:first').width();
  var scrollWidth = relatoItemWidth * 2;

  $(".navigation.next").on('click', function(event) {
    $relatosList.stop().animate({
      'scrollLeft': '+=' + scrollWidth + 'px'
    }, 800);
    event.preventDefault();
  });

  $(".navigation.prev").on('click', function(event) {
    $relatosList.stop().animate({
      'scrollLeft': '-=' + scrollWidth + 'px'
    }, 800);
    event.preventDefault();
  });
});
