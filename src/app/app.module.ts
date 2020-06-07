import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleComponent } from './components/example/example.component';
import { SitesComponent } from './components/sites/sites.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MiscelaneousComponent } from './components/miscelaneous/miscelaneous.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    SitesComponent,
    NotFoundComponent,
    MiscelaneousComponent,
    VistaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }