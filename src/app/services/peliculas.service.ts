import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  peliculas: Pelicula[];
  constructor() { 


    this.peliculas = [
      new Pelicula(1,'Pelicula1','terror','26/04/1995',350,'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/a/aladdin-_pelicula.jpg',null,null),
      new Pelicula(2,'Pelicula2','comedia','27/04/2000',250,'https://img.vixdata.io/pd/webp-large/es/sites/default/files/poster-pelicula_1.jpg',null,null),
      new Pelicula(3,'Pelicula3','amor','28/04/2001',1000,'https://img.vixdata.io/pd/webp-large/es/sites/default/files/poster-pelicula_1.jpg',null,null),
      new Pelicula(4,'Pelicula4','otros','29/04/2010',300,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUnDoQXiQJqOnL6aEYq4c3KLiF0Gs87tDgqvpgixoHYF1lstmU&usqp=CAU',null,null),
    ]
    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));

  }


  altaPelicula(pelicula){
    console.log(pelicula);
    let peliculas = this.obtenerPeliculas();
    peliculas.push(pelicula);
    localStorage.setItem('peliculas',JSON.stringify(peliculas));

  }

  obtenerPeliculas(){
    
    return JSON.parse(localStorage.getItem('peliculas'));
  }

  eliminarPelicula( id ){
    let idEliminar;
    for (let index = 0; index < this.peliculas.length; index++) {
      if( id == this.peliculas[index].id ){
        idEliminar = index;
      }
    }
    this.peliculas.splice(idEliminar,1);
    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));
  }

  obtenerId(){
    let peliculas = this.obtenerPeliculas();
   return peliculas.length+1;
  }
}
