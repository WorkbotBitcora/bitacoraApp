import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IBitacora } from 'src/app/interfaces/bitacora';
import { IDataChek } from 'src/app/interfaces/datachekCredentials';
import { BitacoraService } from 'src/app/services/bitacora/bitacora.service';

@Component({
  selector: 'app-checkcelular',
  templateUrl: './checkcelular.component.html',
  styleUrls: ['./checkcelular.component.css']
})
export class CheckcelularComponent {
  bitacoraItems: IBitacora[] = [];
  listData: IDataChek[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bitacoraService: BitacoraService,
    private msgService: MessageService,
    
  ) { }
  registerChekCelularForm = this.fb.group({
    chek1: ['',],
    chek2: ['',],
    chek3: ['',],
    chek4: ['',],
    chek5: ['',],
    chek6: ['',],
    chek7: ['',],
  })

  get chek1() {
    return this.registerChekCelularForm.controls['chek1'];
  }
  get chek2() {
    return this.registerChekCelularForm.controls['chek2'];
  }
  get chek3() {
    return this.registerChekCelularForm.controls['chek3'];
  }
  get chek4() {
    return this.registerChekCelularForm.controls['chek4'];
  }
  get chek5() {
    return this.registerChekCelularForm.controls['chek5'];
  }
  get chek6() {
    return this.registerChekCelularForm.controls['chek6'];
  }
  get chek7() {
    return this.registerChekCelularForm.controls['chek7'];
  }
  
  ngOnInit() {
    this.bitacoraItems = [];
     this.bitacoraService.getBitacoras().subscribe(
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
    const varidRevison : string | null  = localStorage.getItem('idRevision')
    const idRevision = JSON.parse(varidRevison!);

    for(let i =0 ; i<this.bitacoraItems.length; i++){
      if(this.bitacoraItems[i].revision.id === idRevision){
        localStorage.setItem('bitacora', JSON.stringify(this.bitacoraItems[i]))
      }
    }
   }

   submitDetails() {
    const postData = { ...this.registerChekCelularForm.value};
    
    for(let i =0 ; i< 7; i++){
      
    }
    console.log(postData)
  }


 redirectToOtraPagina() {
    // Redirige a otra página utilizando el enrutamiento de Angular
    this.router.navigate(['observaciones']);
  }
}
