import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IBitacora } from 'src/app/interfaces/bitacora';
import { BitacoraService } from 'src/app/services/bitacora/bitacora.service';

@Component({
  selector: 'app-agenda-por-cliente',
  templateUrl: './agenda-por-cliente.component.html',
  styleUrls: ['./agenda-por-cliente.component.css']
})
export class AgendaPorClienteComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bitacoraService: BitacoraService,
    private msgService: MessageService
  ) { }

  bitacoraItems: IBitacora[] = [];


  @Output() userTypeChanged = new EventEmitter<string>();

  typeUserForm = this.fb.group({
    userTypeName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  });

  ngOnInit() {
    this.bitacoraItems = [];
    const id = localStorage.getItem('userId') || "";
    this.bitacoraService.getBitacorasByUSer(id).subscribe(
      (response: IBitacora[]) => {
        if (response) {
          this.bitacoraItems = response;
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'No se lograron consultar las bitacoras' });
        }
      },
      (error) => {

        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Algo salió mal' });
      }
    );
  }

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

  goToRouteObservacion(bitacora: IBitacora) {

    this.router.navigate(['/route1']);
  }

  goToRouteRegresar() {
    this.router.navigate(['/usuario']);
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
