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


