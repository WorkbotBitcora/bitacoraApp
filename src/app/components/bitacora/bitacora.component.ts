import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent {

  bitacoraItems = [
    { fechaInicio: '02/08/2021', fechaFin: '02/09/2021', encargado: 'Andres', nombreCliente: 'Pedro', tipoEquipo: 'Portatil' },
    // Agrega más elementos aquí
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  @Output() userTypeChanged = new EventEmitter<string>();

  typeUserForm = this.fb.group({
    userTypeName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  });

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
  goToRouteObservacion() {
  this.router.navigate(['/route1']);
  }

  goToRouteRegresar() {
  this.router.navigate(['/route2']);
  }

  goToRouteCerrar() {
  this.router.navigate(['/route3']);
  }

  verObservaciones(item: any) {
    console.log('Observaciones:', item.observaciones);
    // Implementa la lógica para mostrar las observaciones
  }

  enviar(userType: string) {
    // Realiza acciones con el tipo de usuario (por ejemplo, envío al servidor)
    console.log("Tipo de usuario enviado:", userType);
    // this.authService.enviarTipoUsuario(userType).subscribe(...);
    this.router.navigate(['login']);
  }
}
