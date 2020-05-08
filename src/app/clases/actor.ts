export class Actor {
    id:number;
    nombre:string;
    apellido:string;
    sexo:string;
    fechaNacimiento:string;
    foto:string = "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/12/19/Recortada/img_tperez_20170911-210031_imagenes_lv_gtres_dl_u328861_115-kiOH-U472362538899fdH-992x558@LaVanguardia-Web.jpg";

    constructor(id:number, nombre:string, apellido:string, sexo:string, fechaNacimiento:string, foto:string)
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.fechaNacimiento=fechaNacimiento;
        if(foto != null)
        this.foto=foto;
    }
}
