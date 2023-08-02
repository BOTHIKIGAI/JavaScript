/* 

while = permite que al declaración swicth pueda ser utilizada una otra vez hasta que el
        usuario quiera salir

switch = Evalua una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta
         declaraciones asociadas a ese case.

*/


var montoCuenta = 100; // Variable para almacenar el saldo inicial
var password = "password123";

function portalTransaccional() {
  var opcionBanco = parseInt(document.getElementById("opcionBanco").value);

  switch (opcionBanco) {
    case 1:
      document.getElementById("contenido").innerHTML = '<form action=""><label for="dineroConsignar">Dinero a consignar:</label> <input type="number" id="dineroConsignar"><br><br><br><button type="button" onclick="consignar()">Consignar</button></form>';
      break;
      
    case 2:
      document.getElementById("contenido2").innerHTML = '<form action=""><label for="dineroRetirar">Dinero a retirar:</label> <input type="number" id="dineroRetirar"><br><br><br><button type="button" onclick="retirar()">Retirar</button></form>';
      break;
    
    case 3:
      document.getElementById("contenido3").innerHTML = '<p>Monto en su cuenta: $' + montoCuenta + '</p>';
      break;
    
    case 4:
      document.getElementById("contenido4").innerHTML = '<form action=""><label for="cuentaConstraseña">Contraseña:</label> <input type="text" id="cuentaConstraseña"><br><br><br><button type="button" onclick="passwordAccount()">Realizar cambio</button></form>';
      break;
    
    case 5:
      document.getElementById("contenido5").innerHTML = 'Hasta luego';
      break;

    default:
      document.getElementById("contenido").innerHTML = "No ingresaste nada";
      document.getElementById("contenido2").innerHTML = "No ingresaste nada";
  }
}

function consignar() {
  var dineroConsignar = parseInt(document.getElementById("dineroConsignar").value);

  montoCuenta += dineroConsignar;
  document.getElementById("contenido").innerHTML = "Se ha consignado $" + dineroConsignar + ". Saldo actual: $" + montoCuenta;
  document.getElementById("contenido2").innerHTML = "";
}

function retirar() {
  var dineroRetirar = parseInt(document.getElementById("dineroRetirar").value);

  if (dineroRetirar > montoCuenta) {
    document.getElementById("contenido").innerHTML = "El monto a retirar es mayor al monto dentro de la cuenta";
    document.getElementById("contenido2").innerHTML = "";
  } else {
    montoCuenta -= dineroRetirar;
    document.getElementById("contenido").innerHTML = "Se ha retirado $" + dineroRetirar + ". Saldo actual: $" + montoCuenta;
    document.getElementById("contenido2").innerHTML = "";
  }
}
function passwordAccount() {
  var cuentaConstraseña = document.getElementById("cuentaConstraseña").value;
  
  if (password == cuentaConstraseña) {
    document.getElementById("contenido4").innerHTML = "La contraseña ingresada es la misma"; 
  } else {
    password = cuentaConstraseña;
    document.getElementById("contenido4").innerHTML = "El cambio se ha realizado, la nueva contraseña es: " + cuentaConstraseña;
  }
}
