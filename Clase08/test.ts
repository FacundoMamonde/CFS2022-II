import {Auto} from './auto';
import {AutoCiudad} from './autoCiudad';
import {AutoCarreras} from './autoCarreras';
import {Concesionaria} from './concesionaria';


let consesionaria = new Concesionaria();

consesionaria.addAuto(new AutoCiudad("Calle","Chevrolet","Astra",2010,"ABC123"))
consesionaria.addAuto(new AutoCiudad("Calle","Ford","Fiesta",2012,"ABC124"))
consesionaria.addAuto(new AutoCiudad("Calle","Volkswagen","Gol",2008,"ABC125"))

consesionaria.addAuto(new AutoCarreras("Carrera","Toyota","Corolla",2022,"Gazoo Racing"))
consesionaria.addAuto(new AutoCarreras("Carrera","Chevrolet","Cruze",2022,"Elaion"))
consesionaria.addAuto(new AutoCarreras("Carrera","Renault","Fluence",2022,"Castrol"))


consesionaria.printAuto();