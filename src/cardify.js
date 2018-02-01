//const $ = require('jquery');
$(document).ready(function() {
  $('.imgToWrap').cardify({});
});

(function($) {
  $.fn.cardify = function() {
    var allImages = $.find('img');

    for (var i = 0; i < allImages.length; i++) {
      if (allImages[i].alt && allImages[i].alt.length > 0) {
        var imgAlt = allImages[i].alt;
        $(allImages[i]).wrap('<div class="wrapper"/>').
          wrap('<figure>').
          after('<figcaption style="display:none" >' + imgAlt +
          '</figcaption></figure></div>');
      }
    }
    $('figure').hover(
      function() {
        $(this).find('figcaption').css({
          'display': 'block'
        });
        $(this).find('img').css({
          'cursor': 'pointer'
        });
        $(this).find('figcaption').css({
          'background-color': 'rgb(76, 160, 175)',
          'color': 'white',
          'font-size': '1em',
          'padding': '1em 2em',
          'transition': 'ease',
          'opacity': '0',
          'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)',
          '-ms-transform': 'translate(-50%, -50%)',
          'text-align': 'center',
          'opacity': '1',
          'cursor': 'pointer'
        });
        $(this).find('.imgToWrap').css({
          'opacity': '0.3'
        });
        $(this).find('.wrapper').css({
          'width': '100%',
          'height': 'auto',
          'overflow': 'hidden',
          'position': 'relative'
        });
      },
      function() {
        $(this).find('figcaption').css({ 'display': 'none' });
        $(this).find('figcaption').css({
          'background-color': '',
          'color': '',
          'font-size': '',
          'padding': ' ',
          'transition': '',
          'opacity': '',
          'position': '',
          'top': '',
          'left': '',
          'transform': '',
          '-ms-transform': '',
          'text-align': ''
        });
        $(this).find('.wrapper').css({
          'width': '',
          'height': '',
          'overflow': '',
          'position': ''
        });
        $(this).find('.imgToWrap').css({ 'opacity': '' });
      }
    );
  };
})($);