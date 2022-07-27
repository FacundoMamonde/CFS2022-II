"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(name, note) {
        this.nombre = name;
        this.nota = note;
    }
    Alumno.prototype.consultaAprobado = function () {
        if (this.nota >= 7) {
            console.log("El alumno ".concat(this.nombre, " esta aprobado, con una nota de ").concat(this.nota));
        }
        else {
            console.log("El alumno ".concat(this.nombre, " esta desaprobado, con una nota de ").concat(this.nota));
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
