import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.css']


})
export class ObservacionesComponent {


  constructor(

    private router: Router
  ) { }


 redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['observaciones']);
  }


}
