import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from 'src/app/servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregarCaracteristica(value: string) {
    this.miServicio.muestraMensage(value);
    this.caracteristicasEmpleado.emit(value);
  }

}
