function calcularBonificacion() {
    // Obtener el sueldo ingresado por el usuario
    var sueldo = parseFloat(document.getElementById("sueldo").value);

    // Obtener el número de años trabajados ingresado por el usuario
    var añosTrabajados = parseInt(document.getElementById("años").value);

    // Calcular la bonificación según el número de años trabajados
    var bonificacion;
    if (añosTrabajados >= 5) {
        bonificacion = sueldo * 0.2; // 20% de bonificación para 5 años o más
    } else {
        bonificacion = sueldo * 0.1; // 10% de bonificación para menos de 5 años
    }

    // Calcular el nuevo sueldo con la bonificación
    var nuevoSueldo = sueldo + bonificacion;

    // Mostrar el resultado en el párrafo con id "resultado_sueldoNumeroAños"
    var resultadoElemento = document.getElementById("resultado_sueldoNumeroAños");

    resultadoElemento.textContent = "Sueldo original: $" + sueldo.toFixed(2) + "\n" +
                                     "Años trabajados: " + añosTrabajados + "\n" +
                                     "Bonificación: $" + bonificacion.toFixed(2) + "\n" +
                                     "Nuevo sueldo con bonificación: $" + nuevoSueldo.toFixed(2);
}
