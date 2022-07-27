let readlineSync = require('readline-sync');

export class Auto {

    encendido:boolean= false;
    luces:boolean=false;
    cambio:number=1;

    motor(){
        if (this.encendido == true){
            this.encendido = false;
            console.log("Se apagó el motor");
        } else {
            this.encendido = true;
            console.log("Se prendió el motor");
        }
    }

    onOffLuces(){
        if (this.luces == true){
            this.luces = false;
            console.log("Se apagaron las luces");
        } else {
            this.luces = true;
            console.log("Se prendieron las luces");
        }
    }

    subirCambio(){
        if (this.cambio === 6){
            console.log("Se encuentra en la 6ta marcha");
        } else {
            this.cambio++;
            console.log(`Se subio al cambio ${this.cambio}`);
        }
    }

    bajarCambio(){
        if (this.cambio === 0){
            console.log("Se encuentra en cambio Nuetro");
        } else {
            this.cambio--;
            console.log(`Se bajo al cambio ${this.cambio}`);
        }
    }
}

/*
let autoUno = new Auto();


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

*/