import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userType: string = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }

  loginUser() {
    const { email, password } = this.loginForm.value;
    // Aquí puedes usar this.userType según tus necesidades
    this.authService.getUserByEmail(email as string).subscribe(
      (response: any) => { // Cambia el tipo de respuesta a 'any' temporalmente
        // Verifica si se recibió una respuesta válida
        if (response && response.length > 0) {
          // Aquí puedes realizar la lógica de autenticación
          sessionStorage.setItem('email', email as string);
          sessionStorage.setItem('token', 'dummyToken'); // Solo un ejemplo, token ficticio
          sessionStorage.setItem('userId', response[0].id.toString()); // Suponiendo que el id del usuario está disponible en el primer elemento
          this.router.navigate(['/home']);
        } else {
          // Si no se recibe una respuesta válida, muestra un mensaje de error
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales inválidas' });
        }
      },
      (error) => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Algo salió mal' });
      }
    );
  }

  // Método para manejar el cambio en el tipo de usuario
  handleUserTypeChange(userType: string) {
    this.userType = userType;
  }
}
