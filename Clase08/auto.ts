export class Auto {

    private usabilidad:string;
    private marca:string;
    private modelo:string;
    private year:number;

    constructor (us:string, mar:string, mod:string, year:number){
        this.usabilidad = us;
        this.marca = mar;
        this.modelo = mod;
        this.year = year;
    }

    public getUsabilidad(){
        return this.usabilidad;
    }

    public getMarca(){
        return this.marca;
    }

    public getModelo(){
        return this.modelo;
    }

    public getYear(){
        return this.year;
    }


}