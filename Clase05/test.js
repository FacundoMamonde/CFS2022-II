"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var GestorLibros_1 = require("./GestorLibros");
var LectorArchivo_1 = require("./LectorArchivo");
/// Se crea una bibliote para guardar libros
var archivo = new GestorLibros_1.GestorLibros;
var lector = new LectorArchivo_1.LectorArchivos(archivo);
lector.retornarArchivo();
function fNewLibro() {
    var newName = String(readlineSync.question("Ingrese el nombre del libro: "));
    var newAuthor = String(readlineSync.question("Ingrese el nombre del Autor: "));
    var newYear = Number(readlineSync.question("Ingrese el a\u00F1o del libro: "));
    var newPages = Number(readlineSync.question("Ingrese las paginas del libro: "));
    archivo.agregarLibro(newName, newAuthor, newYear, newPages);
}
var consultaLibro;
var modificarLibro;
var eliminarLibroNum;
var consulta = Number(readlineSync.question("(1) Agregar Libro - (2) Consultar Libro - (3) Modificar Libro - (4) Eliminar Libro - (5) Mostrar Biblioteca - (6) Salir : "));
while (consulta !== 6) {
    if (consulta == 1) {
        fNewLibro();
    }
    else if (consulta == 2) {
        consultaLibro = Number(readlineSync.question("Ingrese el numero del Libro a consultar: "));
        archivo.consultarLibro(consultaLibro);
    }
    else if (consulta == 3) {
        modificarLibro = Number(readlineSync.question("Ingrese el numero del libro a modificar: "));
        archivo.modificarLibro(modificarLibro);
    }
    else if (consulta == 4) {
        eliminarLibroNum = Number(readlineSync.question("Ingrese el numero del libro a eliminar: "));
        archivo.eliminarLibro(eliminarLibroNum);
    }
    else if (consulta == 5) {
        archivo.mostrar();
    }
    consulta = Number(readlineSync.question("(1) Agregar Libro - (2) Consultar Libro - (3) Modificar Libro - (4) Eliminar Libro - (5) Mostrar Biblioteca - (6) Salir : "));
}
