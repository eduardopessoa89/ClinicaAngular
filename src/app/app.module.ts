import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListMedicosComponent } from './medicos/list-medicos/list-medicos.component';
import { NewMedicoComponent } from './medicos/new-medico/new-medico.component';

import{MedicoService} from './medicos/medico.service';
import{routes} from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListMedicosComponent,
    NewMedicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

