import { Vehiculo } from "./vehiculo";

export class Camioneta extends Vehiculo {

    private cabinaSimple:boolean;

    constructor(estadoMotor:boolean, cabinaS:boolean){
        super(estadoMotor);
        this.cabinaSimple = cabinaS;

    }

    public acelerar(potencia:number):void{
        let aceleracion = (potencia * 5);
    
        console.log(`Esta camioneta tiene una aceleracion de: ${aceleracion}`)

    }



}