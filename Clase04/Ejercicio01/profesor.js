"use strict";
exports.__esModule = true;
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nameP) {
        this.nombreProfesor = nameP;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombreProfesor;
    };
    return Profesor;
}());
exports.Profesor = Profesor;
