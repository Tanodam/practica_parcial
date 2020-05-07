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
    this.paisesService.obtenerPaises().subscribe( resp=>{
      console.log(resp);
      this.paises = resp;
    })
  }

  enviarPaisSeleccionado(event){
    this.paisSeleccionado = event;
 
  }


}
