"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var arregloPalabras = ["Computadora", "Teclado", "Monitor", "Mouse", "Parlante"];
function insertar() {
    var palabraInsertar = String(readlineSync.question("Ingrese la palabra a insertar: "));
    arregloPalabras.push(palabraInsertar);
    console.log(arregloPalabras);
    arregloPalabras.sort();
}
function eliminar() {
    var palabraEliminar = String(readlineSync.question("Ingrese la palabra a eliminar: "));
    for (var i = 0; i < arregloPalabras.length; i++) {
        if (arregloPalabras[i] === palabraEliminar) {
            delete arregloPalabras[i];
            console.log("Se elimino la palabra ".concat(palabraEliminar, " de la posicion ").concat(i));
            arregloPalabras.sort();
        }
    }
    console.log(arregloPalabras);
}
function buscar() {
    var palabraBuscar = String(readlineSync.question("Ingrese la palabra a buscar: "));
    for (var i = 0; i < arregloPalabras.length; i++) {
        if (arregloPalabras[i] === palabraBuscar) {
            console.log("Se encontro la palabra ".concat(palabraBuscar, " en la posicion ").concat(i + 1));
        }
    }
    console.log(arregloPalabras);
}
function actualizar() {
    var palabraActualizar = String(readlineSync.question("Ingrese la palabra a actualizar: "));
    var palabraNueva = String(readlineSync.question("Ingrese la palabra nueva: "));
    for (var i = 0; i < arregloPalabras.length; i++) {
        if (arregloPalabras[i] === palabraActualizar) {
            arregloPalabras[i] = palabraNueva;
            console.log("Se actualizo correctamente la palabra ".concat(palabraActualizar, " por ").concat(palabraNueva));
        }
    }
    console.log(arregloPalabras);
}
insertar();
eliminar();
buscar();
actualizar();
