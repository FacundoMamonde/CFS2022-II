"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var libro_1 = require("./libro");
var readlineSync = require("readline-sync");
var GestorLibros = /** @class */ (function () {
    function GestorLibros() {
        this.biblioteca = [];
    }
    GestorLibros.prototype.agregarLibro = function (newName, newAuthor, newYear, newPages) {
        var nuevoLibro = new libro_1.Libro(newName, newAuthor, newPages, newYear);
        this.biblioteca.push(nuevoLibro);
    };
    GestorLibros.prototype.consultarLibro = function (numLibroToConsult) {
        var libroToConsult = this.biblioteca[numLibroToConsult];
        console.log("Nombre: ".concat(libroToConsult.consultaNombre(), ", Autor: ").concat(libroToConsult.consultaAutor(), ", A\u00F1o: ").concat(libroToConsult.consultaYear(), ", P\u00E1ginas: ").concat(libroToConsult.consultaPaginas(), " "));
    };
    GestorLibros.prototype.modificarLibro = function (libroToModify) {
        var newName = String(readlineSync.question("Ingrese el nombre del libro: "));
        var newAuthor = String(readlineSync.question("Ingrese el nombre del Autor: "));
        var newYear = Number(readlineSync.question("Ingrese el a\u00F1o del libro: "));
        var newPages = Number(readlineSync.question("Ingrese las paginas del libro: "));
        var modificado = new libro_1.Libro(newName, newAuthor, newPages, newYear);
        this.biblioteca[libroToModify] = modificado;
    };
    GestorLibros.prototype.eliminarLibro = function (libroToDelete) {
        delete this.biblioteca[libroToDelete];
        console.log("Libro eliminado correctamente");
    };
    GestorLibros.prototype.mostrar = function () {
        console.log(this.biblioteca);
    };
    GestorLibros.prototype.obtenerBiblioteca = function () {
        return this.biblioteca;
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
