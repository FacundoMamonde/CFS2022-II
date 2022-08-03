import {Pista} from "./pista"
import {Lista} from "./lista"

export interface Reproductor {

    reproducirCancion(cancion:Pista):string;
    reproducirLista(Lista:Lista):string;
    detener():string;
    mensajeEncendido():string;
    mensajeApagado():string;

    

}