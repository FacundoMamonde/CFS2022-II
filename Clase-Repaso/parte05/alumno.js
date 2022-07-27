"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = [];
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getEdad = function () {
        return this.edad;
    };
    Alumno.prototype.loadExamen = function (examen) {
        this.notas.push(examen);
    };
    Alumno.prototype.getPromedio = function () {
        var promedio = 0;
        var sumaTotal = 0;
        this.notas.forEach(function (e) {
            sumaTotal = sumaTotal + e.getNota();
        });
        promedio = sumaTotal / this.notas.length;
        return promedio;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
