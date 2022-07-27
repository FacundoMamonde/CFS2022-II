import {Telefono} from './telefono';

class TelefonoConCamara extends Telefono {

    constructor(){
        super();
    }

    sacarFoto(){
        if (this.estaPrendido=== true){
        console.log(`Se saco una foto`)
        } else {
            console.log(this.mensajeApagado)
        }
    }

}

let telCC = new TelefonoConCamara();

telCC.sacarFoto();
telCC.prenderApagar();
telCC.sacarFoto();
telCC.prenderApagar();
telCC.mandarMensaje(2267666666,"Hola, como estas?");