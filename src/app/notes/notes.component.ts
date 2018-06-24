import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../store';
import * as fromNotes from './store';
import { NotesEntityService } from '../store/entities/notes-entity.service';

@Component({
  selector: 'nt-notes',
  template: `<router-outlet></router-outlet>`
})
export class NotesComponent {
  constructor(
    private store: Store<fromRoot.State>,
    private notes: NotesEntityService
  ) {
    this.notes.getAll();
  }
}
