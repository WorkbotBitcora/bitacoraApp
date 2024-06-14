import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IBitacora } from 'src/app/interfaces/bitacora';
import { IResponseEquipo } from 'src/app/interfaces/equipoResponse';
import { registerEquipoCredentials } from 'src/app/interfaces/regirterEquipoCredentials';
import { BitacoraService } from 'src/app/services/bitacora/bitacora.service';

@Component({
  selector: 'app-registroequipos',
  templateUrl: './registroequipos.component.html',
  styleUrls: ['./registroequipos.component.css']
})
export class RegistroequiposComponent implements OnInit{
  nombreCliente: string = "";
  idRevision: number = 0;
  
  registerEquipoForm = this.fb.group({
    marca: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    tipoEquipo: ['',],
  })
  get marca() {
    return this.registerEquipoForm.controls['marca'];
  }

  get tipoEquipo() {
    return this.registerEquipoForm.controls['tipoEquipo'];
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bitacoraService: BitacoraService,
    private msgService: MessageService,
    
  ) { }

  ngOnInit(): void {

    const jsonString : string | null  = localStorage.getItem('bitacora');
    const jsonObject = JSON.parse(jsonString!);
    this.nombreCliente=jsonObject.usuario.nombre;
    this.idRevision=jsonObject.revision.id;
    localStorage.setItem('idRevision', JSON.stringify(this.idRevision) )
  }


  submitDetails() {
    const postData = { ...this.registerEquipoForm.value};
    console.log(postData)

    this.bitacoraService.saveEquipo(postData as registerEquipoCredentials , this.idRevision).subscribe(
      
      (response: IResponseEquipo) => {
        
        console.log(response)
        this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });

        this.router.navigate(postData.tipoEquipo === '2' ? ['/celular'] : postData.tipoEquipo === '3' ? ['/portatil'] : postData.tipoEquipo === '4' ? ['/mesa'] : ['/registroequipo']);
      },
      error => {
        console.log(error)
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )


  }

}
