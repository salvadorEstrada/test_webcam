import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import{ServicioService}from '../../servicios/servicio/servicio.service';
import{LoginI}from '../../modelo/login.interface'; 
import{ResponseI}from '../../modelo/response.interface';

import{Router} from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  loginForm=new FormGroup({
    idUsuario: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required)
  });
  

  constructor(private apiServicio:ServicioService, private router:Router) { }

  validaAcceso:boolean=false;
  errorMsj:any = "";

  ngOnInit(): void {
  }
  
  onLogin(form:LoginI){ 
    this.apiServicio.loginByEmail(form).subscribe(data =>{
      /*console.log(data); 
      data.acceso?'Acceso Correcto!':'Parámetros no'
      if(data.acceso){
        console.log('Acceso correcto!');
      }else{
        console.log('Parámetros no válidos'); 
      }*/  
      let dataResponse:ResponseI=data; 
      if(dataResponse.acceso==true){
         localStorage.setItem("correo",form.idUsuario);//guarda co
         sessionStorage.setItem("nombre",dataResponse.nombre); 
         this.router.navigate(['aplicativo'])  
         this.errorMsj="Acceso correcto!"
      }else{
        this.validaAcceso=true; 
        this.errorMsj="Usuario o passwrod son incorrectos!";
      }
    });
  }



}
