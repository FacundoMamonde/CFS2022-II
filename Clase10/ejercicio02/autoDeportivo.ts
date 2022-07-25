import { Vehiculo } from "./vehiculo";

export class AutoDeportivo extends Vehiculo {

    private patrocinadorPrincipal:string;
    private neumaticoLiso:boolean;

    constructor(estadoMotor:boolean, patrocinador:string,neumaticoL:boolean){
        super(estadoMotor);
        this.patrocinadorPrincipal = patrocinador;
        this.neumaticoLiso = neumaticoL;

    }

    public acelerar(potencia:number):void{
        let aceleracion = (potencia * 20);
    
        console.log(`Esta auto Deportivo tiene una aceleracion de: ${aceleracion}`)

    }

    public cambiarNeumatico():void{
        if (this.neumaticoLiso === false){
            this.neumaticoLiso = true;
            console.log('Se coloco neumatico liso');
        } else {
            this.neumaticoLiso = false;
            console.log('Se coloco neumatico con dibujo')
        }
    }

    public obtenerPatrocinador():void{
        console.log(`El patrocinador de este auto es ${this.patrocinadorPrincipal}`)
    }

}