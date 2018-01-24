//Llamando el plugin al div container
$(document).ready(function(){
   $('#container').nombre_del_plugin();
  
  });

(function ($){
  jQuery.fn.nombre_del_plugin = function() {
 var buscar = $('#container').find('img');
  if (buscar.length > 0) {
     console.log(buscar);
     for(i=0; i<=buscar.length; i++)
     $(buscar[i]).wrap('<figure></figure>');
     var padre =  buscar[i].parent();
     var mensaje = $(buscar[i]).attr('alt')
     padre.after('<figcaption>' + mensaje + '</figcaption>')
    };

  };
})(jQuery);


   



    //var archivo = $("#file").val();
    //var extensiones = archivo.substring(archivo.lastIndexOf("."));
    //if (extensiones != ".jpg" || extensiones != ".jpg" || extensiones != ".jpeg") {
      //  alert("El archivo de tipo " + extensiones + "no es válido");
    //}
//});
