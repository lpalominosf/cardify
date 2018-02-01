'use strict';

var $ = require("jquery");

$(document).ready(function () {
    //Llamando plug-in
    $('.cardify').cardify({});
});
//plug-in de cardify

(function ($) {
    $.fn.cardify = function () {
        function envolver() {
            $('img').wrap('<figure></figure>');
            $('img').map(function () {
                $(this).after('<figcaption>' + $(this).attr('alt') + '</figcaption>');
                $('img').css({
                    'width': '100%',
                    'height': 'auto',
                    'clear': 'left',
                    'display': 'block',
                    'margin-bottom': '1px',
                    'margin-right': '10px',
                    'border-radius': '5px'
                });
            });
        };
        envolver();

        function estilos() {
            $('figure').css({
                'position': 'relative',
                'display': 'inline-block',
                'width': '300px',
                'height': 'auto'
            });
            $('figcaption').css({
                'background-color': 'rgba(0,0,0,0.5)',
                'color': 'white',
                'width': '100%',
                'height': '100%',
                'font-size': '50px',
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'position': 'absolute',
                'top': '0',
                'opacity': '0',
                'border-radius': '5px'

            });
        };
        estilos();

        function hover() {
            $('figure figcaption').hover(function () {
                $(this).css('opacity', '1');
            }, function () {
                $(this).css('opacity', '0');
            });
        };
        hover();
    };
})($);

//testing

var cardifyimg = {};
cardifyimg.extension = function (img) {
    var imagen = $("img");
    var archivo = $("img").attr('src');
    var cadaArchivo = $(imagen).each(function () {
        var extensiones = archivo.substring(archivo.lastIndexOf("."));
        if (extensiones != ".jpg" & extensiones != ".png" & extensiones != ".gif") {
            /*alert("El archivo de tipo " + extensiones + " no es válido");*/
        } else {
                /*alert("El archivo de tipo " + extensiones + " es válido");*/
            }
    });
};
cardifyimg.extension();

cardifyimg.alt = function (alt) {
    var imagen = $("img");
    var atributo = $("img").attr('alt');
    var cadaArchivo = $(imagen).each(function () {
        if (atributo == "") {
            /*alert('Archivo no contiene atributo alt');*/
        } else {
                /*alert('Archivo si contiene atributo alt');*/
            }
    });
};
cardifyimg.alt();

module.exports = cardifyimg;