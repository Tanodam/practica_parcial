import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() paises;
  @Output() paisSeleccionado = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  verDetalles(pais){
    this.paisSeleccionado.emit(pais);
  }

}
