"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var readlineSync = require('readline-sync');
var Auto = /** @class */ (function () {
    function Auto(estadoMotor, lucesEstado, cambioEstado) {
        this.encendido = estadoMotor;
        this.luces = lucesEstado;
        this.cambio = cambioEstado;
    }
    Auto.prototype.motor = function () {
        if (this.encendido == true) {
            this.encendido = false;
            console.log("Se apagó el motor");
        }
        else {
            this.encendido = true;
            console.log("Se prendió el motor");
        }
    };
    Auto.prototype.onOffLuces = function () {
        if (this.luces == true) {
            this.luces = false;
            console.log("Se apagaron las luces");
        }
        else {
            this.luces = true;
            console.log("Se prendieron las luces");
        }
    };
    Auto.prototype.subirCambio = function () {
        if (this.cambio === 6) {
            console.log("Se encuentra en la 6ta marcha");
        }
        else {
            this.cambio++;
            console.log("Se subio al cambio ".concat(this.cambio));
        }
    };
    Auto.prototype.bajarCambio = function () {
        if (this.cambio === 0) {
            console.log("Se encuentra en cambio Nuetro");
        }
        else {
            this.cambio--;
            console.log("Se bajo al cambio ".concat(this.cambio));
        }
    };
    return Auto;
}());
exports.Auto = Auto;
var autoUno = new Auto(false, false, 0);
var accion = Number(readlineSync.question("(1) On/Off Motor - (2) On/Off Luces - (3) Subir cambio - (4) Bajar cambio - (5) Salir: "));
while (accion !== 5) {
    if (accion === 1) {
        autoUno.motor();
    }
    if (accion === 2) {
        autoUno.onOffLuces();
    }
    if (accion === 3) {
        autoUno.subirCambio();
    }
    if (accion === 4) {
        autoUno.bajarCambio();
    }
    console.log("----------------------------------------");
    accion = Number(readlineSync.question("(1) On/Off Motor - (2) On/Off Luces - (3) Subir cambio - (4) Bajar cambio - (5) Salir: "));
}
