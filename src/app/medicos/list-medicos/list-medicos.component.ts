import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import {Medico} from '../medico';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrls: ['./list-medicos.component.css']
})

export class ListMedicosComponent {

  message:string;

  constructor(private service: MedicoService, private router: Router) { }

  get medicos(): Medico[] {
    return this.service.getAll();
  }

  show(id){
    this.service.clearMessage();
    this.router.navigate(['/medicos', id]);
    return false;
  }

  edit(id){
    this.service.clearMessage();
    this.router.navigate(['/medicos', id, 'edit']);
    return false;
  }

  destroy(id){
    if(confirm('Tem certeza que deseja deletar esse Medico?')){
      this.service.delete(+id);
      this.service.changeMessage('Médico foi deletado com sucesso!');
    }
    return false;
  }
}