import {Auto} from './auto';

export class AutoCiudad extends Auto{

    private patente:string;

    constructor (us:string, mar:string, mod:string, year:number,pat:string){
        super(us,mar,mod,year);
        this.patente = pat;
    }

    public getPatente(){
        return this.patente;
    }

    public cambiarPatente(nuevaPatente:string){
        this.patente = nuevaPatente;
    }

}