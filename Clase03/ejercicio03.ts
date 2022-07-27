import {Auto} from '../Clase03/ejercicio02';

class RegistroAutomotor {
    
    autoUno = new Auto;
    autoDos = new Auto;
    autoTres = new Auto;

    listado:Auto[] = [this.autoUno,this.autoDos,this.autoTres];

    consulta(autoSel:number){
        console.log(`Mostrando informacion de Auto ${autoSel}`)
        console.log(this.listado[autoSel]);
    }

    borrarAuto(autoSel:number){
        delete this.listado[autoSel];
        console.log(`Se elimino correctamente el auto ${autoSel}`);
        console.log(this.listado);
    }

    alta(){
        let nuevo = new Auto;
        this.listado[this.listado.length] = nuevo;
        console.log(`Se dio de alta el nuevo auto`)
        console.log(this.listado);
    }


}


let reg = new RegistroAutomotor();
reg.consulta(1);
reg.borrarAuto(0);
reg.alta();




/* Ejercicio 1
• Usando la clase Auto: Implementar la clase RegistroAutomotor con métodos para consultar
por un auto en un listado, borrar, actualizar y dar de alta
• Partir de la función ya implementada para leer archivos

Ejercicio 2
• Implementar la clase Matriz. En vez de consultar
los valores con los corchetes, se debe hacer
(desde afuera) a través de un método → get(x, y) */