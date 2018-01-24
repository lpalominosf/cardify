$(document).ready(function() {
    var buscar = $('#container').find('img');
    if (buscar.length > 0) {
        console.log(buscar);
    
    };

(function ($){
  jQuery.fn.nombre_del_plugin = function() {

$('img').wrap('<figure></figure>');

$('img').after()
  };
})(jQuery);


   //$('img').hover(function(){
   // var atributo = $(this).attr("alt");
     // $(this).wrap('<figure></figure>');
      //$(this).append('<figcaption> +'atributo'+<figcaption>');

   //})
   

});


    var archivo = $("#file").val();
    var extensiones = archivo.substring(archivo.lastIndexOf("."));
    if (extensiones != ".jpg" || extensiones != ".jpg" || extensiones != ".jpeg") {
        alert("El archivo de tipo " + extensiones + "no es válido");
    }
});
