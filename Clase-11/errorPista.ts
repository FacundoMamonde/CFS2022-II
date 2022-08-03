import {Pista} from './pista';
export class PistaError extends Error {

    constructor(mensaje:string){
        super(mensaje);
        this.name = "Error en la Pista"
    }


}