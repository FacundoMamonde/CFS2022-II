export * from "./vehiculo";

export abstract class Vehiculo {

    private motorOnOff: boolean;
    
    constructor(estadoMotor: boolean) {
        this.motorOnOff = estadoMotor;
    }

    public prenderMotor():void{
        if (this.motorOnOff === false){
            this.motorOnOff = true;
            console.log('Se prendio el motor');
        } else {
            console.log("El motor esta en marcha")
        }
    }

    public apagarMotor():void{
        if (this.motorOnOff === true){
            this.motorOnOff = false;
            console.log("Se apago el motor");
        } else {
            console.log("El motor ya esta apagado");
        }

    }

    abstract acelerar(n:number):void

}


