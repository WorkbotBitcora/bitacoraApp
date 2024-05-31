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


const routes: Routes = [
  {
    path:'',
    component:BitacoraComponent
  },
{
  path:'descripcionCelular',//descripcionCelular
  component:DescripcionCelularComponent
},
{
  path:'descripcionMesa',
  component:DescripcionMesaComponent
},
{
  path:'descripcionPortatil',
  component:DescripcionPortatilComponent
},
  {
  path: 'checkportatil',
  component: CheckportatilComponent
},


  {
  path: 'registroEquipo',
  component: RegistroequiposComponent

},
{
  path : 'agendaCom',
  component: AgendaComponent,

},
  {
path:'bitacoraCliente',

component: BitacoraCComponent,
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
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
