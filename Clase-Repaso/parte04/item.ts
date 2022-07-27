export class Item{

    codigo:string;
    nombre:string;
    valor:number;
    stock:number;

    constructor (id:string,name:string,cost:number,amount:number){
        this.codigo = id;
        this.nombre = name;
        this.valor = cost;
        this.stock = amount;
        
    }

    public getCodigo():string{
        return this.codigo;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getValor():number{
        return this.valor;
    }

    public getStock():number{
        return this.stock;
    }

    public setNombre(nuevo:string){
        this.nombre = nuevo;
    }

    public setValor(nuevo:number){
        this.valor = nuevo;
    }

    public setStock(nuevoStock:number):void{
        this.stock = nuevoStock;
    }

}