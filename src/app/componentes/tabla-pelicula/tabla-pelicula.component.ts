import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Output() peliculaSeleccionada = new EventEmitter();
  @Input() peliculas; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

  verDetalles( pelicula ){
    console.log(pelicula);
    this.peliculaSeleccionada.emit(pelicula);
  }

}
