import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicativoComponent } from './vistas/aplicativo/aplicativo.component';
import { LoginComponent } from './vistas/login/login.component';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent}, 
  {path:'aplicativo', component:AplicativoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
//poner las rutas en un objeto para llamarlas desde el app.modules 
export const routingComponents=[LoginComponent,AplicativoComponent,];
