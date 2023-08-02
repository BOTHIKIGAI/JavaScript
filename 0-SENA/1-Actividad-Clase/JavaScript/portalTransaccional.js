/* 

while = permite que al declaración swicth pueda ser utilizada una otra vez hasta que el
        usuario quiera salir

switch = Evalua una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta
         declaraciones asociadas a ese case.

*/


function portalTransaccional() {
    var opcionBanco = parseInt(document.getElementById("opcionBanco").value);

    switch (opcionBanco) {
        case 1:
            document.getElementById("contenido").innerHTML = '<form action=""><label for="dineroConsignar">Dinero a consignar:</label> <input type="number" id="dineroConsignar"><br><br><br><button type="button" onclick="consignar()">Consignar</button></form>';
            break;
        
        case 2:
            document.getElementById("contenido").innerHTML = '<form action=""><label for="dineroConsignar">Dinero a consignar:</label> <input type="number" id="dineroConsignar"><br><br><br><button type="button" onclick="consignar()">Consignar</button></form>';

      default:
            document.getElementById("contenido").innerHTML = "No ingresaste nada";
    }
  }

  function consignar() {
    var dineroConsignar = parseInt(document.getElementById("dineroConsignar").value);
    var montoCuenta = 100; // Puedes obtener este valor de alguna otra fuente

    montoCuenta += dineroConsignar;
    document.getElementById("contenido").innerHTML = "Se ha consignado $" + dineroConsignar + ". Saldo actual: $" + montoCuenta;
  }

  function retirar() {
    
  }