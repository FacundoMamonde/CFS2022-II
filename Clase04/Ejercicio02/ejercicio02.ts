let readlineSync = require('readline-sync');

export class Auto {

    private encendido:boolean;
    private luces:boolean;
    private cambio:number;

    constructor(estadoMotor:boolean, lucesEstado:boolean, cambioEstado:number){
        this.encendido = estadoMotor;
        this.luces = lucesEstado;
        this.cambio = cambioEstado;
    }

    public motor(){
        if (this.encendido == true){
            this.encendido = false;
            console.log("Se apagó el motor");
        } else {
            this.encendido = true;
            console.log("Se prendió el motor");
        }
    }

    public onOffLuces(){
        if (this.luces == true){
            this.luces = false;
            console.log("Se apagaron las luces");
        } else {
            this.luces = true;
            console.log("Se prendieron las luces");
        }
    }

    public subirCambio(){
        if (this.cambio === 6){
            console.log("Se encuentra en la 6ta marcha");
        } else {
            this.cambio++;
            console.log(`Se subio al cambio ${this.cambio}`);
        }
    }

    public bajarCambio(){
        if (this.cambio === 0){
            console.log("Se encuentra en cambio Nuetro");
        } else {
            this.cambio--;
            console.log(`Se bajo al cambio ${this.cambio}`);
        }
    }
}


let autoUno = new Auto(false,false,0);

let accion = Number(readlineSync.question(`(1) On/Off Motor - (2) On/Off Luces - (3) Subir cambio - (4) Bajar cambio - (5) Salir: `));

while (accion !== 5){

    if (accion === 1){
        autoUno.motor();
    }

    if (accion === 2){
        autoUno.onOffLuces();
    }

    if (accion === 3){
        autoUno.subirCambio();
    }

    if (accion === 4){
        autoUno.bajarCambio();
    }
    console.log("----------------------------------------")
    accion = Number(readlineSync.question(`(1) On/Off Motor - (2) On/Off Luces - (3) Subir cambio - (4) Bajar cambio - (5) Salir: `));
}

