import {Reproductor} from "./reproductor";
import {Lista} from "./lista";
import {Pista} from "./pista";


class SmartPhone implements Reproductor{

    constructor (){
        
    }

    reproducirCancion(pista:Pista): string {
       return "Reproductiendo la cancion "+pista.getTitulo();
    }

    reproducirLista(lista:Lista): string {
       return "Reproduciendo la cancion ";
    }

    detener(): string {
        return "Se detuvo la cancion";
    }
    mensajeEncendido(): string {
        return "Para reproducir musica abra la aplicacion 'My Music' ";
    }
    mensajeApagado(): string {
        return "Para dejar de reproducir la musica, cierre la aplicacion 'My Music'";
    }

}
