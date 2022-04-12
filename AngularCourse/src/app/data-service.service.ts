import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './Components/empleado/empleado.model';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private htppClient: HttpClient) {

  }

  guardarEmpleados(empleados:Empleado[]){
    this.htppClient.post("https://angularcourse-9593e-default-rtdb.firebaseio.com/datos.json", empleados).subscribe(
      Response => console.log("Se gan guardado los registros"),
      error => console.log("Error " + error),


    )
  }


}
