import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  data: any;
  paises;
  url: string = 'https://restcountries.eu/rest/v2/region/americas';
  constructor(private http: HttpClient) { }


  obtenerPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/region/americas');
  }

}
