import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicativoComponent } from './vistas/aplicativo/aplicativo.component';
import { EnviarDocComponent } from './vistas/enviar-doc/enviar-doc.component';
import { LoginComponent } from './vistas/login/login.component';
import { VerDocumentosComponent } from './vistas/ver-documentos/ver-documentos.component';
import { VerOficinasComponent } from './vistas/ver-oficinas/ver-oficinas.component';



const routes: Routes = [
  //{path:'', redirectTo:'login', pathMatch: 'full'},
  //{path:'login', component:LoginComponent},
  {path:'', component:LoginComponent}, 
  {path:'aplicativo', component:AplicativoComponent},
  {path:'enviarDocumentos', component:EnviarDocComponent },
  {path:'verDocumentos', component:VerDocumentosComponent },
  {path:'verOficinas', component:VerOficinasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
//poner las rutas en un objeto para llamarlas desde el app.modules 
export const routingComponents=[LoginComponent,AplicativoComponent,
                                EnviarDocComponent,VerDocumentosComponent,
                                VerOficinasComponent];
