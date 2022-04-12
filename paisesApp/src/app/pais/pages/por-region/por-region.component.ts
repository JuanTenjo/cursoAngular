import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {


  regiones: string[] = ['EU','EFTA','CARICOM', 'PA', 'AU'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService){}

  activarRegion(region: string){

    if(region == this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe(rest => {
      this.paises = rest;
    })
  }

  getClasesCss(region:string){
    return(region == this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }






}
