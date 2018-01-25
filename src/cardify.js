const $ = require("jquery");

$(document).ready(function() {
    //Llamando plug-in
    $('.container').cardify({});
});
//plug-in de cardify

(function($) {
    $.fn.cardify = function() {
        function envolver() {
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
        };
        envolver();

        function estilos() {
            $('figure').css({
                'position': 'relative',
                'float': 'left'
            });
            $('figcaption').css({
                'background-color': 'black',
                'color': 'white',
                'max-width': '400px',
                'font-size': '10px',
                'display': 'block',
                'float': 'left',
                'position': 'absolute',
                'top': '0',
                'opacity': '0'
            });
        };
        estilos();

        function hover(){
            $('figure').each(function() {
                $(this).hover(function() {
                    $('figcaption').css('opacity', '1');
                }, function() {
                    $('figcaption').css('opacity', '0');
                });
            });
        };
       hover();
    }
})($);

const cardifyimg = {};
cardifyimg.extension = function(img) {
    const archivo = $(".img").attr('src');
    const extensiones = archivo.substring(archivo.lastIndexOf("."));
    if (extensiones != ".jpg" & extensiones != ".png" & extensiones != ".jpeg") {
        //alert("El archivo de tipo " + extensiones + " no es válido");
    } else {
        //alert("El archivo de tipo " + extensiones + " es válido");
    }
}
cardifyimg.extension();

cardifyimg.alt = function(alt) {
    const atributo = $(".img").attr('alt');
    if (atributo == "") {
        //alert('no lo tiene');
    } else {
        //alert('lo tiene');
    }
}
cardifyimg.alt();

module.exports = cardifyimg;