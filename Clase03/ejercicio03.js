"use strict";
exports.__esModule = true;
var ejercicio02_1 = require("../Clase03/ejercicio02");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autoUno = new ejercicio02_1.Auto;
        this.autoDos = new ejercicio02_1.Auto;
        this.autoTres = new ejercicio02_1.Auto;
        this.listado = [this.autoUno, this.autoDos, this.autoTres];
    }
    RegistroAutomotor.prototype.consulta = function (autoSel) {
        console.log("Mostrando informacion de Auto ".concat(autoSel));
        console.log(this.listado[autoSel]);
    };
    RegistroAutomotor.prototype.borrarAuto = function (autoSel) {
        delete this.listado[autoSel];
        console.log("Se elimino correctamente el auto ".concat(autoSel));
        console.log(this.listado);
    };
    RegistroAutomotor.prototype.alta = function () {
        var nuevo = new ejercicio02_1.Auto;
        this.listado[this.listado.length] = nuevo;
        console.log("Se dio de alta el nuevo auto");
        console.log(this.listado);
    };
    return RegistroAutomotor;
}());
var reg = new RegistroAutomotor();
reg.consulta(1);
reg.borrarAuto(0);
reg.alta();
/* Ejercicio 1
• Usando la clase Auto: Implementar la clase RegistroAutomotor con métodos para consultar
por un auto en un listado, borrar, actualizar y dar de alta
• Partir de la función ya implementada para leer archivos

Ejercicio 2
• Implementar la clase Matriz. En vez de consultar
los valores con los corchetes, se debe hacer
(desde afuera) a través de un método → get(x, y) */ 
