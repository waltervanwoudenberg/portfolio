var is_on = true;

$(document).ready(function() {

  // set the background to a random color
  var hue = 350;

  // cache the jquery elements to prevent dom queries during the animation events
  var $banner = $(".banner");
  var $svg = $("svg");
  var $word = $(".word");

  // when the animation iterates
  $("h1").on('webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ', function() {
    if (!is_on){
      $("svg").attr('class', 'animation-off');
      return false;
    }

    // replace the header with a random word
    var word = words[Math.floor(Math.random() * words.length)] + "!";
    $word.text(word);

    // update the background color
    hue += 47;
    $banner.css("background-color", "hsl(" + hue + ", 50%, 50%)");
  });
});

// the 10,000 most comment words, taken from http://goo.gl
// /hfjFkz
words = [ "He is Awesome", "He is Amazing", "He is Super Cool" ];
