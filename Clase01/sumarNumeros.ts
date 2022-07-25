let arregloUno = [5,"palabra",5,"palabra",5];
let arregloDos = [5,5,5,5,5];

function sumaDeArreglo (arreglo:any){
    let suma = 0;
    let error = 0;
    for (let i=0;i<arreglo.length;i++){
        if (isNaN(arreglo[i])){
            error = error + 1;
        }
        suma = suma + arreglo[i];
    }

    if (error === 0){
        console.log(suma)
    } else {
        console.log('Error, '+error+' elementos del arreglo no son numeros')
    }
}

sumaDeArreglo(arregloUno);
sumaDeArreglo(arregloDos);
