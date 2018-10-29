import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {ListMedicosComponent} from './medicos/list-medicos/list-medicos.component';
import {NewMedicoComponent} from './medicos/new-medico/new-medico.component';
import { ShowMedicoComponent } from './medicos/show-medico/show-medico.component';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';


export const routes: Routes = [
  { path: 'medicos', component: ListMedicosComponent },
  { path: 'medicos/new', component: NewMedicoComponent },
  { path: 'medicos/:id', component: ShowMedicoComponent},
  {path: 'medicos/edit/:id', component: EditMedicoComponent}
];