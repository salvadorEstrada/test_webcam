import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import {HttpClientModule}from '@angular/common/http';
import { FooterComponent } from './pantillas/footer/footer.component';
import { HeaderComponent } from './pantillas/header/header.component';
import { EnviarDocComponent } from './vistas/enviar-doc/enviar-doc.component';
import { VerOficinasComponent } from './vistas/ver-oficinas/ver-oficinas.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    HeaderComponent,
    EnviarDocComponent,
    VerOficinasComponent
    //Se creó este objeto en app-routing.modules
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
