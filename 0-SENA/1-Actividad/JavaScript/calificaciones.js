function calcularCalificacionFinal() {
    // Obtener las calificaciones ingresadas por el usuario
    var calificacionParcial1 = parseFloat(document.getElementById("parcial1").value);
    var calificacionParcial2 = parseFloat(document.getElementById("parcial2").value);
    var calificacionParcial3 = parseFloat(document.getElementById("parcial3").value);
    var calificacionFinal = parseFloat(document.getElementById("final").value);
    var calificacionTrabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

    // Calcular el promedio de las calificaciones parciales
    var promedioParciales = (calificacionParcial1 + calificacionParcial2 + calificacionParcial3) / 3;

    // Calcular los valores correspondientes a cada porcentaje
    var porcentajePromedioParciales = 0.55 * promedioParciales;
    var porcentajeCalificacionFinal = 0.30 * calificacionFinal;
    var porcentajeTrabajoFinal = 0.15 * calificacionTrabajoFinal;

    // Calcular la calificación final
    var calificacionFinalMateria = porcentajePromedioParciales + porcentajeCalificacionFinal + porcentajeTrabajoFinal;

    // Mostrar el resultado en el párrafo con id "resultado_Calificaciones"
    var resultadoElemento = document.getElementById("resultado_Calificaciones");

    resultadoElemento.textContent = "Calificación parcial 1: " + calificacionParcial1 + "\n" +
                                     "Calificación parcial 2: " + calificacionParcial2 + "\n" +
                                     "Calificación parcial 3: " + calificacionParcial3 + "\n" +
                                     "Calificación final: " + calificacionFinal + "\n" +
                                     "Calificación trabajo final: " + calificacionTrabajoFinal + "\n" +
                                     "Promedio de calificaciones parciales: " + promedioParciales.toFixed(2) + "\n" +
                                     "Calificación final de la materia: " + calificacionFinalMateria.toFixed(2);
}
