import { Component, OnInit } from '@angular/core';
import { ActoresService } from '../../services/actores.service';
import {PeliculasService} from '../../services/peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  actores;
  nombre:string;
  fechaEstreno:Date;
  cantPublico:number;
  tipo:string;
  nombreActor:string;
  apellidoActor:string;

  constructor(private actoresService:ActoresService, private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.actores = this.actoresService.obtenerActores();
  }
  alta() {
    let pelicula = new Pelicula(this.peliculasService.obtenerId(),this.nombre,this.tipo,this.fechaEstreno.toString(), this.cantPublico,null, this.nombreActor + " " + this.apellidoActor,null);
    this.peliculasService.altaPelicula(pelicula);
  }
  obtenerActor(actor){
   this.nombreActor = actor.nombre;
   this.apellidoActor = actor.apellido;
  }

}
