import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  @Input()empleadoDeLista:Empleado;
  @Input()indice:number;


  arrayCaracteristicas = [''];

  agregarCaracteristicas(nuevaCaracteristicsa: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristicsa);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
