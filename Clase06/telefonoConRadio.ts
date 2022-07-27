import {Telefono} from './telefono';

class TelefonoConRadio extends Telefono {

frecuenciaActual:number;

    constructor (frec:number){
        super();
        this.frecuenciaActual = frec;
    }

    verFrecuenciaActual(){
        console.log(this.frecuenciaActual);
    }
}


let telCR = new TelefonoConRadio(80);

telCR.prenderApagar();
telCR.prenderApagar();
telCR.hacerLlamada(2267666666);


