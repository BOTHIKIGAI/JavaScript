// Push
    /* let miArreglo = [1, 2, 3];
        miArreglo.push(4, 5);
        console.log(miArreglo);  Resultado: [1, 2, 3, 4, 5]
    */

// pop

    /* 
        let miArreglo = [1, 2, 3, 4, 5];
        let elementoEliminado = miArreglo.pop();
        console.log(miArreglo); // Resultado: [1, 2, 3, 4]
        console.log(elementoEliminado); // Resultado: 5
    */

// unshift

    /* 
        miArreglo.unshift(elemento1, elemento2, ..., elementoN);
        let miArreglo = [3, 4, 5];
        miArreglo.unshift(1, 2);
        console.log(miArreglo); // Resultado: [1, 2, 3, 4, 5]

    */

// shift

    /* 
        miArreglo.shift();
        let miArreglo = [1, 2, 3, 4, 5];
        let elementoEliminado = miArreglo.shift();
        console.log(miArreglo); // Resultado: [2, 3, 4, 5]
        console.log(elementoEliminado); // Resultado: 1
    
    */

// indexof

    /* 
        miArreglo.indexOf(elementoBuscado);
        miArreglo.indexOf(elementoBuscado);
        let elementoBuscado = 30;
        let indice = miArreglo.indexOf(elementoBuscado);
        console.log(indice); // Resultado: 2

    */

function arreglosFor() {
    
    // crear arreglo
    let juanes = [20, "ADSO", "Python", 19]

    // iniciar for en el cual se agrega numero del 1 al 4
    for (var cantidad = 1; cantidad <= 4; cantidad++) {
        juanes.push(cantidad);
        // resultado: juanes = [ 20,ADSO,Python,19,1,2,3,4 ]

    }

    // imprimo el resultado del primero ciclo for del metodo push
    var PruebaPush = document.getElementById("resultado_ArregloFor").innerHTML = "<p>Metodo Push</p>" + juanes;

    // inicar for en el cual se elimina los elementos del 1 al 4
    for (var cantidad = 4; cantidad >= 1; cantidad--) {
        juanes.pop(cantidad);
        // resultado: juanes = [20,ADSO,Python,19]
    }

    var PruebaPop = document.getElementById("resultado_ArregloForPop").innerHTML = "<p>Metodo Pop</p>" + juanes;

    // iniciar for en el cual agrega al inicio del arreglo los datos
    for (var cantidad = 1; cantidad <= 4; cantidad++) {
        juanes.unshift(cantidad);
        // resultado: juanes = [4,3,2,1,20,ADSO,Python,19]
    }

    var PruebaUnshift = document.getElementById("resultado_ArregloForUnshift").innerHTML = "<p>Metodo Unshift</p>" + juanes;

    // iniciar for en el cual elimino los datos dentro del arreglo 
    for (var cantidad = 4; cantidad >= 1; cantidad--) {
        juanes.shift(cantidad);
        // resultado: juanes = [20,ADSO,Python,19]
    }

    var Pruebashift = document.getElementById("resultado_ArregloForShift").innerHTML = "<p>Metodo Shift</p>" + juanes;

    // iniciar indexof, sin ciclo, unicamente conocer la ubicación e identificar el uso del mismo

    // busco la palabra ADSO dentro del arreglo
    var ubicacionADSO = juanes.indexOf("ADSO");
        // resultado = 1

    // agrego al arreglo la palabra ADSO por segunda vez, se le agrega otro indicación
    juanes.push("ADSO");
    var ubicacionADSO2 = juanes.indexOf("ADSO",2);
        // resultado
        // juanes = [20,ADSO,Python,19,ADSO]
        // ubicacionADSO = 4 | Esto sucede porque le pedi el segundo resultado
    
    var Pruebashift = document.getElementById("resultado_ArregloForIndexOf").innerHTML = "<p>Metodo IndexOf de ADSO</p>" + ubicacionADSO + "<p>Metodo IndexOf con dos ADSO</p>" + ubicacionADSO2;


}