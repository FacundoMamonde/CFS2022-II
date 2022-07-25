import {Auto} from './auto';
import {AutoCiudad} from './autoCiudad';
import {AutoCarreras} from './autoCarreras';

export class Concesionaria {

    private autos:Auto[]=[];

    constructor(){

    }

    public addAuto(auto:Auto){
        this.autos.push(auto);
    }

    public printAuto(){
        this.autos.forEach(e =>{
           console.log(`${e.getUsabilidad()} - ${e.getMarca()} ${e.getModelo()}`)
        })
    }
}
