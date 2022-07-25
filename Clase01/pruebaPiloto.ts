import * as readlineSync from 'readline-sync';

let vuelta = 0;
let tiempoTotal = 0;

for (let i=1;i<=4;i++){
    vuelta = Number(readlineSync.question(`Ingrese el tiempo de la vuelta ${i}: `));
    tiempoTotal += vuelta;
}

let promedioVueltas = (tiempoTotal/4);

console.log(`El tiempo total fue de: ${tiempoTotal}`);
console.log(`El promedio de vuelta fue de: ${promedioVueltas}`);