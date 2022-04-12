import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  constructor(private gisfService: GifsService){

  }

  //El ! ES UN NO NULL ASSERTION OPERATION, ESTA DESABILIDAR UNA WANRING
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){

    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length != 0){
      this.gisfService.buscarGifs(valor);
      this.txtBuscar.nativeElement.value = '';
    }

  }

}
