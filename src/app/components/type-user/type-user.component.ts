import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-type-user',
  templateUrl: './type-user.component.html',
  styleUrls: ['./type-user.component.css']
})
export class TypeUserComponent {
  @Output() userTypeChanged = new EventEmitter<string>(); // Define un EventEmitter para emitir el tipo de usuario

  typeUserForm = this.fb.group({
    Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  });
setUserType: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
    const userType = this.typeUserForm.value.Name; // Obtén el valor del tipo de usuario del formulario
    if (userType !== null && userType !== undefined) {
    this.userTypeChanged.emit(userType); // Emite el tipo de usuario
  }
  }

  redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['login']);
  }
}
