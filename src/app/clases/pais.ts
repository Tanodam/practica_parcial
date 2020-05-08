export class Pais {
    name:string;
    capital:string;
    flag:string;
    population:string;
    id:number;
    

    constructor( nombre:string, capital:string, poblacion:string, flag:string ,id?:number){

        this.name=nombre;
        this.capital=capital;
        this.flag=flag;
        this.population=poblacion;
        if(id){
            this.id=id;
        }
    }
}
