import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/vistas/login/login.component';
import {LoginI} from '../../modelo/login.interface' ;
import {ResponseI} from '../../modelo/response.interface' ;
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

   url:string="https://6w33tkx4f9.execute-api.us-east-1.amazonaws.com/";
  constructor(private http: HttpClient) { } 
  
  //Lo que se va enviar por el parametro formulario debe ser un  usuario y password(LoginI)
  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url+"GET/RS_Usuarios";
    return this.http.post<ResponseI>(direccion,form);
  }
}
