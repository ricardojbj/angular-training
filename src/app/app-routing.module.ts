import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { SitesComponent } from './components/sites/sites.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MiscelaneousComponent } from './components/miscelaneous/miscelaneous.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { AppComponent } from './app.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'vistageneral',
    component: VistaGeneralComponent
  },
  {
    path: 'vistaprincipal',
    component: VistaPrincipalComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'sites',
    component: SitesComponent
  },
  {
    path: '',
    component: MiscelaneousComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
