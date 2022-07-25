"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombre, autor, paginas, anio) {
        this.name = nombre;
        this.author = autor;
        this.pages = paginas;
        this.year = anio;
    }
    Libro.prototype.consultaNombre = function () {
        return this.name;
    };
    Libro.prototype.consultaAutor = function () {
        return this.author;
    };
    Libro.prototype.consultaPaginas = function () {
        return this.pages;
    };
    Libro.prototype.consultaYear = function () {
        return this.year;
    };
    return Libro;
}());
exports.Libro = Libro;
