import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



import { TypeUserComponent } from './components/type-user/type-user.component';
import { BitacoraCComponent } from './components/bitacora-c/bitacora-c.component';
import { authGuard } from './guards/auth.guard';
import { TecnicoComponent } from './components/tecnico/tecnico.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RegistroequiposComponent } from './components/registroequipos/registroequipos.component';
import { CheckportatilComponent } from './components/checkportatil/checkportatil.component';
import { CheckmesaComponent } from './components/checkmesa/checkmesa.component';
import { CheckcelularComponent } from './components/checkcelular/checkcelular.component';
import { ObservacionesComponent } from './components/observaciones/observaciones.component';

const routes: Routes = [{
  path: 'observaciones',
  component: ObservacionesComponent
},
  {
  path: 'celular',
  component: CheckcelularComponent

},
  {
  path:'mesa',
  component: CheckmesaComponent

},
  
  {

  path: 'portatil',
  component: CheckportatilComponent
},
  
  {
  path: '',
  component: RegistroequiposComponent,

},
{
  path : 'agenda',
  component: AgendaComponent,

},
  {
path:'bitacoracliente',
component: BitacoraCComponent,
},
  {
    path: 'typeUser',
    component: TypeUserComponent,



  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tecnico',
    component: TecnicoComponent
  },


  {
    path: 'register',
    component: RegisterComponent,
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
