import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/empleados.service';
import { Empleado } from '../empleado/empleado.model';

@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrls: ['./actualiza-empleado.component.css']
})
export class ActualizaEmpleadoComponent implements OnInit {

  constructor(private empleadoServices: EmpleadosService, private route:ActivatedRoute, private navegacion: Router) { }

  accion:number;

  ngOnInit(): void {

    this.empleados = this.empleadoServices.empleados;

    //Traer el parametro de la ruta

    this.indice = this.route.snapshot.params['id'];

    let empleado:Empleado = this.empleadoServices.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroSalario = empleado.salario;
    this.cuadroCargo = empleado.cargo;

    //Vamos s obtener valor de queryParams

    this.accion = this.route.snapshot.queryParams['accion'];

  }

  empleados:Empleado[]=[];

  // actualizaEmpleado(){

  //   let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

  //   this.empleadoServices.actualizarEmpleadoServicio(miEmpleado, this.indice);

  //   this.navegacion.navigate(['']);

  // }

  // eliminaEmpleado(){
  //   this.empleadoServices.eliminarEmpleado(this.indice);
  //   this.navegacion.navigate(['']);
  // }

    actualizaEmpleado(){

    if(this.accion == 1){
        let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
        this.empleadoServices.actualizarEmpleadoServicio(miEmpleado, this.indice);
        this.navegacion.navigate(['']);
    }else{
      this.empleadoServices.eliminarEmpleado(this.indice);
      this.navegacion.navigate(['']);
    }

  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  indice:number;



}
