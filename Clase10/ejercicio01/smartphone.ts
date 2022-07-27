import { ITelefono } from "./i_telefono";

class SmartPhone implements ITelefono {

    private estaPrendido:boolean;

    constructor (prendido:boolean){
        this.estaPrendido = prendido;
    }

    public prender(): void {
        if (this.estaPrendido === true){
            console.log("El telefono ya esta prendido!");
        } else {
            this.estaPrendido = true
            console.log("Se prendio el telefono");
        }
    }

    public apagar(): void {
        if (this.estaPrendido === false){
            console.log("El telefono ya esta apagado");
        } else {
            this.estaPrendido = false;
            console.log("Se apago el telefono")
        }

    }

    public llamar(numeroTel:number):void {
        if (this.estaPrendido === false){
            console.log('El telefono esta apagado! No se puede llamar')
        } else{
        console.log(`Llamando al numero ${numeroTel} ...`)
    }
    }

    public sacarFoto():void {
        if (this.estaPrendido === false){
            console.log('El telefono esta apagado! No se puede sacar foto')
        } else{
        console.log("Se saco la foto con exito")
        }
    }

}


let xiaomi = new SmartPhone(false);

xiaomi.prender();
xiaomi.llamar(2789784);
xiaomi.sacarFoto();
xiaomi.apagar();
xiaomi.llamar(297855);