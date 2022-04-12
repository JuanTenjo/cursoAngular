import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private htt: HttpClient) { }

  get httParams() {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population');
  }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.htt.get<Country[]>(url, {params: this.httParams});
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.htt.get<Country[]>(url, {params: this.httParams});
  }

  buscarRegion(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/regionalbloc/${termino}`;
    return this.htt.get<Country[]>(url,  {params: this.httParams});
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.htt.get<Country>(url);
  }

}
