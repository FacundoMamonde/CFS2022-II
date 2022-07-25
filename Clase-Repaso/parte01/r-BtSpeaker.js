"use strict";
exports.__esModule = true;
var pista_1 = require("./pista");
var BtSpeaker = /** @class */ (function () {
    function BtSpeaker() {
    }
    BtSpeaker.prototype.reproducirCancion = function (pista) {
        return "Reproductiendo la cancion " + pista.getTitulo();
    };
    BtSpeaker.prototype.reproducirLista = function (lista) {
        return "Reproduciendo la cancion ";
    };
    BtSpeaker.prototype.detener = function () {
        return "Se detuvo la cancion";
    };
    BtSpeaker.prototype.mensajeEncendido = function () {
        return "Para encender el parlante, mantenga presionado el boton de play";
    };
    BtSpeaker.prototype.mensajeApagado = function () {
        return "Para apagar el parlante, mantenga presionado el boton de play por 7 segundos";
    };
    return BtSpeaker;
}());
var parlantito = new BtSpeaker();
var cancion = new pista_1.Pista(154, "Cancion", 54, "Cantante");
console.log(parlantito.reproducirCancion(cancion));
