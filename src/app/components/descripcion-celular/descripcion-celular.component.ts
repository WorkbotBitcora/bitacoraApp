import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descripcion-celular',
  templateUrl: './descripcion-celular.component.html',
  styleUrls: ['./descripcion-celular.component.css']
})
export class DescripcionCelularComponent {
  opciones = [
    { value: 'opcion1', label: 'Estado Exterior' },
    { value: 'opcion2', label: 'Pantalla' },
    { value: 'opcion3', label: 'Botones y puertos' },
    { value: 'opcion4', label: 'Camaras' },
    { value: 'opcion5', label: 'Altavoces y microfono' },
    { value: 'opcion6', label: 'Sensores y funciones especiales' },
    { value: 'opcion7', label: 'Condiciones de la bateria' },
    { value: 'opcion8', label: 'Software' },
    // Agrega más opciones según sea necesario
  ];

  // Convierte el valor 'opcion8' a un número entero
  convertirValor(valor: string): number {
    switch (valor) {
      case 'opcion1': return 1;
      case 'opcion2': return 2;
      case 'opcion3': return 3;
      case 'opcion4': return 4;
      case 'opcion5': return 5;
      case 'opcion6': return 6;
      case 'opcion7': return 7;
      case 'opcion8': return 8;
      default: return parseInt(valor, 10);
    }
  }

  @Output() userTypeChanged = new EventEmitter<string>();

  typeUserForm = this.fb.group({
    userTypeName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  onSubmit() {
  if (this.typeUserForm.valid) {
    const userType = this.typeUserForm.value.userTypeName;
    if (userType) {
      this.userTypeChanged.emit(userType);
      this.enviar(userType);
    } else {
      console.error("El tipo de usuario es nulo o indefinido.");
    }
  }
}


  enviar(userType: string) {
  // Realiza acciones con el tipo de usuario (por ejemplo, envío al servidor)
  console.log("Tipo de usuario enviado:", userType);
  // this.authService.enviarTipoUsuario(userType).subscribe(...);
  this.router.navigate(['login']);
}


}

/*import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { UserTypeService } from 'src/app/services/type-user.service';

@Component({
  selector: 'app-descripcion-celular',
  templateUrl: './descripcion-celular.component.html',
  styleUrls: ['./descripcion-celular.component.css']
})
export class DescripcionCelularComponent {
  @Output() userTypeChanged = new EventEmitter<string>();

  typeUserForm = this.fb.group({
    Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private userTypeService: UserTypeService
  ) { }

  onSubmit() {
    console.log('Formulario enviado');
    const userType = this.typeUserForm.value.Name;
    if (userType !== null && userType !== undefined) {
      this.userTypeChanged.emit(userType);
      this.enviar(userType); // Llama a la función enviar() y pasa el tipo de usuario
    }
  }

  redirectToOtraPagina() {
    this.router.navigate(['login']);
  }

  enviar(userType: string) {
    // Aquí puedes realizar cualquier acción que necesites con el tipo de usuario
    console.log("Tipo de usuario enviado:", userType);
    // Por ejemplo, puedes enviar userType al servidor utilizando algún servicio
    // this.authService.enviarTipoUsuario(userType).subscribe(...);
  }
}*/
