/*
• Generar diagrama de clases usando draw.io
• Escribir un comentario de cada uno de los métodos implementados → el objetivo es ir ejercitando la justificación de las decisiones de diseño tomadas
• Con respecto a las clases, escribir un comentario para cada una, indicando la responsabilidad de cada clase, y la funcionalidad que provee
*/
var Efectivo = /** @class */ (function () {
    function Efectivo() {
    }
    Efectivo.prototype.pay = function (costo) {
        console.log('Se pagó ' + costo + ' empleando efectivo');
    };
    return Efectivo;
}());
var Tarjeta = /** @class */ (function () {
    function Tarjeta() {
    }
    Tarjeta.prototype.pay = function (costo) {
        console.log('Se pagó ' + costo + ' empleando tarjeta');
    };
    return Tarjeta;
}());
var Item = /** @class */ (function () {
    function Item(descripcion, costo) {
        this.descripcion = descripcion;
        this.costo = costo;
    }
    /// Obtener la descripcion del producto es importante poder mostrar la informacion al usuario, lo mismo con el metodo getCosto
    Item.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Item.prototype.getCosto = function () {
        return this.costo;
    };
    /// Metodo  para cambiar el nombre de un iteam
    Item.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    /// Metodo para poder cambiar el costo del producto a futuro
    Item.prototype.setCosto = function (costo) {
        this.costo = costo;
    };
    /// Metodo booleano util para saber si un producto es igual a otro
    Item.prototype.equals = function (i) {
        return this.costo == i.getCosto() && this.descripcion == i.getDescripcion();
    };
    return Item;
}());
var Cuenta = /** @class */ (function () {
    function Cuenta() {
        this.lineItems = [];
    }
    /// Metodo que permite agregar items al arreglo de Items
    Cuenta.prototype.addLineItem = function (lineItem) {
        this.lineItems.push(lineItem);
    };
    /// Metodo al que se le pasa por parametro un item (de tipo item), se recorre el arreglo "lineItems" comparandolo con el iteam ingresado por parametro, si detecta que hay dos items iguales, lo borra del arreglo "lineItems"
    Cuenta.prototype.removeLineItem = function (lineItem) {
        for (var i = 0; i < this.lineItems.length; i++) {
            if (this.lineItems[i].equals(lineItem))
                this.lineItems.splice(i, 1);
        }
    };
    /// Metodo que genera una suma de todos los valores del arreglo "lineItems"
    Cuenta.prototype.getCostInCents = function () {
        return this.lineItems.map(function (item) { return item.getCosto(); }).reduce(function (a, b) { return a + b; }, 0);
    };
    /// Meotodo que muestra un mensaje con el costo total y si se efectua en efectivo o con tarjeta
    Cuenta.prototype.pay = function (method) {
        method.pay(this.getCostInCents());
    };
    return Cuenta;
}());
var cuentaPrueba = new Cuenta();
var efectivo = new Efectivo();
var item1 = new Item("Computadora", 85000.85);
var item2 = new Item("Impresora", 35000.90);
cuentaPrueba.addLineItem(item1);
cuentaPrueba.addLineItem(item2);
console.log(cuentaPrueba.getCostInCents());
cuentaPrueba.pay(efectivo);
