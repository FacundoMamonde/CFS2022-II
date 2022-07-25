import {computadora} from '../Clase02/computadora';
let readlineSync = require('readline-sync');

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

 console.log("Algo")