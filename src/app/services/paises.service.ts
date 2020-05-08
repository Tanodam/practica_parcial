import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../clases/pais';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  data: any;
  paises: Pais[] = [];
  url: string = 'https://restcountries.eu/rest/v2/region/americas';
  constructor(private http: HttpClient) {
    this.paises = [];
  }


  obtenerPaises() {
    this.http.get(this.url).subscribe((datos: any) => {
      let id = 1;
      datos.forEach(element => {
        this.paises.push(new Pais(element.name, element.capital, element.population, element.flag, id))
        id++;
      });
    });
    console.log(this.paises);
    return this.paises;
  }


  deshabilitarPais(pais) {
    let idBorrar;
    for (let i = 0; i < this.paises.length; i++) {
      if (pais.id == this.paises[i].id) {
        idBorrar = i;
      }
    }
    this.paises.splice(idBorrar, 1);

  }

}


