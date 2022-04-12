import { Component } from "@angular/core";
//Caracteristicas y propiedades de este componente
@Component({
  selector: "micomponente",
  templateUrl: './micomponente.component.html'
})

export class micomponente{

  public titulo: string;
  public comentario: string;
  public year: number;

  constructor(){
    this.titulo = "Hola mundo, soy MI COMPONENTE";
    this.comentario = "Este es mi primer componente";
    this.year = 2018;
    console.log("Mi componente cargado");
    console.log(this.titulo,  this.comentario, this.year)
  }

  llamaEmpresa(value: string){
  }


  //Binding bidireccional
  empresa = "Google";


  //Binding

  usuRegistrado = false;

  habilitacionCuadro = false;

  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado = true;
  }

  setUsuarioRegistrado(evemt:Event){

    this.textoDeRegistro = "El usuario se aca de registrar"

    if((<HTMLInputElement>evemt.target).value == "si"){
      this.textoDeRegistro = "El usuario se aca de registrar";
    }else{
      this.textoDeRegistro = "No hay nadie registrado";
    }


  }


}
