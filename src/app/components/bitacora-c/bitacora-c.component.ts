import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/cliente/cliente.service';
import { IFData } from 'src/app/interfaces/ifdata';
import { IAgendaResponse } from 'src/app/interfaces/agendaResponse';

@Component({
  selector: 'app-bitacora-c',
  templateUrl: './bitacora-c.component.html',
  styleUrls: ['./bitacora-c.component.css']
})
export class BitacoraCComponent implements OnInit {
  nombreUsuario: string = '';
  biteClientForm = this.fb.group({
    desc: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]]
  });

  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem('username') || "SIN NOMBRE";
  }

  todayDate: string;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private messageService: MessageService,
    private router: Router
  ) {
    const currentDate = new Date();
    this.todayDate = currentDate.toLocaleDateString();
  }

  get descripcion() {
    return this.biteClientForm.controls['desc'];
  }

  onSubmit() {
    const { desc } = this.biteClientForm.value;
    const formData: IFData = {
      idUser: Number(localStorage.getItem('userId')),
      desc: desc as string
    }
    this.clientService.agendar(formData).subscribe(
      (response: IAgendaResponse) => {
        if (response) {
          console.log(response)
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales inválidas' });
        }
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Algo salió mal' });
      }
    );

  }

  redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['/otra-pagina']);
  }
}
