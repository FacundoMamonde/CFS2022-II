"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var vuelta = 0;
var tiempoTotal = 0;
for (var i = 1; i <= 4; i++) {
    vuelta = Number(readlineSync.question("Ingrese el tiempo de la vuelta ".concat(i, ": ")));
    tiempoTotal += vuelta;
}
var promedioVueltas = (tiempoTotal / 4);
console.log("El tiempo total fue de: ".concat(tiempoTotal));
console.log("El promedio de vuelta fue de: ".concat(promedioVueltas));
