import {Vehiculo} from './vehiculo';
import {Camion} from './vehiculoCamion';
import {Moto} from './vehiculoMoto';
import {RegistroAutomotor} from './registroAutomotor';

let registro = new RegistroAutomotor;

registro.altaAuto(new Vehiculo(false,false,5));
registro.altaAuto(new Vehiculo(true,false,2));
registro.altaAuto(new Vehiculo(false,true,1));
registro.altaAuto(new Vehiculo(false,false,5));
registro.altaCamion(new Camion(false,false,1,true));
registro.altaCamion(new Camion(true,false,0,false));
registro.altaCamion(new Camion(false,true,2,false));
registro.altaCamion(new Camion(true,false,1,true));
registro.altaMoto(new Moto(false,false,1,true));
registro.altaMoto(new Moto(false,true,0,false));
registro.altaMoto(new Moto(true,false,3,false));
registro.altaMoto(new Moto(false,true,2,true));

registro.consultarTodos();