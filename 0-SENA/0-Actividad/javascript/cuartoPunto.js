/* 

4.	Un trabajador contratado directamente por la empresa se desempeña como director de obra, y su asignación 
salarial es de $3.500.000 y trabaja semanalmente 3 horas extras diurnas y 3 horas extras nocturnas. 
Adicionalmente, le descuentan aportes, a salud y pensión, Calcule:

●	Auxilio de transporte
●	Valor horas extras diurnas
●	Valor horas extras nocturnas
●	Valor total horas extras
●	Valor devengado
●	Total deducciones
●	Neto a pagar

*/

    // salario
var salario = prompt("Digite Salario: ");
var salario = parseInt(salario);

    // auxilio de transporte
if (salario <= 2320000) {
    var auxTransporte = 140606;
} else {
    var auxTransporte = 0;
}

    // valor hora de trabajo
var valHoraTrabajo = salario / 240;

    // valor de una hora extra diurna
var horExtraDiurna = (valHoraTrabajo * 0.25) + valHoraTrabajo;

// valor de una hora extra nocturna
var horExtraNocturna = (valHoraTrabajo * 0.75) + valHoraTrabajo;

    // valor total horas extras (diurnas y nocturnas)
var valTotalTrabajo = horExtraDiurna + horExtraNocturna;

// valor devengado de un mes de trabajo
    /* Son 12 horas en todo el mes, tanto nocturnas como diurnas, por lo cual multiplico el valor de la hora extra por 12 */
var devMesTrabajo = (salario + (horExtraDiurna * 12) + (horExtraNocturna * 12));

    // EPS y pensión
var deducciones = (salario * 0.08);

    // Total neto
var salarioNeto = (devMesTrabajo - deducciones);

document.write("<table>");
document.write("<tr><th colspan=2>Comprobante de pago</th></tr>");
document.write("<tr><th>Descripción</th><th>Valor</th></tr>");
document.write("<tr><td>Auxilio de transporte</td><td>$" + Math.round(auxTransporte) + "</td></tr>");
document.write("<tr><td>Valor hora extras diurnas</td><td>$" + Math.round(horExtraDiurna) + "</td></tr>");
document.write("<tr><td>Valor hora extras nocturnas</td><td>$" + Math.round(horExtraNocturna) + "</td></tr>");
document.write("<tr><td>Valor total horas extras</td><td>$" + Math.round(valTotalTrabajo) + "</td></tr>");
document.write("<tr><td>Valor devengado</td><td>$" + Math.round(devMesTrabajo) + "</td></tr>");
document.write("<tr><td>Total deducciones</td><td>$" + Math.round(deducciones) + "</td></tr>");
document.write("<tr><td>Salario neto</td><td>$" + Math.round(salarioNeto) + "</td></tr>");
document.write("</table>");


