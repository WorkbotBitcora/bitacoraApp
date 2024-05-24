import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-interfaz-c',
  templateUrl: './interfaz-c.component.html',
  styleUrls: ['./interfaz-c.component.css']
})
export class InterfazCComponent {
  interClientForm= this.fb.group({
    Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],

  }
  );
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }
  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  }
  redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['/otra-pagina']);
  }
}
