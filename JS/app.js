$(function () {
  $('.p1').click(function () {
    $(this).css('color', 'red');
  });
  $('.p2').click(function () {
    $(this).css('color', 'blue');
  });
  $('.p3').click(function () {
    $(this).css('color', 'orange');
  });
  $('.p4').click(function () {
    $(this).css('color', 'coral');
  });

  $('.hide').click(function () {
    $('.box').hide(500);
  });

  $('.show').click(function () {
    $('.box').show(500);
  });

  $('.toggle').click(function () {
    $('.box').toggle(500);
  });
});
