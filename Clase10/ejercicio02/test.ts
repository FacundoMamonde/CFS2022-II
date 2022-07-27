import {AutoCiudad} from "./autoCiudad";
import {AutoDeportivo} from "./autoDeportivo";
import {Camioneta} from "./camioneta";


let aCiudad = new AutoCiudad(true,true);
let camioneta = new Camioneta(true,false);
let aDeportivo = new AutoDeportivo(true,"Monster Energy",true);


aCiudad.acelerar(3);
aCiudad.consultaDescapotable();
camioneta.acelerar(3);
aDeportivo.acelerar(3);
aDeportivo.cambiarNeumatico();
aDeportivo.obtenerPatrocinador();