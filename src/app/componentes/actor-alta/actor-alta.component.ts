import { Component, OnInit } from '@angular/core';
import { PaisesService} from '../../services/paises.service';
import { ActoresService } from '../../services/actores.service'
import { Actor } from '../../clases/actor'

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  paises:any
  nombre:string;
  fechaNacimiento:string;
  apellido:string;
  sexo:string;
  pais;
  constructor(private paisesService:PaisesService, private actorService : ActoresService) {
   }

  ngOnInit(): void {
    this.paises = this.paisesService.obtenerPaises();
  }

  alta() {
    let actor = new Actor(this.actorService.obtenerId(), this.nombre, this.apellido, this.sexo,this.fechaNacimiento,null, this.pais.name);
    this.actorService.altaActor(actor);
  }

  seleccionoPais(pais){

    this.pais = pais;
    console.log(this.pais);
  }

}
