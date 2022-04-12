import { Injectable } from '@angular/core';
//El provideIn lo eleve a un nivel global en la aplicacion
@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey: string = 'XAuoixpgjbSAMFdomtay8JnKhNtYUqFS';
  private _historial: string[] = [];

  get historial() {

    return [...this._historial]
  }

  buscarGifs(query: string){

    query = query.trim().toUpperCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);
    }


  }

  constructor() { }
}
