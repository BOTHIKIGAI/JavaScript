// 1. Ejercicio de Variables

/* 

1. Una variable que me permita almacenar el nombre de una persona
2. Una variable "x" para almacenar un número con 2 decimales
3. Una variable constante para almacenar el valor del dólar. 
4. Una variable para almacenar los primeros 7 decimales de “pi”. 
5. Una variable para almacenar los primeros 15 decimales de “Euler”. 
6. Desarrolle un ejercicio por cada carácter de escape

*/

    // Almacenar nombre persona
var namePerson = "Juan Esteban Cajiao Madero";

    // Almacenar un numero con 2 decimales
var x = 1.55;

    // Valor del dolar en una constante
const valorDolar = 5000;

    // Valor de pi con los 7 primeros decimales
var pi = 3.141592;

    // Valor de euler (e) con los primeros 15 decimales
var euler = 2.718281828459045;

    // Ejercicio - 1 - Nombre Persona
document.write("El nombre ingresado es: ");
document.write(namePerson + "<br>");
document.write("<br>")

    // Ejercicio - 1 - Dos decimales
document.write("El numero ingresado es: " + x + "<br>");
var resultado = x > 1;
document.write("¿1.55 es mayor que 1?: " + resultado + "<br>");
document.write("<br>")

    // Ejercicio - 1 - Dolar
document.write("El dolar tiene un valor de COP" + valorDolar + " tengo 10 dolares ¿cuanto dinero tengo en COP? " + "<br>");
document.write("Al tener 10 dolares y pasarlo a COP se tendra COP" + valorDolar * 10 + "<br>");
document.write("<br>")

    // Ejercico - 1 - Valor de pi
document.write("Calcular el area de un circulo");
document.write("Para calcular el area se usara la siguiente formula A = π * r^2" + "<br>");
document.write("A = " + pi + " * " + " 5^2 " + "<br>");
document.write("A = " + pi + " * " + 25 + "<br>");
document.write("A = " + pi * 25 + " unidades cuadradas" + "<br>");
document.write("<br>")

    // Ejercicio - 1 - Euler
document.write("Euler: " + euler + "<br>");
document.write("<br>")
