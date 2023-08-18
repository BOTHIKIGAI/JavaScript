// Función capitalizarPalabras
// Descripción: Capitaliza cada palabra en un string.
// Parámetro: str - El string que se desea capitalizar.
// Devuelve: Un nuevo string con las palabras capitalizadas.
function capitalizarPalabras(str) {
    return str.replace(/\b\w/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  // Función capitalizarTexto
  // Descripción: Capitaliza el texto ingresado por el usuario y muestra el resultado en la página.
  function capitalizarTexto() {
    // Capturar el texto ingresado por el usuario desde el elemento con el id "inputTexto"
    var inputTexto = document.getElementById("inputTexto").value;
    
    // Capitalizar el texto utilizando la función capitalizarPalabras
    var textoCapitalizado = capitalizarPalabras(inputTexto);
    
    // Mostrar el resultado capitalizado en un elemento con el id "resultado"
    document.getElementById("resultado").textContent = "Texto capitalizado: " + textoCapitalizado;
  }
  