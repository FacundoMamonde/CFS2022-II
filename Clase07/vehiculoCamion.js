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
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(estadoMotor, lucesEstado, cambioEstado, cajaI) {
        var _this = _super.call(this, estadoMotor, lucesEstado, cambioEstado) || this;
        _this.caja = cajaI;
        return _this;
    }
    Camion.prototype.consultaCaja = function () {
        if (this.caja === true) {
            console.log('Este camion tiene caja');
        }
        else {
            console.log('Este camion no tiene caja');
        }
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
