import {Alumno} from "./alumno";

export class Profesor{
    nombreProfesor:string;

    constructor(nameP:string){
        this.nombreProfesor = nameP;
    }

    public getNombre(){
        return this.nombreProfesor;
    }
}