$(document).ready(function() {
    var buscar = $("#container").find("img");
    if (buscar.length > 0) {
        console.log(buscar);

        $('#container').attr('style', 'border: 1px solid red;')
    }




});