function generarWhile() {
    
    let numero = 1;
    var resultadoHTML;

    while (numero <= 10) {
        resultadoHTML += "<p>" + numero + "</p>";
        numero++;
    }

    var resultado = document.getElementById("resultado_While").innerHTML = resultadoHTML;
 
}

