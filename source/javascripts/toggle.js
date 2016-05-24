$(document).ready(function(){
$('.toggle').click(function (e) {
  var toggle = this;
  e.preventDefault();
  is_on = (is_on) ? false : true;
  if (is_on){
    $("svg").removeAttr('class');
  }
  $(toggle).toggleClass('toggle--on').toggleClass('toggle--off').addClass('toggle--moving');
  setTimeout(function () {
    $(toggle).removeClass('toggle--moving');
  }, 200);
});
});
