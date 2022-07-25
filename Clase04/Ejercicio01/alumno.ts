export class Alumno{
    private nombre:string;
    private nota:number;

    constructor(name:string,note:number){
        this.nombre = name;
        this.nota = note;
    }

    consultaAprobado(){
        if (this.nota >= 7){
            console.log(`El alumno ${this.nombre} esta aprobado, con una nota de ${this.nota}`)
        } else {
            console.log(`El alumno ${this.nombre} esta desaprobado, con una nota de ${this.nota}`)
        }
    }
}