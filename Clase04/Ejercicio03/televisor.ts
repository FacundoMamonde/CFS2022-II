
export class Televisor {

    private canal:string[] = ["Telefe","Fox Sport","America","Discovery"];
    private canalEstado:boolean[] = [true,false,true,true];

    public obtenerInfo(canalInfo:number){
     return this.canalEstado[canalInfo];
    }

    public obtenerNombre(canalSel:number){
        return this.canal[canalSel];
    }

}