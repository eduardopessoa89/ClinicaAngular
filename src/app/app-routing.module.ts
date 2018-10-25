import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListMedicosComponent} from './medicos/list-medicos/list-medicos.component';
import {NewMedicoComponent} from './medicos/new-medico/new-medico.component';


export const routes: Routes = [
  { path: 'medicos', component: ListMedicosComponent },
  { path: 'medicos/new', component: NewMedicoComponent }
];