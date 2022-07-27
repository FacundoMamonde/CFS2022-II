import {Vehiculo} from './vehiculo';


export class Camion extends Vehiculo {

    caja:boolean;
    
    constructor(estadoMotor:boolean, lucesEstado:boolean, cambioEstado:number, cajaI:boolean){
        super(estadoMotor, lucesEstado, cambioEstado);
        this.caja = cajaI;
    }

    consultaCaja(){
        if (this.caja === true){
            console.log('Este camion tiene caja')
        } else {
            console.log('Este camion no tiene caja')
        }
    }


}