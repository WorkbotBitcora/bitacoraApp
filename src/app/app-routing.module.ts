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
import { FormsModule } from '@angular/forms';
import { AgendaPorClienteComponent } from './components/agenda-por-cliente/agenda-por-cliente.component';
import { AgendacompletadasComponent } from './components/agendacompletadas/agendacompletadas.component';


const routes: Routes = [{
  //OBSERVACIONES ESTO FINALIZA LA REVISION 
  path: 'observaciones',
  component: ObservacionesComponent
},
{
  path: 'mesa',
  component: CheckmesaComponent

},
{
  //ESTA ES LA AGENDA DE EL TECNICO PARA REVISAR 
  path:'bitacora',
  component:BitacoraComponent
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
  //aqui trae  la lista de bitacoras que tiene un cliente
  path: 'agendaporcliente',
  component: AgendaPorClienteComponent
},
/*
NOTA TOCA VOLVER A HACER ESTO !!!!!!!!!
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
*/

{
  //esta es el componente de actualizacion del equipo
  path: 'registroequipo',
  component: RegistroequiposComponent

},
{
  //estas son la visata de las agendas completadas 
  path: 'agendacom',
  component: AgendacompletadasComponent,

},

/*
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
    //
    path: 'tecnico',
    component: TecnicoComponent
  },*/

{
  //esta es generar agenda desde el cliente 
  path: 'bitacoracliente',
  component: BitacoraCComponent,
},
{
  //este es el inicio de la aplicacion
  path: '',
  component: TypeUserComponent,
  pathMatch: 'full',
},
{
  //este es el login
  path: 'login',
  component: LoginComponent,
},
{
  //estas son la opciones del tecnico
  path: 'tecnico',
  component: TecnicoComponent
},
{
  //esta son las opciones del cliente 
  path:'usuario' , 
  component: ClienteComponent


},

{
  //esta es la pesta;a de registro
  path: 'register',
  component: RegisterComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }