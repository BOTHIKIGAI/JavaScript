/* 

Primer Ejercicio

(1) jean color azul por valor de $90.000
(7) pijama niña por valor cada una de $25.000
(4) camisetas por valor de $100.000

El almacén en el momento está realizando una promoción sobre algunos artículos asì:
- Las pijamas tienen un descuento del 20% si se llevan más de 3.
- Las camisetas tienen una promociòn de llevan 4 pagan 3
- Las pantalonetas tienen 50% en la primera unidad y 30% en la segunda

Se debe calcular:
- El valor total de compra por artículo
- El valor total de la compra realizada
- Impuestos por compra de 19%
- Valor de descuentos aplicados
- Valor total de compra aplicados descuentos e impuestos

Requisitos:

1. Ingresar la cantidad de jean, pijma y camisena
2. Calcular los descuentos por cantidad
3. Calcular: 
    3. Valor total de compra por articulo (por grupo)
    3. Valor total de compra total (sin descuento ni impuesto)
    3. Impuesto del 19%
    3. Valor del decuento aplicado
4. Valor total de compra aplicado descuento e impuesto


*/



// Defincion funcion

function calcular() {

    // Definición Variables para almacenar cantidad producto

    var NumJean = parseInt (document.getElementById("Cantidad_Jeans").value);
    var NumPijamas = parseInt (document.getElementById("Cantidad_Pijamas").value);
    var NumCamisetas = parseInt (document.getElementById("Cantidad_Camisetas").value);

    // Definición Variables valores productos

    var ValorJean = 90000;
    var ValorPijamas = 25000;
    var ValorCamisetas = 100000;

    // Definción Variable valor total por producto sin descuento

    var ValorJeanNoDesc = NumJean * ValorJean;
    var ValorPijamasNoDesc = NumPijamas * ValorPijamas;
    var ValorCamisetasNoDesc = NumCamisetas * ValorCamisetas;

    // Definción Variable valor total compra sin descuento

    var ValorTotalCompraNoDesc = ValorJeanNoDesc + ValorPijamasNoDesc + ValorCamisetasNoDesc;

    // Definición variable impuesto sobre la compra

    var VTCIVANoDescuentoI = ValorTotalCompraNoDesc + (ValorTotalCompraNoDesc * 0.19);

    
    // Descuentos 

    /*
     
    El almacén en el momento está realizando una promoción sobre algunos artículos asì:

    - Las pijamas tienen un descuento del 20% si se llevan más de 3.
    - Las camisetas tienen una promociòn de llevan 4 pagan 3
    - Las pantalonetas tienen 50% en la primera unidad y 30% en la segunda

    */

    // Jeanes descuentos

    if (NumPijamas > 3) {
        
        var ValorJeanDesc = ValorPijamasNoDesc - (ValorPijamasNoDesc * 0.20);

    } else  {

        var ValorJeanDesc = ValorPijamasNoDesc;

    }



    // Pantalones descuentos 

    if (NumJean == 1) { 

        // Si el numero de Jeans es igual a 1, se realizara un descuento general del 50%

        var ValorJeanDesc = ValorJeanNoDesc - (ValorJeanNoDesc * 0.50);

    } 

    else if (NumJean >= 2) {

        // Si el numeor de jeans es mayor o igual a dos, se realizara un descuento al primer Jean del 50% y al segundo uno de 30%

        var ValorJeanDesc = ValorJeanNoDesc - (ValorJean + (ValorJean * 0.50)) - (ValorJean + (ValorJean * 0.30));
            // ValorJeanDesc = (numero de jeans * su valor) menos (valor de un jean con descuento del 50%) menos (valor de un jean con descuento del 30%)


    } else {

        var ValorJeanDesc = "error";
            // por si sucede algo y no se como explicarlo

    }


    // Imprimir Cantidad de elementos

    document.getElementById("resultadoPrimeroCantidadProducto").innerHTML = "<h3>Cantidad productos</h3>" + "Jean: " + NumJean + "<br>" + "Pijamas: " + NumPijamas + "<br>" + "Pijamas: " + NumCamisetas;
    
    // Imprimr valor total producto
    
    document.getElementById("ingresarValorTotalProducto").innerHTML ="<h3>Valor total por cantidad productos sin descuento</h3>" + "Jean: $" + ValorJeanNoDesc + "<br>" + "Pijamas: $" + ValorPijamasNoDesc + "<br>" + "Pijamas: $" + ValorCamisetasNoDesc;

    // Imprimir valor total compra realizada (sin descuentos)

    document.getElementById("ingresarValorTotalProductoCompra").innerHTML ="<h3>Valor total compra sin descuento ni IVA</h3>" + "Total: $" + ValorTotalCompraNoDesc;

    // Imprimir valor total compra realizada + IVA (sin descuentos)

    document.getElementById("ingresarValorTotalProductoCompraconIva").innerHTML = "<h3>Valor total compra sin descuento pero con IVA</h3>" + "Total: $" + VTCIVANoDescuentoI;
}