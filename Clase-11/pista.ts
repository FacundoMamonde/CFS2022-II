

export class Pista {

    private id:number;
    private titulo:string;
    private duracion:number;
    private interprete:string;

    constructor (id:number,titulo:string,duracion:number,interprete:string){
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }

    getID(){
        return this.id;
    }

    getTitulo(){
        return this.titulo;
    }
    
    getDuracion(){
        return this.duracion;
    }

    getInterprete(){
        return this.interprete;
    }

}