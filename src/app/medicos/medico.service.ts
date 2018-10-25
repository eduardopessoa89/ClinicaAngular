import { Injectable } from '@angular/core';

import { Medico } from './medico';

@Injectable()
export class MedicoService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for book's
  medicos: Medico[] = [];

  constructor() {
  }

  // Simulate POST /books
  add(medico: Medico) {
    if (!medico.id) {
      medico.id = ++this.lastId;
    }
    this.medicos.push(medico);
  }

  // Simulate DELETE /books/:id
  delete(id: number) {
    this.medicos = this.medicos
      .filter(todo => todo.id !== id);
  }

  // Simulate PUT /books/:id
  update(newMedico: Medico): Medico {
    const oldMedico = this.getById(newMedico.id);
    if (!oldMedico) {
      return;
    }
    Object.assign(oldMedico, newMedico);
    return oldMedico;
  }

  // Simulate GET /books
  getAll(): Medico[] {
    return this.medicos;
  }

  // Simulate GET /books/:id
  getById(id: number): Medico {
    return this.medicos
      .filter(todo => todo.id === id)
      .pop();
  }
}