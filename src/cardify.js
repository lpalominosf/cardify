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
                    'width': '200px',
                    'height': 'auto',
                    'clear': 'left',
                    'display': 'inline-block',
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
                'max-width': '200px',
                'font-size': '10px',
                'display': 'block',
                'float': 'left',
                'position': 'absolute',
                'top': '0',
                'opacity': '0'
            });
        };
        estilos();

        function hover() {
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

/*
 * cardifydescription.etiqueta();
 * $('img').hover(function() {
 *   var atributo = $(this).attr("alt");
 *    $(this).wrap('<figure></figure>');
 *    $(this).append('<figcaption> +'
 *      atributo '+<figcaption>');
 *  });
 */

const cardifyimg = {};
cardifyimg.extension = function(img) {
    const imagen = $("img");
    const archivo = $("img").attr('src');
    const cadaArchivo = $(imagen).each(function() {
        const extensiones = archivo.substring(archivo.lastIndexOf("."));
        if (extensiones != ".jpg" & extensiones != ".png" & extensiones != ".gif") {
            /*alert("El archivo de tipo " + extensiones + " no es válido");*/
        } else {
            /*alert("El archivo de tipo " + extensiones + " es válido");*/
        }
    });
};
cardifyimg.extension();

cardifyimg.alt = function(alt) {
    const imagen = $("img");
    const atributo = $("img").attr('alt');
    const cadaArchivo = $(imagen).each(function() {
        if (atributo == "") {
            /*alert('Archivo no contiene atributo alt');*/
        } else {
            /*alert('Archivo si contiene atributo alt');*/
        }
    });
};
cardifyimg.alt();

module.exports = cardifyimg;