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
exports.AutoCarreras = void 0;
var auto_1 = require("./auto");
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(us, mar, mod, year, pat) {
        var _this = _super.call(this, us, mar, mod, year) || this;
        _this.patrocinador = pat;
        return _this;
    }
    AutoCarreras.prototype.getPatrocinador = function () {
        return this.patrocinador;
    };
    AutoCarreras.prototype.setPatrocinador = function (nuevoPatrocinador) {
        this.patrocinador = nuevoPatrocinador;
    };
    return AutoCarreras;
}(auto_1.Auto));
exports.AutoCarreras = AutoCarreras;
