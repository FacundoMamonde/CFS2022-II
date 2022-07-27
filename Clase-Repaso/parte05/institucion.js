"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var examen_1 = require("./examen");
var Institucion = /** @class */ (function () {
    function Institucion(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }
    Institucion.prototype.addAlumno = function (newAlumno) {
        this.alumnos.push(newAlumno);
    };
    Institucion.prototype.allPromedio = function () {
        var sumaTotal = 0;
        this.alumnos.forEach(function (e) {
            sumaTotal = sumaTotal + e.getPromedio();
        });
        return sumaTotal / this.alumnos.length;
    };
    return Institucion;
}());
var institucion = new Institucion("CIC");
var al1 = new alumno_1.Alumno("Facundo", 26);
var al1ex1 = new examen_1.Examen(10, "Matematicas");
var al1ex2 = new examen_1.Examen(8, "Literatura");
al1.loadExamen(al1ex1);
al1.loadExamen(al1ex2);
var al2 = new alumno_1.Alumno("Valentino", 6);
var al2ex1 = new examen_1.Examen(7, "Historia");
var al2ex2 = new examen_1.Examen(10, "Geologia");
al2.loadExamen(al2ex1);
al2.loadExamen(al2ex2);
institucion.addAlumno(al1);
institucion.addAlumno(al2);
console.log("El promedio de todos los alumnos es de: " + institucion.allPromedio());
