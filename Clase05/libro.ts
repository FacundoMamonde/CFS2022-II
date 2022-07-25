export class Libro {

     name:string;
     author:string;
     pages:number;
     year:number;
    
    constructor(nombre:string,autor:string,paginas:number,anio:number){
        this.name = nombre;
        this.author = autor;
        this.pages = paginas;
        this.year = anio;
    }

    public consultaNombre():string{
        return this.name;
    }

    public consultaAutor():string{
        return this.author;
    }

    public consultaPaginas():number{
        return this.pages;
    }

    public consultaYear():number{
        return this.year;
    }
}