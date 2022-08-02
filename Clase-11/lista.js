"use strict";
exports.__esModule = true;
exports.Lista = void 0;
var pista_1 = require("./pista");
var errorPista_1 = require("./errorPista");
var readlineSync = require('readline-sync');
var Lista = /** @class */ (function () {
    function Lista(name) {
        this.name = name;
        this.arrayPistas = [];
    }
    Lista.prototype.addSong = function (newSong) {
        if (newSong.getDuracion() <= 0) {
            throw new errorPista_1.PistaError("Duracion no valida");
        }
        this.arrayPistas.push(newSong);
    };
    Lista.prototype.printSongs = function () {
        console.log("Lista de reproducci\u00F3n: ".concat(this.name));
        this.arrayPistas.forEach(function (e) {
            console.log("".concat(e.getDuracion(), " - ").concat(e.getInterprete(), " - ").concat(e.getTitulo, " - (ID: ").concat(e.getID, ") "));
        });
    };
    Lista.prototype.deleteSong = function (selectedSong) {
        var choice = readlineSync("Se eliminara la cancion ".concat(this.arrayPistas[selectedSong].getTitulo, ", confirma que desea eliminarla?(Y/N): "));
        while (choice !== "y" && choice !== "Y" && choice !== "n" && choice !== "N") {
            choice = readlineSync("Se eliminara la cancion ".concat(this.arrayPistas[selectedSong].getTitulo, ", confirma que desea eliminarla?(Y/N): "));
        }
        if (choice === "y" || choice === "Y") {
            delete this.arrayPistas[selectedSong];
        }
        else if (choice === "n" || choice === "N") {
            console.log("Se cancela eliminar la canción");
        }
    };
    return Lista;
}());
exports.Lista = Lista;
var cancion = new pista_1.Pista(156, "Titulo", 0, "Interprete");
var lista = new Lista("Lista nueva");
lista.addSong(cancion);
console.log(lista);
console.log("TEST");
