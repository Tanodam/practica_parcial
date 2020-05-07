import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  peliculas: Pelicula[];
  peliculaSeleccionada: Pelicula;
  

  constructor(private peliculasService:PeliculasService) { 
    this.peliculas = this.peliculasService.obtenerPeliculas();
  }

  enviarPeliculaSeleccionada(event){
    this.peliculaSeleccionada = event;
  }

  eliminar(id){
    console.log(id);
    this.peliculasService.eliminarPelicula(id);
    this.peliculas=this.peliculasService.obtenerPeliculas();
  }

  ngOnInit(): void {
  }

}
