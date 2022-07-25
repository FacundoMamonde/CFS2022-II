"use strict";
exports.__esModule = true;
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.canal = ["Telefe", "Fox Sport", "America", "Discovery"];
        this.canalEstado = [true, false, true, true];
    }
    Televisor.prototype.obtenerInfo = function (canalInfo) {
        return this.canalEstado[canalInfo];
    };
    Televisor.prototype.obtenerNombre = function (canalSel) {
        return this.canal[canalSel];
    };
    return Televisor;
}());
exports.Televisor = Televisor;
