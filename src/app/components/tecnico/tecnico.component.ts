import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit{
  
  nombreTecnico: string  = '';

  typeUserForm = this.fb.group({
    Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],

  }
  );
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router, 
    
  ) { }




  ngOnInit(): void {
    this.nombreTecnico = localStorage.getItem('username')|| "SIN NOMBRE" ;
  }

  onSubmit() {
    // Lógica para manejar el envío del formulariof
    console.log('Formulario enviado');

  }
  redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['login']);
  }

  public logOut() {
    localStorage.clear();
    console.log("entro al logOut")
  }
}
