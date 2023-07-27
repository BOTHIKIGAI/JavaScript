
function contarLetras () {
    var palabra = prompt("Ingrese una palabra: ");
    var numLetras = palabra.length;
    document.write ( "<br>" + "La palabra " + palabra + " tiene " + numLetras + " letras");
}

contarLetras();