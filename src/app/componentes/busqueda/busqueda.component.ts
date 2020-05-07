import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActoresService } from './../../services/actores.service';
import { Pelicula } from '../../clases/pelicula';
import { Actor } from './../../clases/actor'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas:Pelicula[];
  actores:Actor[];

  constructor(private peliculasService:PeliculasService, private actoresService:ActoresService) { 
    this.peliculas = [];
    this.actores = [];
  }

  ngOnInit(): void {
    this.peliculas = this.peliculasService.obtenerPeliculas();
    this.actores = this.actoresService.obtenerActores();
  }

}
