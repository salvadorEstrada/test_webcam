import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import {HttpClientModule}from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents //Se creó este objeto en app-routing.modules
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
