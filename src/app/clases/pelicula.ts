
export class Pelicula {
 id:number;
 nombre:string;
 tipo:string; //terror, comedia, amor, otros
 fechaEstreno:string;
 cantidadPublico:number;
 fotoPelicula = 'https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg';
 nombreActor:string = "ActorX";

 
 constructor(id:number, nombre:string,tipo:string,fechaEstreno:string, cantidadPublico:number, fotoPelicula:string, nombreActor:string)
 {
     this.id = id;
     this.nombre = nombre;
     this.tipo = tipo;
     this.fechaEstreno = fechaEstreno;
     this.cantidadPublico = cantidadPublico;
     if(fotoPelicula != null)
     {
         this.fotoPelicula = fotoPelicula;
     }
     if(this.nombreActor != null)
     {
         this.nombreActor = nombreActor;
     }
 }

 
}