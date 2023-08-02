function CalcularPromedio() {
    // Obtener los valores ingresados en los campos de entrada
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);

    // Calcular el promedio de las calificaciones
    var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    // Encontrar la calificación mayor
    var calificacionMayor;
    if (calificacion1 >= calificacion2 && calificacion1 >= calificacion3) {
        calificacionMayor = calificacion1;
    } else if (calificacion2 >= calificacion1 && calificacion2 >= calificacion3) {
        calificacionMayor = calificacion2;
    } else {
        calificacionMayor = calificacion3;
    }

    // Encontrar la calificación menor
    var calificacionMenor;
    if (calificacion1 <= calificacion2 && calificacion1 <= calificacion3) {
        calificacionMenor = calificacion1;
    } else if (calificacion2 <= calificacion1 && calificacion2 <= calificacion3) {
        calificacionMenor = calificacion2;
    } else {
        calificacionMenor = calificacion3;
    }

    // Mostrar el resultado en el párrafo con id "resultado"
    var resultadoElemento = document.getElementById("resultado");

    if (promedio >= 3.0) {
        resultadoElemento.textContent = "Aprobado. Promedio: " + promedio.toFixed(2) + ". Calificación mayor: " + calificacionMayor + ". Calificación menor: " + calificacionMenor;
    } else {
        resultadoElemento.textContent = "Desaprobado. Promedio: " + promedio.toFixed(2) + ". Calificación mayor: " + calificacionMayor + ". Calificación menor: " + calificacionMenor;
    }
}
