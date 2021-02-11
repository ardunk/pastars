$(function() {
  //menu navbar
  $('#header-layout-button').click(function() {
    $('#header-layout-navbar').toggleClass("open");
    $(this).toggleClass("open");
  });
  //popup block
  $('.popup-button').click(function() {
    $('#popup').toggleClass("open", true);
  });
  $('#popup-close').click(function() {
    $('#popup').toggleClass("open", false);
  });
});
