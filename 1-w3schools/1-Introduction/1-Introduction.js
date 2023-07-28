// JavaScript puede cambiar el contenido HTML

document.getElementById("demo").innerHTML = "Hello JavaScript";

    // document: Es un objeto global en JavaScript que representa el documento HTML actual
    // getElementById("demo"): Es un método del objeto 'document' que se utiliza para seleccionar un elemento HTML 'id' especifico
    // innerHTML: Es una propiedad de los elementos HTML que permite acceder y modificar el contenido interno del elemento
    // =:  Es el operador de asignación que se utiliza para asignar un valor a una variable o propiedad.


// JavaScript puede cambiar los estilos HTML (CSS)

document.getElementById("demo1").style.fontSize = "35px";

    /* 
    
    document: Es un objeto global en JavaScript que representa el documento HTML actual
    getElementById("demo"): Es un método del objeto 'document' que se utiliza para seleccionar un elemento HTML 'id' especifico
    style: Es una propiedad de los elementos HTML que representa los estilos en línea aplicados a ese elemento. Los estilos en 
           línea son estilos CSS que se aplican directamente al elemento utilizando el atributo style en la etiqueta HTML.
    fontsize:  Es una propiedad del objeto style que especifica el tamaño de fuente (tamaño de letra) aplicado al elemento. 
               Permite acceder o modificar el tamaño de la fuente mediante JavaScript.
    
    */

    
// JavaScript puede mostrar elementos HTML

document.getElementById("demo2").style.display = "none";

    /* 
    
    document: Es un objeto global en JavaScript que representa el documento HTML actual
    getElementById("demo"): Es un método del objeto 'document' que se utiliza para seleccionar un elemento HTML 'id' especifico
    style: Es una propiedad de los elementos HTML que representa los estilos en línea aplicados a ese elemento. Los estilos en 
           línea son estilos CSS que se aplican directamente al elemento utilizando el atributo style en la etiqueta HTML.
    display: Es una propiedad del objeto style que controla cómo se muestra el elemento. Esta propiedad puede tomar diferentes 
             valores que determinan cómo el elemento se visualiza en la página.
    none: Es uno de los posibles valores que puede tomar la propiedad display. Cuando se establece display en "none", el elemento 
          se oculta y no se mostrará en la página. Es como si el elemento no estuviera presente en el diseño de la página, aunque 
          aún existe en el DOM (modelo de objetos del documento) y puede ser manipulado mediante JavaScript.

    */