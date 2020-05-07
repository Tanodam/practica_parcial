import { Component, OnInit } from '@angular/core';
import { ActoresService} from '../../services/actores.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  actores;
  constructor(private actoresService:ActoresService) { }

  ngOnInit(): void {
    this.actores = this.actoresService.obtenerActores();
  }

}
