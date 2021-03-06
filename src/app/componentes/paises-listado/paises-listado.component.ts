import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {
  paises:any
  @Output() paisSeleccionado   = new EventEmitter();
  

  constructor(private paisesService:PaisesService) {
   }

  ngOnInit(): void {
    this.paises = this.paisesService.obtenerPaises();
  }

  enviarPaisSeleccionado(event){
    this.paisSeleccionado = event;
 
  }

  deshabilitarPais(pais){
    console.log(pais);
    this.paisesService.deshabilitarPais(pais);
    // this.paisesService=this.paisesService.obtenerPaises();
  }


}
