    /*
• Generar diagrama de clases usando draw.io
• Escribir un comentario de cada uno de los métodos implementados → el objetivo es ir ejercitando la justificación de las decisiones de diseño tomadas
• Con respecto a las clases, escribir un comentario para cada una, indicando la responsabilidad de cada clase, y la funcionalidad que provee
    */

/// Interface que establece que el Metodo de pago debe incluir un costo de tipo numero
interface PaymentMethod {
    pay(cost: number): void;
}

/// Clase que da mensaje cuando el metodo de pago es en efectivo
class Efectivo implements PaymentMethod {

    public pay(costo: number): void {
        console.log('Se pagó ' + costo + ' empleando efectivo');
    }
}

/// Clase que da mensaje cuando el metodo de pago es con tarjeta
class Tarjeta implements PaymentMethod {

    public pay(costo: number): void {
        console.log('Se pagó ' + costo + ' empleando tarjeta');
    }

}


/// Clase item, debe generarse incluyendo una variable descripcion y un costo, Tambien contiene metodos utiles para poder modificar las variables mendionadas
class Item {

    private descripcion: string;
    private costo: number;

    public constructor(descripcion: string, costo: number) {
        this.descripcion = descripcion;
        this.costo = costo;
    }

    /// Obtener la descripcion del producto es importante poder mostrar la informacion al usuario, lo mismo con el metodo getCosto
    public getDescripcion(): string { 
        return this.descripcion; 
    }
    public getCosto(): number { 
        return this.costo; 
    }

    /// Metodo  para cambiar el nombre de un iteam
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion; 
        }

    /// Metodo para poder cambiar el costo del producto a futuro
    public setCosto(costo: number): void { 
        this.costo = costo; 
    }

    /// Metodo booleano util para saber si un producto es igual a otro
    public equals(i: Item): boolean {
        return this.costo == i.getCosto() && this.descripcion == i.getDescripcion();
    }

}
    

/// Esta clase se encarga de almacenar los items, permite agregar items y eliminar items usando sus metodos, Tambien contiene los metodos para mostrar al usuario la suma de los costos de los productos
class Cuenta {
    
    private lineItems: Item[] = [];

    /// Metodo que permite agregar items al arreglo de Items
    public addLineItem(lineItem: Item): void {
        this.lineItems.push(lineItem);
    }

    /// Metodo al que se le pasa por parametro un item (de tipo item), se recorre el arreglo "lineItems" comparandolo con el iteam ingresado por parametro, si detecta que hay dos items iguales, lo borra del arreglo "lineItems"
    public removeLineItem(lineItem: Item): void {
        for (let i = 0; i < this.lineItems.length; i++) {
        if (this.lineItems[i].equals(lineItem))
        this.lineItems.splice(i, 1);
        }
    }

    /// Metodo que genera una suma de todos los valores del arreglo "lineItems"
    public getCostInCents(): number {
        return this.lineItems.map(item => item.getCosto()).reduce((a, b) => a + b, 0);
    }

    /// Meotodo que muestra un mensaje con el costo total y si se efectua en efectivo o con tarjeta
    public pay(method: PaymentMethod): void {
        method.pay(this.getCostInCents());
    }
}


let cuentaPrueba = new Cuenta();
let efectivo = new Efectivo();
let item1 = new Item("Computadora",85000);
let item2 = new Item("Impresora", 35000);

cuentaPrueba.addLineItem(item1);
cuentaPrueba.addLineItem(item2);

console.log(cuentaPrueba.getCostInCents());
cuentaPrueba.pay(efectivo);
