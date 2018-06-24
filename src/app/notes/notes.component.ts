import { Component } from '@angular/core';

import { NotesEntityService } from '../notes/store/data/notes-entity.service';

@Component({
  selector: 'nt-notes',
  template: `<router-outlet></router-outlet>`
})
export class NotesComponent {
  constructor(private notes: NotesEntityService) {
    this.notes.getAll();
  }
}
