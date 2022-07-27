"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listado = [];
    }
    RegistroAutomotor.prototype.consulta = function (autoSel) {
        console.log("Mostrando informacion de Auto ".concat(autoSel));
        console.log(this.listado[autoSel]);
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.borrarAuto = function (autoSel) {
        delete this.listado[autoSel];
        console.log("Se elimino correctamente el auto ".concat(autoSel));
        console.log(this.listado);
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.alta = function (nuevo) {
        this.listado[this.listado.length] = nuevo;
        console.log("Se dio de alta el nuevo auto");
        console.log(this.listado);
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.consultarTodos = function () {
        console.log("Mostrando el listado de Autos");
        console.log(this.listado);
        console.log("-----------------------------------------");
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
