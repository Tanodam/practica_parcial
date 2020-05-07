import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  peliculas: Pelicula[];
  constructor() { 


    this.peliculas = [
      new Pelicula(1,'Pelicula1','terror','26/04/1995',350,'https://assets.show.news/__export/1569122473417/sites/debate/img/2019/09/21/1_13_crop1569122444535.jpg_943222218.jpg',null),
      new Pelicula(2,'Pelicula2','comedia','27/04/2000',250,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgWSpa6zNZlmEjtV2fqHrJYGKCchlD5WL72dZmH_B9zMc5ykXD&usqp=CAU',null),
      new Pelicula(3,'Pelicula3','amor','28/04/2001',1000,'https://kaliyugadistro.cl/wp-content/uploads/2019/01/somos-normandie-mil-peliculas-360x360.jpg',null),
      new Pelicula(4,'Pelicula4','otros','29/04/2010',300,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUnDoQXiQJqOnL6aEYq4c3KLiF0Gs87tDgqvpgixoHYF1lstmU&usqp=CAU',null),
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
