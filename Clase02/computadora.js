"use strict";
exports.__esModule = true;
exports.computadora = void 0;
var readlineSync = require('readline-sync');
var computadora = /** @class */ (function () {
    function computadora() {
        this.brillo = 100;
        this.wifi = 1;
        this.volumen = 90;
    }
    computadora.prototype.cambiarBrillo = function (estado) {
        this.brillo = estado;
        while (this.brillo < 0 || this.brillo > 101) {
            var brilloIngresado = Number(readlineSync.question("Ingrese el valor de brillo de pantalla (Entre 0 y 100): "));
            this.brillo = brilloIngresado;
        }
        console.log("Se ha cambiado el brillo a ".concat(this.brillo, "%"));
    };
    computadora.prototype.cambiarWifi = function (estado) {
        this.wifi = estado;
        if (this.wifi === 1) {
            console.log("El Wi-Fi esta ahora activado");
        }
        if (this.wifi === 2) {
            console.log("El Wi-Fi esta ahora desactivado");
        }
    };
    computadora.prototype.subirVolumen = function () {
        if (this.volumen >= 100) {
            console.log("Volumen esta al maximo nivel");
        }
        else {
            this.volumen++;
            console.log("El volumen actual es ahora: ".concat(this.volumen, "%"));
        }
    };
    computadora.prototype.bajarVolumen = function () {
        if (this.volumen < 0) {
            console.log("Volumen esta al minimo nivel");
        }
        else {
            this.volumen--;
            console.log("El volumen actual es ahora: ".concat(this.volumen, "%"));
        }
    };
    return computadora;
}());
exports.computadora = computadora;
var compu = new computadora();
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
