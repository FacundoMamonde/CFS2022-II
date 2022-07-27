"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(id, name, cost, amount) {
        this.codigo = id;
        this.nombre = name;
        this.valor = cost;
        this.stock = amount;
    }
    Item.prototype.getCodigo = function () {
        return this.codigo;
    };
    Item.prototype.getNombre = function () {
        return this.nombre;
    };
    Item.prototype.getValor = function () {
        return this.valor;
    };
    Item.prototype.getStock = function () {
        return this.stock;
    };
    Item.prototype.setNombre = function (nuevo) {
        this.nombre = nuevo;
    };
    Item.prototype.setValor = function (nuevo) {
        this.valor = nuevo;
    };
    Item.prototype.setStock = function (nuevoStock) {
        this.stock = nuevoStock;
    };
    return Item;
}());
exports.Item = Item;
