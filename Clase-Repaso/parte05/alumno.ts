import {Examen} from './examen';

export class Alumno {

    private nombre:string;
    private edad:number;
    private notas:Examen[];

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
        this.notas = [];
    }

    public getNombre(){
        return this.nombre
    }

    public getEdad(){
        return this.edad;
    }

    public loadExamen(examen:Examen){
        this.notas.push(examen);
    }

    public getPromedio():number{

        let promedio:number = 0;
        let sumaTotal:number = 0;

        this.notas.forEach(e => {
            sumaTotal = sumaTotal + e.getNota();
        });

        promedio = sumaTotal / this.notas.length;

        return promedio;
    }

}


