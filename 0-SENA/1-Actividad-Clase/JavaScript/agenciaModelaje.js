function verificarCumplimiento() {
    // Obtener los datos ingresados por el usuario
    var genero = document.getElementById("genero").value;
    var edad = parseInt(document.getElementById("edad").value);
    var estatura = parseFloat(document.getElementById("estatura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var colorOjos = document.getElementById("colorOjos").value;

    // Verificar las condiciones para ser contratado
    var cumpleCondiciones = (genero === "hombre" && edad <= 20 && estatura >= 1.75 && peso <= 70 && colorOjos === "azul");

    // Mostrar el resultado en el párrafo con id "resultado_AgenciaModelaje"
    var resultadoElemento = document.getElementById("resultado_AgenciaModelaje");

    if (cumpleCondiciones) {
        resultadoElemento.textContent = "¡Felicidades! Cumple con las condiciones para ser contratado como modelo.";
    } else {
        resultadoElemento.textContent = "Lo sentimos, no cumple con todas las condiciones para ser contratado como modelo.";
    }
}
