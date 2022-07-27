"use strict";
exports.__esModule = true;
exports.Stock = void 0;
var fs = require("fs");
var item_1 = require("./item");
var readlineSync = require('readline-sync');
var Stock = /** @class */ (function () {
    function Stock() {
        this.items = [];
        this.carrito = [];
    }
    Stock.prototype.addItem = function (nuevo) {
        this.items.push(nuevo);
    };
    Stock.prototype.addToChart = function (codigo, cantidad) {
        for (var i = 0; i < this.items.length; i++) {
            /* Si detecta el mismo codigo y la cantidad solicitada es igual o menor al stock*/
            if (this.items[i].getCodigo() === codigo && this.items[i].getStock() >= cantidad) {
                /* Se crea un Item temporal que tiene los datos del item con el mismo codigo*/
                var temp = void 0;
                temp = this.items[i];
                /* Se setea la cantidad */
                temp.setStock(cantidad);
                this.carrito.push(temp);
            }
        }
    };
    Stock.prototype.finishPurchase = function () {
        console.log("Finalizando compra:");
        /// Se establecen variables para utilizar luego
        var valorUnidades;
        var sumaTotal = 0;
        //// Se recorre el carrito, por cada elemento
        this.carrito.forEach(function (e) {
            /// Se establece cual es el costo total del producto, multiplicando el valor por el stock
            valorUnidades = (e.getValor() * e.getStock());
            console.log(" ".concat(e.getStock(), " unidades de ").concat(e.getNombre(), " : $").concat(valorUnidades, " "));
            sumaTotal = sumaTotal + valorUnidades;
        });
        this.saveTicket();
        console.log("El costo total de todos los productos es de: $" + sumaTotal);
    };
    Stock.prototype.loadItems = function () {
        var _this = this;
        var file = fs.readFileSync('./productos.txt', 'utf8');
        var files = file.split('\n');
        var i = 100;
        files.forEach(function (element) {
            var itemInfo = element.split(';');
            var nuevoItem = new item_1.Item(String(i), itemInfo[0], Number(itemInfo[1]), Number(itemInfo[2]));
            _this.addItem(nuevoItem);
            i++;
        });
        console.log("Se cargaron los productos!");
        console.log(this.items);
        return files;
    };
    Stock.prototype.saveTicket = function () {
        var ticketText = "";
        var sumaTotal = 0;
        this.carrito.forEach(function (element) {
            ticketText = ticketText + element.getStock() + " unidades de " + element.getNombre() + ": $" + (element.getStock() * element.getValor()) + '\n';
            sumaTotal = sumaTotal + (element.getStock() * element.getValor());
        });
        ticketText = ticketText + '\n' + "TOTAL: $" + sumaTotal;
        fs.writeFile('ticket.txt', ticketText, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Se guardo el ticket!");
        });
    };
    return Stock;
}());
exports.Stock = Stock;
var kiosko = new Stock();
kiosko.loadItems();
kiosko.addToChart("100", 5);
kiosko.addToChart("102", 6);
kiosko.addToChart("104", 15);
kiosko.finishPurchase();
