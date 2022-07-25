var arregloUno = [5, "palabra", 5, "palabra", 5];
var arregloDos = [5, 5, 5, 5, 5];
function sumaDeArreglo(arreglo) {
    var suma = 0;
    var error = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (isNaN(arreglo[i])) {
            error = error + 1;
        }
        suma = suma + arreglo[i];
    }
    if (error === 0) {
        console.log(suma);
    }
    else {
        console.log('Error, ' + error + ' elementos del arreglo no son numeros');
    }
}
sumaDeArreglo(arregloUno);
sumaDeArreglo(arregloDos);
