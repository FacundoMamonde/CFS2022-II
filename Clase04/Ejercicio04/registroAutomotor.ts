import {Auto} from './Auto'

export class RegistroAutomotor {
    
    private listado:Auto[] = [];

    constructor(){

    }

    public consulta(autoSel:number){
        console.log(`Mostrando informacion de Auto ${autoSel}`)
        console.log(this.listado[autoSel]);
        console.log(`-----------------------------------------`);
    }

    public borrarAuto(autoSel:number){
        delete this.listado[autoSel];
        console.log(`Se elimino correctamente el auto ${autoSel}`);
        console.log(this.listado);
        console.log(`-----------------------------------------`);
    }

    public alta(nuevo:Auto){
        this.listado[this.listado.length] = nuevo;
        console.log(`Se dio de alta el nuevo auto`)
        console.log(this.listado);
        console.log(`-----------------------------------------`);
    }

    public consultarTodos(){
        console.log(`Mostrando el listado de Autos`)
        console.log(this.listado);
        console.log(`-----------------------------------------`);
    }


}

let reg = new RegistroAutomotor();
let auto1 = new Auto(false,false,1);
let auto2 = new Auto(false,false,1);
let auto3 = new Auto(false,false,1);
let auto4 = new Auto(false,false,1);
let auto5 = new Auto(false,false,1);
let auto6 = new Auto(false,false,1);

reg.alta(auto1);
reg.alta(auto2);
reg.alta(auto3);
reg.alta(auto4);
reg.alta(auto5);
reg.alta(auto6);

reg.consultarTodos();

reg.consulta(1);
reg.borrarAuto(2)

reg.consultarTodos();


