import { Injectable } from '@angular/core';
import { Empleado } from './Components/empleado/empleado.model';
import { DataServiceService } from './data-service.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';
// Para inyectar un servicio dentro de un servicio
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioMensajeEmergente: ServicioEmpleadosService, private dataService: DataServiceService) { }

  empleados:Empleado[] = [
    new Empleado("Juan", "pimentel","Presiendete",0),
    new Empleado("Felipe", "pimentel","Presiendete",0),
    new Empleado("Ana", "pimentel","Presiendete",0),
    new Empleado("Maria", "pimentel","Presiendete",0),
    new Empleado("Valentina", "pimentel","Presiendete",0),
    new Empleado("Cahama", "pimentel","Presiendete",0),
  ];

  agregarEmpleadoServicio(empleado: Empleado){

    this.servicioMensajeEmergente.muestraMensage("Persona que se va a agregar: " + "\n" + empleado.nombre + " " + empleado.cargo);

    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number)
  {
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleadoServicio(empleado:Empleado, indice:number)
  {
    let empleadoModificar = this.empleados[indice];
    empleadoModificar.nombre = empleado.nombre;
    empleadoModificar.apellido = empleado.apellido;
    empleadoModificar.salario = empleado.salario;
    empleadoModificar.cargo = empleado.cargo;

  }

  eliminarEmpleado(indice:number){

    this.empleados.splice(indice,1);


  }

}
