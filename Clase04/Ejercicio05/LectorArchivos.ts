import * as fs from 'fs';
import {RegistroAutomotor} from './registroAutomotor';
import {Auto} from './Auto';


let registro = new RegistroAutomotor;
registro.consultarTodos();

let texto: string = fs.readFileSync('autos.txt', 'utf8');

let palabras: string[] = texto.split(';');

let auto:any[];

for (let i=0 ; i < palabras.length-1 ; i++){
    auto = palabras[i].split(',');

    //// Se agregan los autos al registro (Estado del motor, Estado de luces, Cambio seleccionado)

    registro.alta(new Auto(Boolean(auto[0]),Boolean(auto[1]),Number(auto[2])));
}   

let reg = new RegistroAutomotor();
