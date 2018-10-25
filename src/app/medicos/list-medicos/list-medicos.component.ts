import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import {Medico} from '../medico';

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrls: ['./list-medicos.component.css']
})

export class ListMedicosComponent {

  constructor(private service: MedicoService) { }

  get medicos(): Medico[] {
    return this.service.getAll();
  }
}