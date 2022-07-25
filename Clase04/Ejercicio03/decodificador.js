"use strict";
exports.__esModule = true;
var televisor_1 = require("./televisor");
var Decodificador = /** @class */ (function () {
    function Decodificador() {
    }
    Decodificador.prototype.decodificarCanal = function (telev, canalDec) {
        if (telev.obtenerInfo(canalDec) === undefined) {
            console.log("No se ha encontrado el canal seleccionado");
        }
        else if (telev.obtenerInfo(canalDec) === false) {
            console.log("Decodificando el canal ".concat(telev.obtenerNombre(canalDec)));
        }
        else {
            console.log("No es necesario decodificar el canal ".concat(telev.obtenerNombre(canalDec)));
        }
    };
    return Decodificador;
}());
var tele = new televisor_1.Televisor;
var Deco = new Decodificador;
Deco.decodificarCanal(tele, 1);
