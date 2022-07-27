class Parlante {

    encendido :boolean = false;
    volumen:number = 8;

    constructor(){

    }

    encenderApagar(){
        if (this.encendido === false) {
            console.log(`Se encendio el parlante correctamente`);
            this.encendido = true
        } else {
            console.log(`Parlante apagado`);
            this.encendido=false;
        }
    }

    subirVolumen(){
        if (this.volumen > 9){
            console.log("Volumen maximo");
        } else {
        this.volumen++;
        console.log(`El volumen actual es: ${this.volumen}`);
        }
    }

    bajarVolumen(){
        if (this.volumen < 1){
            console.log("Volumen minimo");
        } else {
        this.volumen--;
        console.log(`El volumen actual es: ${this.volumen}`);
        }
    }
}

let speaker = new Parlante();

speaker.encenderApagar();
speaker.subirVolumen();
speaker.subirVolumen();
speaker.subirVolumen(); 