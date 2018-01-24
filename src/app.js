$(document).ready(function() {
    var buscar = $('#container').find('img');
    if (buscar.length > 0) {
        console.log(buscar);
    };

    var archivo = $("#file").val();
    var extensiones = archivo.substring(archivo.lastIndexOf("."));
    if (extensiones != ".jpg" || extensiones != ".jpg" || extensiones != ".jpeg") {
        alert("El archivo de tipo " + extensiones + "no es válido");
    }
});