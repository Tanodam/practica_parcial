import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() detallePais;
  @Output() paisSeleccionado  = new EventEmitter();

  constructor() {
    this.detallePais = null;
  }

  ngOnInit(): void {
  }

  deshabilitarPais()
  {
    console.log(this.detallePais);
    this.paisSeleccionado.emit(this.detallePais);
  }
}
