"use strict";
exports.__esModule = true;
exports.LectorArchivos = void 0;
var fs = require("fs");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos(bibliotecaToRead) {
        this.biblioteca = bibliotecaToRead;
    }
    LectorArchivos.prototype.retornarArchivo = function () {
        var _this = this;
        var file = fs.readFileSync('libros.txt', 'utf8');
        var files = file.split('\n');
        files.forEach(function (element) {
            var libroInfo = element.split(';');
            _this.biblioteca.agregarLibro(libroInfo[0], libroInfo[1], Number(libroInfo[2]), Number(libroInfo[3]));
        });
        return files;
    };
    return LectorArchivos;
}());
exports.LectorArchivos = LectorArchivos;
