import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descripcion-portatil',
  templateUrl: './descripcion-portatil.component.html',
  styleUrls: ['./descripcion-portatil.component.css']
})
export class DescripcionPortatilComponent {
opciones = [
    { value: 'opcion1', label: 'Bateria' },
    { value: 'opcion2', label: 'Pantalla' },
    { value: 'opcion3', label: 'Sistema Operativo' },
    { value: 'opcion4', label: 'Controladores'},
    { value: 'opcion5', label: 'Programas' },
    { value: 'opcion6', label: 'Seguridad' },
    { value: 'opcion7', label: 'Pruebas de rendimiento (benchmarking)' },
    { value: 'opcion8', label: 'Temperatura' },
    { value: 'opcion9', label: 'Camaras y sensores' },
    { value: 'opcion10', label: 'Teclado y touchpad' },
    { value: 'opcion10', label: 'Conexiones' }
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

