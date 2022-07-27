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
exports.Moto = void 0;
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(estadoMotor, lucesEstado, cambioEstado, parabrisasI) {
        var _this = _super.call(this, estadoMotor, lucesEstado, cambioEstado) || this;
        _this.parabrisas = parabrisasI;
        return _this;
    }
    Moto.prototype.consultaParabrisas = function () {
        if (this.parabrisas === true) {
            console.log('Esta moto tiene parabrisas');
        }
        else {
            console.log('Esta moto no tiene parabrisas');
        }
    };
    return Moto;
}(vehiculo_1.Vehiculo));
exports.Moto = Moto;
