/* 

Funcion creada - Pasar STRINGS a mayores, menores, mayores-menores

*/

var S = require('string');

function pasameString() {

    var palabroTexto = document.getElementById("string").value
    var tipoCambio = document.getElementById("tipoCambio").value

    if (tipoCambio == 1) {

        var palabroTexto = palabroTexto.toLowerCase();
        resultado = palabroTexto;

    }

    else if (tipoCambio == 2) {

        var palabroTexto = palabroTexto.toUpperCase();
        resultado = palabroTexto;

    }

    else {

        resultado = "surgio un error";

    }


    document.getElementById("resultadoPropiaFuncion").innerHTML = resultado;


}