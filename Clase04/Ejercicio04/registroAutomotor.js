"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var Auto_1 = require("./Auto");
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
var reg = new RegistroAutomotor();
var auto1 = new Auto_1.Auto(false, false, 1);
var auto2 = new Auto_1.Auto(false, false, 1);
var auto3 = new Auto_1.Auto(false, false, 1);
var auto4 = new Auto_1.Auto(false, false, 1);
var auto5 = new Auto_1.Auto(false, false, 1);
var auto6 = new Auto_1.Auto(false, false, 1);
reg.alta(auto1);
reg.alta(auto2);
reg.alta(auto3);
reg.alta(auto4);
reg.alta(auto5);
reg.alta(auto6);
reg.consultarTodos();
reg.consulta(1);
reg.borrarAuto(2);
reg.consultarTodos();
