"use strict";
exports.__esModule = true;
var fs = require("fs");
var registroAutomotor_1 = require("./registroAutomotor");
var Auto_1 = require("./Auto");
var registro = new registroAutomotor_1.RegistroAutomotor;
registro.consultarTodos();
var texto = fs.readFileSync('autos.txt', 'utf8');
var palabras = texto.split(';');
var auto;
for (var i = 0; i < palabras.length - 1; i++) {
    auto = palabras[i].split(',');
    //// Se agregan los autos al registro (Estado del motor, Estado de luces, Cambio seleccionado)
    registro.alta(new Auto_1.Auto(Boolean(auto[0]), Boolean(auto[1]), Number(auto[2])));
}
var reg = new registroAutomotor_1.RegistroAutomotor();
