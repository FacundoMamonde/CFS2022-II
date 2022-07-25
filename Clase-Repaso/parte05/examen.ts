import { Alumno } from "./alumno";

export class Examen {

    private nota:number;
    private materia:string;

    constructor(nota:number, materia:string){
        this.nota = nota;
        this.materia = materia;
    }

    public getNota():number{
        return this.nota;
    }

    public getMateria():string{
        return this.materia;
    }

}