$(document).ready(function() {
  var $videosList = $('.videos-list');
  var videoItemWidth = $('.videos-list li:first').width();
  var scrollWidth = videoItemWidth * 2;

  $(".navigation.next").on('click', function(event) {
    $videosList.stop().animate({
      'scrollLeft': '+=' + scrollWidth + 'px'
    }, 800);
    event.preventDefault();
  });

  $(".navigation.prev").on('click', function(event) {
    $videosList.stop().animate({
      'scrollLeft': '-=' + scrollWidth + 'px'
    }, 800);
    event.preventDefault();
  });

  if ($videosList.get(0).scrollWidth > $videosList.width()) {
    $('button.navigation').removeClass('invisible');
  }
});
