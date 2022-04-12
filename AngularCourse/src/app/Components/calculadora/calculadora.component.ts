import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Mini Calculadora";
  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;

sumar():void{
  this.resultado = this.numero1 + this.numero2;
}

restar():void{
  this.resultado = this.numero1 - this.numero2;
}




}
