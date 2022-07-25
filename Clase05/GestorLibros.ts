import {Libro} from './libro';
import * as readlineSync from 'readline-sync';
import {LectorArchivos} from './LectorArchivo';

export class GestorLibros {

            biblioteca:Libro[] = [];

            agregarLibro (newName:string,newAuthor:string,newYear:number,newPages:number){
                let nuevoLibro = new Libro(newName,newAuthor,newPages,newYear) 
                this.biblioteca.push(nuevoLibro);
            }

            consultarLibro(numLibroToConsult:number){
                let libroToConsult:Libro = this.biblioteca[numLibroToConsult];
                console.log(`Nombre: ${libroToConsult.consultaNombre()}, Autor: ${libroToConsult.consultaAutor()}, Año: ${libroToConsult.consultaYear()}, Páginas: ${libroToConsult.consultaPaginas()} `);
            }

            modificarLibro(libroToModify:number){
                
                let newName = String(readlineSync.question(`Ingrese el nombre del libro: `));
                let newAuthor = String(readlineSync.question(`Ingrese el nombre del Autor: `));
                let newYear = Number(readlineSync.question(`Ingrese el año del libro: `));
                let newPages = Number(readlineSync.question(`Ingrese las paginas del libro: `));

                let modificado = new Libro(newName,newAuthor,newPages,newYear) ;
                this.biblioteca[libroToModify] = modificado;
            }

            eliminarLibro(libroToDelete:number){
                delete this.biblioteca[libroToDelete];
                console.log(`Libro eliminado correctamente`)
            }

            mostrar(){
            console.log(this.biblioteca);
            }

            obtenerBiblioteca(){
                return this.biblioteca;
            }

}
