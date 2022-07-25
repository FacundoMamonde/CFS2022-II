"use strict";
exports.__esModule = true;
exports.Pista = void 0;
var Pista = /** @class */ (function () {
    function Pista(id, titulo, duracion, interprete) {
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    Pista.prototype.getID = function () {
        return this.id;
    };
    Pista.prototype.getTitulo = function () {
        return this.titulo;
    };
    Pista.prototype.getDuracion = function () {
        return this.duracion;
    };
    Pista.prototype.getInterprete = function () {
        return this.interprete;
    };
    return Pista;
}());
exports.Pista = Pista;
