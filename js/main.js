//Alternative Lifestyle
$('.alCover').on('click', function(){
  $('.toHide').addClass('hide');
  });

// Smooth Scrolling
$('.scrollTo').on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;

  // targetOffset -= 5;

  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});


