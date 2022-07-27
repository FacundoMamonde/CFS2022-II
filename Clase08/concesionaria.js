"use strict";
exports.__esModule = true;
exports.Concesionaria = void 0;
var Concesionaria = /** @class */ (function () {
    function Concesionaria() {
        this.autos = [];
    }
    Concesionaria.prototype.addAuto = function (auto) {
        this.autos.push(auto);
    };
    Concesionaria.prototype.printAuto = function () {
        this.autos.forEach(function (e) {
            console.log("".concat(e.getUsabilidad(), " - ").concat(e.getMarca(), " ").concat(e.getModelo()));
        });
    };
    return Concesionaria;
}());
exports.Concesionaria = Concesionaria;
