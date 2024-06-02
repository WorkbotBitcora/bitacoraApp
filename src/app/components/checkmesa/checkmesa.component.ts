import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkmesa',
  templateUrl: './checkmesa.component.html',
  styleUrls: ['./checkmesa.component.css']
})
export class CheckmesaComponent {
  constructor(

    private router: Router
  ) { }


 redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['observaciones']);
  }
}
