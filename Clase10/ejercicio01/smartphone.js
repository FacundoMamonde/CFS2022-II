"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone(prendido) {
        this.estaPrendido = prendido;
    }
    SmartPhone.prototype.prender = function () {
        if (this.estaPrendido === true) {
            console.log("El telefono ya esta prendido!");
        }
        else {
            this.estaPrendido = true;
            console.log("Se prendio el telefono");
        }
    };
    SmartPhone.prototype.apagar = function () {
        if (this.estaPrendido === false) {
            console.log("El telefono ya esta apagado");
        }
        else {
            this.estaPrendido = false;
            console.log("Se apago el telefono");
        }
    };
    SmartPhone.prototype.llamar = function (numeroTel) {
        if (this.estaPrendido === false) {
            console.log('El telefono esta apagado! No se puede llamar');
        }
        else {
            console.log("Llamando al numero ".concat(numeroTel, " ..."));
        }
    };
    SmartPhone.prototype.sacarFoto = function () {
        if (this.estaPrendido === false) {
            console.log('El telefono esta apagado! No se puede sacar foto');
        }
        else {
            console.log("Se saco la foto con exito");
        }
    };
    return SmartPhone;
}());
var xiaomi = new SmartPhone(false);
xiaomi.prender();
xiaomi.llamar(2789784);
xiaomi.sacarFoto();
xiaomi.apagar();
xiaomi.llamar(297855);
