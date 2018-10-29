import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import{ AppService } from './app.service';
import { ListMedicosComponent } from './medicos/list-medicos/list-medicos.component';
import { NewMedicoComponent } from './medicos/new-medico/new-medico.component';

import{MedicoService} from './medicos/medico.service';
import{routes} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ShowMedicoComponent } from './medicos/show-medico/show-medico.component';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';
import {ApiService} from './api.service';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListMedicosComponent,
    NewMedicoComponent,
    ShowMedicoComponent,
    EditMedicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MedicoService, AppService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

