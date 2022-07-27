import * as fs from 'fs';
import {Item} from './item';
let readlineSync = require('readline-sync');

export class Stock {

    private items:Item[];
    private carrito:Item[];

    constructor(){
        this.items = [];
        this.carrito = [];
    }

    public addItem(nuevo:Item):void{
        this.items.push(nuevo);
    }

    public addToChart(codigo:string, cantidad:number):void{

        for(let i=0;i<this.items.length;i++){
            
            /* Si detecta el mismo codigo y la cantidad solicitada es igual o menor al stock*/
            if (this.items[i].getCodigo() === codigo && this.items[i].getStock() >= cantidad ){
                /* Se crea un Item temporal que tiene los datos del item con el mismo codigo*/
                let temp:Item;
                temp = this.items[i];
                /* Se setea la cantidad */
                temp.setStock(cantidad);
                this.carrito.push(temp);
            }
        }
        
       

    }
    
    public finishPurchase():void{
        console.log("Finalizando compra:");

        /// Se establecen variables para utilizar luego
        let valorUnidades:number;
        let sumaTotal:number = 0;
        //// Se recorre el carrito, por cada elemento
        this.carrito.forEach(e => {
            /// Se establece cual es el costo total del producto, multiplicando el valor por el stock
            valorUnidades = (e.getValor() * e.getStock());
            console.log(` ${e.getStock()} unidades de ${e.getNombre()} : $${valorUnidades} `);
            sumaTotal = sumaTotal + valorUnidades;
        });

        this.saveTicket();

        console.log("El costo total de todos los productos es de: $"+sumaTotal);
    }

    public loadItems():string[]{
    
        let file:string = fs.readFileSync('./productos.txt', 'utf8');
        let files:string[] = file.split('\n');
        let i = 100;
        files.forEach(element =>{
            let itemInfo:string[] = element.split(';');
            let nuevoItem = new Item(String(i),itemInfo[0],Number(itemInfo[1]),Number(itemInfo[2]));
            this.addItem(nuevoItem);
            i++;
        })

        console.log("Se cargaron los productos!");
        console.log(this.items);
        return files;

    }
    
    public saveTicket():void{
        let ticketText:string = "";
        
        let sumaTotal:number = 0;

        this.carrito.forEach(element =>{
            ticketText = ticketText + element.getStock() + " unidades de "+ element.getNombre()+": $"+ (element.getStock() * element.getValor()) + '\n';
            sumaTotal = sumaTotal + (element.getStock() * element.getValor());
        })

        ticketText = ticketText + '\n' + "TOTAL: $"+ sumaTotal;

        fs.writeFile('ticket.txt', ticketText,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Se guardo el ticket!");
        });
    }

}



let kiosko = new Stock();
kiosko.loadItems();

kiosko.addToChart("100",5);

kiosko.addToChart("102",6);

kiosko.addToChart("104",15);

kiosko.finishPurchase();










