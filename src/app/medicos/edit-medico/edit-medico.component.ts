import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MedicoService } from '../medico.service';
import { Identifiers, NullAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-edit-medico',
  templateUrl: './edit-medico.component.html',
  styleUrls: ['./edit-medico.component.css']
})
export class EditMedicoComponent implements OnInit {

  private medico: Medico = null;
  private id: null;
  private crm: null;
  private sala: null;
  private plantao: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicoService: MedicoService) {}

  ngOnInit() {
    this.route.params.subscribe(params =>{
      const id = params['id'];
      if(id){
        this.medicoService.getById(id).subscribe((medico:any) =>{
          if(medico){
            this.medico = medico;
            this.id = id;
            if(false){
              this.plantao = false;
            }
            else if(true){
              this.plantao = true;
            }
          }
        })
      }
      else{
        console.log(`Medico with id '${id}' not found, returning to list`);
            this.router.navigate(['/medicos']);
      }
    });
  }

  onSubmit(form: any) {
    this.medico.nome = form.name;
    this.medico.especialidade = form.especialidade;
    this.medico.cpf = form.cpf;
    this.medico.crm = form.crm;
    this.medico.salaDeAtendimento = form.salaDeAtendimento;
    this.medico.salario = form.salario;
    this.medicoService.update(this.medico, this.id).subscribe((result) => {
      console.log(result);
      alert('Medico atualizado!');
      this.router.navigate(['/medicos/', result['id']]);
    }, error => {alert("Um erro ocorreu, tente novamente")}
    )
  }
}

