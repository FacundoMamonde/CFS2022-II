import * as fs from 'fs';
import {Libro} from './libro';
import {GestorLibros} from './GestorLibros';

import * as ReadlineSync from 'readline-sync';

export class LectorArchivos{

    private biblioteca:GestorLibros;

    constructor(bibliotecaToRead:GestorLibros){
        this.biblioteca = bibliotecaToRead;
    }


    public retornarArchivo():string[]{
    
        let file:string = fs.readFileSync('libros.txt', 'utf8');
        let files:string[] = file.split('\n');

        files.forEach(element =>{
            let libroInfo:string[] = element.split(';');
            this.biblioteca.agregarLibro(libroInfo[0],libroInfo[1],Number(libroInfo[2]),Number(libroInfo[3]));
        })

        return files;

    }

}


