import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() detallePelicula:Pelicula
  @Output() eliminarPelicula = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  borrarPelicula(){
    
    this.eliminarPelicula.emit (this.detallePelicula.id);
    this.eliminarPelicula=null;
  }

}
