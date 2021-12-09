import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDisplayName='';
  constructor() { }

  ngOnInit() { 
    this.userDisplayName=sessionStorage.getItem('nombre');
  }  

  logOut(){
    localStorage.removeItem("correo");
    localStorage.href="/";
  }
}
