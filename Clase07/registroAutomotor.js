"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listado = [];
    }
    RegistroAutomotor.prototype.consulta = function (vehSel) {
        console.log("Mostrando informacion de Vehiculo ".concat(vehSel));
        console.log(this.listado[vehSel]);
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.borrarAuto = function (vehSel) {
        delete this.listado[vehSel];
        console.log("Se elimino correctamente el auto ".concat(vehSel));
        console.log(this.listado);
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.altaAuto = function (nuevo) {
        this.listado[this.listado.length] = nuevo;
        console.log("Se dio de alta el nuevo auto");
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.altaMoto = function (nuevo) {
        this.listado[this.listado.length] = nuevo;
        console.log("Se dio de alta la nueva moto");
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.altaCamion = function (nuevo) {
        this.listado[this.listado.length] = nuevo;
        console.log("Se dio de alta el nuevo camion");
        console.log("-----------------------------------------");
    };
    RegistroAutomotor.prototype.consultarTodos = function () {
        console.log("Mostrando el listado de vehiculos");
        console.log(this.listado);
        console.log("-----------------------------------------");
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
