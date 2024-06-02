import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkportatil',
  templateUrl: './checkportatil.component.html',
  styleUrls: ['./checkportatil.component.css']
})
export class CheckportatilComponent {
  constructor(

    private router: Router
  ) { }


 redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['portatil']);
  }
}
