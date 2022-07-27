import {Reproductor} from "./reproductor";
import {Lista} from "./lista";
import {Pista} from "./pista";


class BtSpeaker implements Reproductor{

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
        return "Para encender el parlante, mantenga presionado el boton de play";
    }
    mensajeApagado(): string {
        return "Para apagar el parlante, mantenga presionado el boton de play por 7 segundos";
    }

}




let parlantito = new BtSpeaker();
let cancion = new Pista(154,"Cancion",54,"Cantante");

console.log(parlantito.reproducirCancion(cancion));