import {Vehiculo} from './vehiculo';


export class Moto extends Vehiculo {

    parabrisas:boolean;

    constructor(estadoMotor:boolean, lucesEstado:boolean, cambioEstado:number, parabrisasI:boolean){
        super(estadoMotor, lucesEstado, cambioEstado);
        this.parabrisas = parabrisasI;
    }

    consultaParabrisas(){
        if (this.parabrisas === true){
            console.log('Esta moto tiene parabrisas');
        } else {
            console.log('Esta moto no tiene parabrisas');
        }
    }


}