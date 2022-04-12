import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { micomponente } from './Components/micomponente/micomponente.component';
import { PeliculasComponent } from './Components/peliculas/peliculas.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivasComponent } from './Components/directivas/directivas.component';
import { EmpleadoComponent } from './Components/empleado/empleado.component';
import { ListaEmpleadosComponent } from './Components/lista-empleados/lista-empleados.component';
import { CaracteristicasEmpleadoComponent } from './Components/caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { ProyectoComponentComponent } from './Components/proyecto-component/proyecto-component.component';
import { QuienesSomosComponentComponent } from './Components/quienes-somos-component/quienes-somos-component.component';
import { ContactoComponentComponent } from './Components/contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaEmpleadoComponent } from './Components/actualiza-empleado/actualiza-empleado.component';
import { Pagina404Component } from './Components/pagina404/pagina404.component';
import { DataServiceService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'', component:EmpleadoComponent},
  {path:'proyectos', component:ProyectoComponentComponent},
  {path:'quienes', component:QuienesSomosComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'Actualizar/:id', component:ActualizaEmpleadoComponent},
  {path:'**', component:Pagina404Component},
];


@NgModule({
  declarations: [
    AppComponent,
    micomponente,
    PeliculasComponent,
    CalculadoraComponent,
    DirectivasComponent,
    EmpleadoComponent,
    ListaEmpleadosComponent,
    CaracteristicasEmpleadoComponent,
    NavbarComponent,
    HomeComponentComponent,
    ProyectoComponentComponent,
    QuienesSomosComponentComponent,
    ContactoComponentComponent,
    ActualizaEmpleadoComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule, RouterModule.forRoot(appRoutes), HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
