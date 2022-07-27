import {Pista} from './pista'
let readlineSync = require('readline-sync');

export class Lista {

    private name:string;
    private arrayPistas:Pista[];

    constructor (name:string){
        this.name = name;
        this.arrayPistas=[];
    }
    
    public addSong(newSong:Pista){
        this.arrayPistas.push(newSong)

    }

    public printSongs(){
        console.log(`Lista de reproducción: ${this.name}`)
        this.arrayPistas.forEach(e =>{
           console.log(`${e.getDuracion()} - ${e.getInterprete()} - ${e.getTitulo} - (ID: ${e.getID}) `);
        })
    }

    public deleteSong(selectedSong:number){
        let choice = readlineSync(`Se eliminara la cancion ${this.arrayPistas[selectedSong].getTitulo}, confirma que desea eliminarla?(Y/N): `);

        while (choice !== "y" && choice !== "Y"  && choice !== "n" && choice !== "N"){
            choice = readlineSync(`Se eliminara la cancion ${this.arrayPistas[selectedSong].getTitulo}, confirma que desea eliminarla?(Y/N): `);
        }

        if (choice === "y" || choice === "Y"){
            delete this.arrayPistas[selectedSong];
        } else if (choice === "n" || choice === "N"){
            console.log("Se cancela eliminar la canción");
        }
        
    }
}