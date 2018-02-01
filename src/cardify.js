const $ = require('jquery');
const usingCardify = {};

usingCardify.cardify = function() {
  var allImages = $('.imgToWrap').find('img');

  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].alt && allImages[i].alt.length > 0) {
      var imgAlt = allImages[i].alt;
      $(allImages[i]).wrap('<div class="wrapper"/>').
        wrap('<figure class="">').
        after('<figcaption class="hide overlay">' + imgAlt +
              '</figcaption></figure></div>');
    }
  }
  $('figure').hover(
    function() {
      $(this).find('figcaption').removeClass('hide');
      $(this).find('figcaption').addClass('text');
    },
    function() {
      $(this).find('figcaption').removeClass('text');
      $(this).find('figcaption').addClass('hide');
    });
};

module.exports = usingCardify;