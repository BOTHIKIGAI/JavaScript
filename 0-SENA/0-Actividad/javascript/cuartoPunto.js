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

var trabajador = "Juanes";
var rolTrabajador = "Director de obra";
var salario = 3500000;

    // calcular el valor de la hora en base a 8 horas de trabajo de trabajo, pensando que trabaja 240 horas por 30 dias
var valorXhoraDiurna = 14583;

    // La hora nocturna tiene un valor agregado de 8.458
var valorAgregadoXhoraNocturna = 8458;

    // axulio de transporte en colombia
var auxTransporte = 140606;

    // porcentaje del aporte a pension es del 16%
var porcentajeAportePensión = 0.16;

    // porcentaje del aporte a slud es del 12,5%
var porcentajeAporteSalud = 0.12;

    // numero de horas trabajadas
var numeroHorasDiurnas = 8;

    // numero de horas nocturnas trabajadas
var numeroHorasNocturnas = 3;

    // numero de horas extras diurnas
var numeroHorasExtrasDiurnas = 3;

    // valor de un dia de trabajo sin deducciones
var salarioCalculo = (((valorXhoraDiurna * (numeroHorasDiurnas + numeroHorasExtrasDiurnas)) + (valorAgregadoXhoraNocturna * numeroHorasNocturnas)));

    // valor de un dia de trabajo con deducciones
var totalDeducciones = (auxTransporte+((salarioCalculo*30) * (porcentajeAportePensión+porcentajeAporteSalud)));


document.write("El auxilio de transporte es de: $" + auxTransporte + "<br>");
document.write("El valor de las horas extras diurnas es: $" + (valorXhoraDiurna * numeroHorasExtrasDiurnas) + "<br>")
document.write("El valor de las horas extras nocturnas es: $" + (valorAgregadoXhoraNocturna * numeroHorasNocturnas) + "<br>");
document.write("El valor total de un dia de trabajo es de $" + salarioCalculo + "<br>");
document.write("El valor del devengado es de $" + (salarioCalculo * 30) + "<br>");
document.write("El valor total de las deducciones es de $" + totalDeducciones + "<br>");
document.write("El neto a pagar es de $" + ((salarioCalculo*30) - totalDeducciones) + "<br>");


