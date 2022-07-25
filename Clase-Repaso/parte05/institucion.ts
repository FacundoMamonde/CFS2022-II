import {Alumno} from './alumno';
import {Examen} from './examen';

class Institucion {

    private nombre:string;
    private alumnos:Alumno[];


    constructor(nombre:string){
        this.nombre = nombre;
        this.alumnos = [];
    }

    public addAlumno(newAlumno:Alumno):void{
        this.alumnos.push(newAlumno);
    }

    public allPromedio():number{
        let sumaTotal:number = 0;

        this.alumnos.forEach(e => {
            sumaTotal = sumaTotal + e.getPromedio();    
        });

        return sumaTotal / this.alumnos.length;
    }


}


let institucion = new Institucion("CIC");

let al1 = new Alumno("Facundo" , 26);
let al1ex1 = new Examen(10,"Matematicas");
let al1ex2 = new Examen(8,"Literatura");
al1.loadExamen(al1ex1);
al1.loadExamen(al1ex2);

let al2 = new Alumno("Valentino", 6);
let al2ex1 = new Examen(7,"Historia");
let al2ex2 = new Examen(10,"Geologia");
al2.loadExamen(al2ex1);
al2.loadExamen(al2ex2);

institucion.addAlumno(al1);
institucion.addAlumno(al2);
console.log("El promedio de todos los alumnos es de: " + institucion.allPromedio());



