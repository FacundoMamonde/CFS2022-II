import * as fs from 'fs';

let texto:string = fs.readFileSync("abc.txt", "utf8");
let palabra:string[] = texto.split(" ");

console.log(palabra);
