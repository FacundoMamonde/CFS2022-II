"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var profesor_1 = require("./profesor");
var Escuela = /** @class */ (function () {
    function Escuela(nameEscuela) {
        this.profesores = [new profesor_1.Profesor("Juli"), new profesor_1.Profesor("Geor")];
        this.alumnos = [new alumno_1.Alumno("Facundo", 7), new alumno_1.Alumno("Junior", 5)];
        this.nombreEscuela = nameEscuela;
    }
    Escuela.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    };
    Escuela.prototype.agregarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.expulsarProfesor = function (profesor) {
        this.profesores.splice(this.profesores.indexOf(profesor));
    };
    return Escuela;
}());
var escuela31 = new Escuela("Escuela N31");
var alumno3 = new alumno_1.Alumno("Juli", 5);
escuela31.agregarAlumno(alumno3);
console.log(escuela31.alumnos);
var profesor3 = new profesor_1.Profesor("Jirafales");
escuela31.agregarProfesor(profesor3);
console.log(escuela31.profesores);
