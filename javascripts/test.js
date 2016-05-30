$(document).ready(function(){


  var typeWriting = new TypeWriting({
    targetElement   : document.getElementsByClassName('term-body')[0],
    inputString     : 'Hello! Welcome to my portfolio page. ',
    typing_interval : 130,
    blink_interval  : '1s',
    cursor_color    : '#00fd55',
  }, function() {
    console.log("END");
  });

});
