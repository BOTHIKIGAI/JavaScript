function listadoNumeros() {
    // Obtener el elemento donde se mostrará la tabla
    var resultadoElemento = document.getElementById("resultado_AgenciaModelaje");

    // Definir la tabla y su cabecera
    var tablaHTML = "<table>";
    tablaHTML += "<tr> <th> Numero </th> <th> Potencia de dos </th> <th> Raiz </th> </tr>";

    // Bucle para generar las filas de la tabla con los números del 1 al 10, sus potencias de dos y raíces
    for (var numero = 1; numero <= 10; numero++) {
        tablaHTML += "<tr> <td>" + numero + "</td> <td>" + (numero ** 2) + "</td> <td>" + Math.sqrt(numero) + "</td> </tr>";
    }

    // Cerrar la tabla
    tablaHTML += "</table>";

    // Mostrar la tabla en el elemento resultado
    document.getElementById("resultado_ListadoNumeros").innerHTML = tablaHTML;
}
