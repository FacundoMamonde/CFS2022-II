import {Alumno} from "./alumno";
import {Profesor} from "./profesor";

class Escuela{
    profesores:Profesor[] = [new Profesor("Juli"), new Profesor("Geor")];
    alumnos: Alumno[] = [new Alumno("Facundo",7), new Alumno("Junior",5)];
    nombreEscuela:string;

    constructor(nameEscuela:string){
        this.nombreEscuela = nameEscuela;
    }

    agregarAlumno(alumno:Alumno){
        this.alumnos.push(alumno);
    }

    expulsarAlumno(alumno:Alumno){
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    }

    agregarProfesor(profesor:Profesor){
        this.profesores.push(profesor);
    }

    expulsarProfesor(profesor:Profesor){
        this.profesores.splice(this.profesores.indexOf(profesor));
    }

}


let escuela31 = new Escuela("Escuela N31");
let alumno3 = new Alumno("Juli",5);

escuela31.agregarAlumno(alumno3);
console.log(escuela31.alumnos);

let profesor3 = new Profesor("Jirafales");

escuela31.agregarProfesor(profesor3);
console.log(escuela31.profesores);






