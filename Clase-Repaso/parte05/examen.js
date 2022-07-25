"use strict";
exports.__esModule = true;
exports.Examen = void 0;
var Examen = /** @class */ (function () {
    function Examen(nota, materia) {
        this.nota = nota;
        this.materia = materia;
    }
    Examen.prototype.getNota = function () {
        return this.nota;
    };
    Examen.prototype.getMateria = function () {
        return this.materia;
    };
    return Examen;
}());
exports.Examen = Examen;
