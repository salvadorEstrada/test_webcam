import { Component, OnInit } from '@angular/core'; 
import { ResponseI } from 'src/app/modelo/response.interface';
import { ServicioService } from 'src/app/servicios/servicio/servicio.service';

@Component({
  selector: 'app-aplicativo',
  templateUrl: './aplicativo.component.html',
  styleUrls: ['./aplicativo.component.css']
})
export class AplicativoComponent implements OnInit {
   
  userDisplayName='';

  ngOnInit() { 
    this.userDisplayName=sessionStorage.getItem('nombre');
  } 

 
}
