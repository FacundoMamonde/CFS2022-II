import * as readlineSync from 'readline-sync';

var arregloPalabras:string[] = ["Computadora", "Teclado", "Monitor", "Mouse", "Parlante"];

function insertar (){
    let palabraInsertar = String(readlineSync.question(`Ingrese la palabra a insertar: `));
    arregloPalabras.push(palabraInsertar);
    console.log(arregloPalabras);
    arregloPalabras.sort()
}

function eliminar (){
    let palabraEliminar = String(readlineSync.question(`Ingrese la palabra a eliminar: `));

    for (let i=0; i < arregloPalabras.length;i++){
        if (arregloPalabras[i] === palabraEliminar){
            delete arregloPalabras[i];
            console.log(`Se elimino la palabra ${palabraEliminar} de la posicion ${i}`)
            arregloPalabras.sort()
        }
    }
    console.log(arregloPalabras);
}

function buscar (){
    let palabraBuscar = String(readlineSync.question(`Ingrese la palabra a buscar: `));
    let encontrado = 0;
    for (let i=0;i < arregloPalabras.length;i++){
        if (arregloPalabras[i] === palabraBuscar){
            console.log(`Se encontro la palabra ${palabraBuscar} en la posicion ${i+1}`)
            encontrado++
        }
    }
    console.log(arregloPalabras);
}

function actualizar (){
    let palabraActualizar = String(readlineSync.question(`Ingrese la palabra a actualizar: `));
    let palabraNueva = String(readlineSync.question(`Ingrese la palabra nueva: `));

    for (let i=0; i < arregloPalabras.length;i++){
        if (arregloPalabras[i] === palabraActualizar){
            arregloPalabras[i] = palabraNueva;
            console.log(`Se actualizo correctamente la palabra ${palabraActualizar} por ${palabraNueva}`)
        }
    }

    console.log(arregloPalabras);
}

insertar();
eliminar();
buscar();
actualizar();