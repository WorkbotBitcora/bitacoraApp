import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bitacora-c',
  templateUrl: './bitacora-c.component.html',
  styleUrls: ['./bitacora-c.component.css']
})
export class BitacoraCComponent {
  biteClientForm = this.fb.group({
    Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]]
  });

  todayDate: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    const currentDate = new Date();
    this.todayDate = currentDate.toLocaleDateString();
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  }

  redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['/otra-pagina']);
  }
}
