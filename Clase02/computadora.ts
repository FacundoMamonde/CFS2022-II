let readlineSync = require('readline-sync');

export class computadora {

    brillo:number = 100;
    wifi:number = 1;
    volumen:number = 90;
 
    cambiarBrillo(estado:number){
        this.brillo = estado;
        while (this.brillo < 0 || this.brillo > 101){
            let brilloIngresado = Number(readlineSync.question(`Ingrese el valor de brillo de pantalla (Entre 0 y 100): `));
            this.brillo = brilloIngresado;
        }
        console.log(`Se ha cambiado el brillo a ${this.brillo}%`)
    }

    cambiarWifi(estado:number){
        this.wifi = estado;
        if (this.wifi === 1){
            console.log(`El Wi-Fi esta ahora activado`)
        }
        if (this.wifi === 2){
            console.log(`El Wi-Fi esta ahora desactivado`)
        }
    }

    subirVolumen(){
        if (this.volumen >= 100){
            console.log(`Volumen esta al maximo nivel`)
        } else {
            this.volumen++;
            console.log(`El volumen actual es ahora: ${this.volumen}%`);
        }
    }

    bajarVolumen(){
        if (this.volumen < 0){
            console.log(`Volumen esta al minimo nivel`)
        } else {
            this.volumen--;
            console.log(`El volumen actual es ahora: ${this.volumen}%`);
        }
    }

}

let compu = new computadora();


let accion = Number(readlineSync.question(`(1) Ajustar Brillo - (2) Ajuste Wi-Fi - (3) Subir Volumen - (4) Bajar Volumen - (5) Salir: `));

while (accion !== 5){
        if (accion === 1) {
            let brilloIngresado = Number(readlineSync.question(`Ingrese el valor de brillo de pantalla: `));
            compu.cambiarBrillo(brilloIngresado);
        }

        if (accion === 2) {
            let wifiEstado = Number(readlineSync.question(`Prender Wi-Fi (1) - Apagar Wi-Fi (2): `)); 
            compu.cambiarWifi(wifiEstado);
        }

        if (accion === 3) {
            compu.subirVolumen();
        }

        if (accion === 4) {
            compu.bajarVolumen();
        }

        accion = Number(readlineSync.question(`(1) Ajustar Brillo - (2) Ajuste Wi-Fi - (3) Subir Volumen - (4) Bajar Volumen - (5) Salir: `));
 }