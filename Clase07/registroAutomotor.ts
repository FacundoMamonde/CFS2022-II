import {Vehiculo} from './vehiculo'
import {Camion} from './vehiculoCamion'
import {Moto} from './vehiculoMoto'

export class RegistroAutomotor {

    private listado:Vehiculo[] = [];

    constructor(){

    }

    public consulta(vehSel:number){
        console.log(`Mostrando informacion de Vehiculo ${vehSel}`)
        console.log(this.listado[vehSel]);
        console.log(`-----------------------------------------`);
    }

    public borrarAuto(vehSel:number){
        delete this.listado[vehSel];
        console.log(`Se elimino correctamente el auto ${vehSel}`);
        console.log(this.listado);
        console.log(`-----------------------------------------`);
    }

    public altaAuto(nuevo:Vehiculo){
        this.listado[this.listado.length] = nuevo;
        console.log(`Se dio de alta el nuevo auto`)
        console.log(`-----------------------------------------`);
    }

    public altaMoto(nuevo:Moto){
        this.listado[this.listado.length] = nuevo;
        console.log(`Se dio de alta la nueva moto`)
        console.log(`-----------------------------------------`);
    }

    public altaCamion(nuevo:Camion){
        this.listado[this.listado.length] = nuevo;
        console.log(`Se dio de alta el nuevo camion`)
        console.log(`-----------------------------------------`);
    }

    public consultarTodos(){
        console.log(`Mostrando el listado de vehiculos`)
        console.log(this.listado);
        console.log(`-----------------------------------------`);
    }


}