import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TypeUserComponent } from './components/type-user/type-user.component';
import { BitacoraCComponent } from './components/bitacora-c/bitacora-c.component';
import { authGuard } from './guards/auth.guard';
import { TecnicoComponent } from './components/tecnico/tecnico.component';
import { DescripcionCelularComponent } from './components/descripcion-celular/descripcion-celular.component';
import { DescripcionMesaComponent } from './components/descripcion-mesa/descripcion-mesa.component';
import { DescripcionPortatilComponent } from './components/descripcion-portatil/descripcion-portatil.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RegistroequiposComponent } from './components/registroequipos/registroequipos.component';
import { CheckportatilComponent } from './components/checkportatil/checkportatil.component';

import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { CheckcelularComponent } from './components/checkcelular/checkcelular.component';
import { CheckmesaComponent } from './components/checkmesa/checkmesa.component';
import { ObservacionesComponent } from './components/observaciones/observaciones.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  {
path:'',

component: BitacoraCComponent,
},
  {
    path:'bitacora',
    component:BitacoraComponent
  },
{
  path:'descripcionCelular',//descripcionCelular
  component:DescripcionCelularComponent





const routes: Routes = [{

  path: 'observaciones',
  component: ObservacionesComponent
},
{
  path: 'mesa',
  component: CheckmesaComponent

},
{
  path: 'celular',
  component: CheckcelularComponent
},
{
  path: 'portatil',
  component: CheckportatilComponent
},

{
  path: 'descripcionCelular',//descripcionCelular
  component: DescripcionCelularComponent
},
{
  path: 'descripcionMesa',
  component: DescripcionMesaComponent
},
{
  path: 'descripcionPortatil',
  component: DescripcionPortatilComponent
},
{
  path: 'checkportatil',
  component: CheckportatilComponent
},


{
  path: 'nombre',
  component: RegistroequiposComponent

},
{
  path: 'agendaCom',
  component: AgendaComponent,

},


  {
    path: 'typeUser',
    component: TypeUserComponent,
    pathMatch: 'full',


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
  path: 'bitacoraCliente',

  component: BitacoraCComponent,
},
{
  path: '',
  component: TypeUserComponent,
  pathMatch: 'full',
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
  path:'usuario' , 
  component: ClienteComponent


},

{
  path: 'register',
  component: RegisterComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }