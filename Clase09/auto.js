"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(us, mar, mod, year) {
        this.usabilidad = us;
        this.marca = mar;
        this.modelo = mod;
        this.year = year;
    }
    Auto.prototype.getUsabilidad = function () {
        return this.usabilidad;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getYear = function () {
        return this.year;
    };
    return Auto;
}());
exports.Auto = Auto;
