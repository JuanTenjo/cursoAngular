import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    constructor(){
      console.log('Serivicio inicializado');
    }

    private _personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegueta',
        poder: 6400
      },
    ];

    get personajes(): Personaje[] {
      //ESTO SE HACE YA QUE EN JS TODO ES UN REFERENCIA Y PARA PODER ENCAPCULAR BIEN UNA DATA SE DEBE UTILIZAR EL OPERADOR SPREAD
      return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);
    }

}
