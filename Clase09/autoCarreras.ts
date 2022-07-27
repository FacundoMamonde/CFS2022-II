import {Auto} from './auto';

export class AutoCarreras extends Auto {

    private patrocinador:string;

    constructor (us:string, mar:string, mod:string, year:number,pat:string){
        super(us,mar,mod,year);
        this.patrocinador = pat;
    }

    public getPatrocinador(){
        return this.patrocinador;
    }

    public setPatrocinador(nuevoPatrocinador:string){
        this.patrocinador = nuevoPatrocinador;
    }
}