"use strict";
exports.__esModule = true;
var computadora_1 = require("../Clase02/computadora");
var readlineSync = require('readline-sync');
var compu = new computadora_1.computadora();
var accion = Number(readlineSync.question("(1) Ajustar Brillo - (2) Ajuste Wi-Fi - (3) Subir Volumen - (4) Bajar Volumen - (5) Salir: "));
while (accion !== 5) {
    if (accion === 1) {
        var brilloIngresado = Number(readlineSync.question("Ingrese el valor de brillo de pantalla: "));
        compu.cambiarBrillo(brilloIngresado);
    }
    if (accion === 2) {
        var wifiEstado = Number(readlineSync.question("Prender Wi-Fi (1) - Apagar Wi-Fi (2): "));
        compu.cambiarWifi(wifiEstado);
    }
    if (accion === 3) {
        compu.subirVolumen();
    }
    if (accion === 4) {
        compu.bajarVolumen();
    }
    accion = Number(readlineSync.question("(1) Ajustar Brillo - (2) Ajuste Wi-Fi - (3) Subir Volumen - (4) Bajar Volumen - (5) Salir: "));
}
