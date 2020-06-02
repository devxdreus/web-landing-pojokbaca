$(window).on('load', function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.sm-order-1').addClass('order-1');
    $('.sm-order-12').addClass('order-12');
  }
});

// $(document).load($(window).bind("resize", checkPosition));

// function checkPosition() {
//   if (window.matchMedia('(min-width: 768px)').matches) {
//     $('.sm-order-1').removeClass('order-1');
//     $('.sm-order-12').removeClass('order-12');
//   } else {
//     $('.sm-order-1').addClass('order-1');
//     $('.sm-order-12').addClass('order-12');
//   }
// }


// Animation
// $(document).ready(function () {
//   $('.animate1').addClass('popup1');
//   $('.animate2').addClass('popup2');
//   console.log('ok');
// });




// Paralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.background').css({
    'transform': 'translateY(' + wScroll / 8 + '%)'
  });
  $('.shadow').css({
    'transform': 'translateY(' + wScroll / 16 + '%)'
  });
})