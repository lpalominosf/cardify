$(document).ready(function() {
    $('.container').cardify({});
});
(function($) {
    jQuery.fn.cardify = function() {
        $('img').wrap('<figure></figure>');
        $('img').map(function() {
            $(this).after('<figcaption>' + $(this).attr('alt') + '</figcaption>');
            $('img').css({
                'width': '400px',
                'clear': 'left',
                'margin-bottom': '1px',
                'margin-right': '10px'
            });
        });
    }
})(jQuery);

//$('img').hover(function(){
// var atributo = $(this).attr("alt");
// $(this).wrap('<figure></figure>');
//$(this).append('<figcaption> +'atributo'+<figcaption>');

//})

function extension(img) {
    var archivo = $(".img").val();
    console.log(archivo);
    var extensiones = archivo.substring(archivo.lastIndexOf("."));
    if (extensiones != ".jpg" || extensiones != ".png" || extensiones != ".jpeg") {
        alert("El archivo de tipo " + extensiones + "no es válido");
    }
}

extension();


//module.exports = extension;