import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import{ServicioService}from '../../servicios/servicio/servicio.service';
import{LoginI}from '../../modelo/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  loginForm=new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  //errorInicio:boolean =false;
  //processing: Boolean = false;
  //error: Boolean = false; 
  //usuario:any = {}; //any=cualquier tipo de dato

  constructor(private apiServicio:ServicioService) { }

  ngOnInit(): void {
  }
  
  onLogin(form:LoginI){ 
    this.apiServicio.loginByEmail(form).subscribe(data=>{
      console.log(data);
    });
   // console.log(form);
  }



}
