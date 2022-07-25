import {Televisor} from './televisor'

class Decodificador{


    public decodificarCanal(telev:Televisor, canalDec:number){

        if (telev.obtenerInfo(canalDec) === undefined){
            console.log("No se ha encontrado el canal seleccionado")
        } else if (telev.obtenerInfo(canalDec) === false){
            console.log(`Decodificando el canal ${telev.obtenerNombre(canalDec)}`)
            
        } else { 
            console.log(`No es necesario decodificar el canal ${telev.obtenerNombre(canalDec)}`)
        }
    }


}

let tele = new Televisor;

let Deco = new Decodificador;

Deco.decodificarCanal(tele,1);