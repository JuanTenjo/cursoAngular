import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/empleados.service';
import { ServicioEmpleadosService } from 'src/app/servicio-empleados.service';
import { Empleado } from './empleado.model';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoServices: EmpleadosService) {

  }

  ngOnInit(): void {

    this.empleados = this.empleadoServices.empleados;

  }

  titulo = 'Listado empleados';

  empleados:Empleado[]=[];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoServices.agregarEmpleadoServicio(miEmpleado);

  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;





}
