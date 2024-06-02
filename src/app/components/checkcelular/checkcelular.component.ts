import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkcelular',
  templateUrl: './checkcelular.component.html',
  styleUrls: ['./checkcelular.component.css']
})
export class CheckcelularComponent {
  constructor(

    private router: Router
  ) { }


 redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['observaciones']);
  }
}
