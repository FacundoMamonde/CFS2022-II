export class Telefono {

    protected estaPrendido:boolean = true;
    public bateriaActual:number = 80;
    protected mensajeApagado:string = "El telefono esta apagado!"

    constructor(){
    }

    mandarMensaje(destino:number, mensaje:string){
        if (this.estaPrendido === true){
            console.log(mensaje);
            console.log(`Mensaje enviado correctamente a ${destino}`);
        } else {
            console.log(this.mensajeApagado)
        }
    }

    hacerLlamada(destinoL:number){
        if (this.estaPrendido === true){
            console.log(`Llamando a ${destinoL}`)
        } else {
            console.log(this.mensajeApagado)
        }

    }

    prenderApagar(){

        if (this.estaPrendido === true){
            this.estaPrendido = false;
            console.log('Se apago el telefono')
        } else {
            this.estaPrendido = true;
            console.log(`Se prendió el telefono`)
        }

    }

}