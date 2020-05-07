export class Actor {
    id:number;
    nombre:string;
    apellido:string;
    sexo:string;
    fechaNacimiento:string;
    foto:string;

    constructor(id:number, nombre:string, apellido:string, sexo:string, fechaNacimiento:string, foto:string)
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.fechaNacimiento=fechaNacimiento;
        this.foto=foto;
    }
}
