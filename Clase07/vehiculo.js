"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var readlineSync = require('readline-sync');
var Vehiculo = /** @class */ (function () {
    function Vehiculo(estadoMotor, lucesEstado, cambioEstado) {
        this.encendido = estadoMotor;
        this.luces = lucesEstado;
        this.cambio = cambioEstado;
    }
    Vehiculo.prototype.motor = function () {
        if (this.encendido == true) {
            this.encendido = false;
            console.log("Se apagó el motor");
        }
        else {
            this.encendido = true;
            console.log("Se prendió el motor");
        }
    };
    Vehiculo.prototype.onOffLuces = function () {
        if (this.luces == true) {
            this.luces = false;
            console.log("Se apagaron las luces");
        }
        else {
            this.luces = true;
            console.log("Se prendieron las luces");
        }
    };
    Vehiculo.prototype.subirCambio = function () {
        if (this.cambio === 6) {
            console.log("Se encuentra en la 6ta marcha");
        }
        else {
            this.cambio++;
            console.log("Se subio al cambio ".concat(this.cambio));
        }
    };
    Vehiculo.prototype.bajarCambio = function () {
        if (this.cambio === 0) {
            console.log("Se encuentra en cambio Nuetro");
        }
        else {
            this.cambio--;
            console.log("Se bajo al cambio ".concat(this.cambio));
        }
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
