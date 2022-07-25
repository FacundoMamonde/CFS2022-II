"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 80;
        this.mensajeApagado = "El telefono esta apagado!";
    }
    Telefono.prototype.mandarMensaje = function (destino, mensaje) {
        if (this.estaPrendido === true) {
            console.log(mensaje);
            console.log("Mensaje enviado correctamente a ".concat(destino));
        }
        else {
            console.log(this.mensajeApagado);
        }
    };
    Telefono.prototype.hacerLlamada = function (destinoL) {
        if (this.estaPrendido === true) {
            console.log("Llamando a ".concat(destinoL));
        }
        else {
            console.log(this.mensajeApagado);
        }
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
            console.log('Se apago el telefono');
        }
        else {
            this.estaPrendido = true;
            console.log("Se prendi\u00F3 el telefono");
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
