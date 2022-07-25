import { Vehiculo } from "./vehiculo";

export class AutoCiudad extends Vehiculo{

    private descapotable:boolean;

    constructor(estadoMotor:boolean, descap:boolean){
        super(estadoMotor);
        this.descapotable = descap;
  
    }

    public acelerar(potencia:number):void{
        let aceleracion = (potencia * 3);
    
        console.log(`Este auto de ciudad tiene una aceleracion de: ${aceleracion}`)

    }

    public consultaDescapotable():void{
        if (this.descapotable === true){
            console.log("Este auto es descapotable");
        } else {
            console.log("Este auto no es descapotable");
        }
    }

}