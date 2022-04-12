import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/empleados.service';
import { Empleado } from '../empleado/empleado.model';

@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css']
})
export class ProyectoComponentComponent implements OnInit {

  constructor(private router: Router, private empleadoServices: EmpleadosService) {

   }

  ngOnInit(): void {
    this.empleados = this.empleadoServices.empleados;
  }

  volverHome(){
    this.router.navigate(['']);
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoServices.agregarEmpleadoServicio(miEmpleado);

    this.router.navigate(['']);

  }


  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;




}
