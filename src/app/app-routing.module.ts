import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { SitesComponent } from './components/sites/sites.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MiscelaneousComponent } from './components/miscelaneous/miscelaneous.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';


const routes: Routes = [
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
    component: NotFoundComponent
  },
  {
    path: '**',
    component: MiscelaneousComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
