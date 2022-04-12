import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  entradas = [
    {titulo:"Python cada dia mas presnete"},
    {titulo:"Java cada dia mas presnete"},
    {titulo:"C# cada dia mas presnete"},
    {titulo:"JS cada dia mas presnete"},
    {titulo:"Php cada dia mas presnete"},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  title = "Registra Usuarios";
  mensaje = "";
  registrado = false;
  nombre:string="";
  apellido:string="";
  cargo:string=""


  registrarUsuario()
  {
    this.registrado = true;
    this.mensaje="Usuario registrado con exito ";
  }


}
