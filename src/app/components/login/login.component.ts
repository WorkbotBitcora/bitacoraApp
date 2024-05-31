import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { UserTypeService } from 'src/app/services/type-user.service'; // Importa el servicio UserTypeService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType: string = '';

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService,
    private userTypeService: UserTypeService // Inyecta el servicio UserTypeService
  ) {}

  ngOnInit() {
    this.userTypeService.userTypeChanged.subscribe((userType) => {
      this.handleUserTypeChange(userType);
    });
  }

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { username, password } = this.loginForm.value;
    // Aquí puedes usar this.userType según tus necesidades
    this.authService.getUserByEmail(username as string).subscribe(
      (response: any) => {
        // Verifica si se recibió una respuesta válida
        if (response && response.length > 0) {
          // Aquí puedes realizar la lógica de autenticación
          sessionStorage.setItem('username', username as string);
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

  handleUserTypeChange(userType: string) {
    this.userType = userType;
    // Aquí puedes realizar cualquier acción adicional con el tipo de usuario
    console.log('Tipo de usuario seleccionado:', this.userType);
  }
}



