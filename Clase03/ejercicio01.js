var Parlante = /** @class */ (function () {
    function Parlante() {
        this.encendido = false;
        this.volumen = 8;
    }
    Parlante.prototype.encenderApagar = function () {
        if (this.encendido === false) {
            console.log("Se encendio el parlante correctamente");
            this.encendido = true;
        }
        else {
            console.log("Parlante apagado");
            this.encendido = false;
        }
    };
    Parlante.prototype.subirVolumen = function () {
        if (this.volumen > 9) {
            console.log("Volumen maximo");
        }
        else {
            this.volumen++;
            console.log("El volumen actual es: ".concat(this.volumen));
        }
    };
    Parlante.prototype.bajarVolumen = function () {
        if (this.volumen < 1) {
            console.log("Volumen minimo");
        }
        else {
            this.volumen--;
            console.log("El volumen actual es: ".concat(this.volumen));
        }
    };
    return Parlante;
}());
var speaker = new Parlante();
speaker.encenderApagar();
speaker.subirVolumen();
speaker.subirVolumen();
speaker.subirVolumen();
