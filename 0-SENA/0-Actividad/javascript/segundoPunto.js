// 2. Elabore los ejercicios propuestos de operadores:

/* 

2.1 Crear una variable llamada “ladoCuadrado” de valor 8. Calcular el área y el perímetro del cuadrado a 
partir de la variable anteriormente creada.  

*/

    // Lado del cuadro
    var ladoCuadrado = 8;

    // Calculando area del cuadrado
document.write("El area de un cuadrado con lado " + ladoCuadrado + " es de " + ladoCuadrado * ladoCuadrado + " unidades cuadradas" + "<br>");

    // Calcular el perimetro de un cuadrado
document.write("El perimetro de un cuadrado con lado " + ladoCuadrado + " es de " + ladoCuadrado * 4 + " unidades" + "<br>");
document.write("<br>");


    // Variable base del triangulo
var baseTriangulo = 9;

    // Variable altura del triangulo
var alturaTriangulo = 8;

    // Lados del triangulo
var ladoUnoTriangulo = 8;
var ladoDosTriangulo = 8;

    // Calcula area del triangulo mediante la formula de Heron

var s = (baseTriangulo + ladoUnoTriangulo + ladoDosTriangulo) / 2;
var area = Math.sqrt(s * (s - baseTriangulo) * (s - ladoUnoTriangulo) * (s - ladoDosTriangulo));
document.write("El area del triangulo es: " + area + " unidades cuadradas " + "<br>");

    // Calcula el perimetro de un triangulo 
document.write("El perimetro del triangulo es: " + (baseTriangulo+ladoUnoTriangulo+ladoDosTriangulo) + " unidades" + "<br>")
document.write("<br>")

    // variable base del rectangulo 
var baseRectangulo = 8;

    // variable altura del rectangulo
var alturaRectangulo = 6;

    // calcular el area de un rectangulo
document.write("El area del rectangulo es: " + baseRectangulo * alturaRectangulo  + " unidades cuadradas " + "<br>");

    // calcular el perimetro de un rectanuglo
document.write("El perimetro del rectangulo es: " + ((baseRectangulo*2)+(alturaRectangulo*2)) + " unidades" + "<br>")
document.write("<br>")

alert("El area de un cuadrado con lado " + ladoCuadrado + " es de " + ladoCuadrado * ladoCuadrado + " unidades cuadradas" + "\n" + "El perimetro de un cuadrado con lado " + ladoCuadrado + " es de " + ladoCuadrado * 4 + " unidades" + "\n");
alert("El area del triangulo es: " + area + " unidades cuadradas " + "\n" + "El perimetro del triangulo es: " + (baseTriangulo+ladoUnoTriangulo+ladoDosTriangulo) + " unidades");
alert("El area del rectangulo es: " + baseRectangulo * alturaRectangulo  + " unidades cuadradas " + "\n" + "El perimetro del rectangulo es: " + ((baseRectangulo*2)+(alturaRectangulo*2)) + " unidades");
