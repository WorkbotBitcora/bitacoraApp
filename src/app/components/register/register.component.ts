import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { registerCredentials } from 'src/app/interfaces/registerCredentials';
import { IResponseRegister } from 'src/app/interfaces/registerResponse';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';
// aqui va el service

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    contrasena: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  get nombre() {
    return this.registerForm.controls['nombre'];
  }

  get apellido() {
    return this.registerForm.controls['apellido'];
  }


  get usuario() {
    return this.registerForm.controls['usuario'];
  }

  get contrasena() {
    return this.registerForm.controls['contrasena'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  submitDetails() {
    const postData = { ...this.registerForm.value, idTipoUsuario: 1 };
    delete postData.confirmPassword;
    console.log(postData)

    this.authService.registerUser(postData as registerCredentials).subscribe(
      
      (response: IResponseRegister) => {
        
        console.log(response)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
         this.router.navigate(['login'])
      },
      error => {
        console.log(error)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )


  }

}
