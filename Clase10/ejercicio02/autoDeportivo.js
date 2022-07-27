"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AutoDeportivo = void 0;
var vehiculo_1 = require("./vehiculo");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(estadoMotor, patrocinador, neumaticoL) {
        var _this = _super.call(this, estadoMotor) || this;
        _this.patrocinadorPrincipal = patrocinador;
        _this.neumaticoLiso = neumaticoL;
        return _this;
    }
    AutoDeportivo.prototype.acelerar = function (potencia) {
        var aceleracion = (potencia * 20);
        console.log("Esta auto Deportivo tiene una aceleracion de: ".concat(aceleracion));
    };
    AutoDeportivo.prototype.cambiarNeumatico = function () {
        if (this.neumaticoLiso === false) {
            this.neumaticoLiso = true;
            console.log('Se coloco neumatico liso');
        }
        else {
            this.neumaticoLiso = false;
            console.log('Se coloco neumatico con dibujo');
        }
    };
    AutoDeportivo.prototype.obtenerPatrocinador = function () {
        console.log("El patrocinador de este auto es ".concat(this.patrocinadorPrincipal));
    };
    return AutoDeportivo;
}(vehiculo_1.Vehiculo));
exports.AutoDeportivo = AutoDeportivo;
