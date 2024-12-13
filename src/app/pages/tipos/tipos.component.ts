import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposComponent {
  constructor(private router: Router){

  }
  navegar(direccion:string){
    this.router.navigate([direccion])
  }
}
