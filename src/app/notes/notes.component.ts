import { Component } from '@angular/core';

import { NotesBoard } from '../notes/store/data/notes-board.service';

import * as fromNotes from './store';
import { Store } from '@ngrx/store';
import { LoadAllNotes } from './store';

@Component({
  selector: 'nt-notes',
  template: `<router-outlet></router-outlet>`
})
export class NotesComponent {
  constructor(
    private store: Store<fromNotes.State>,
    private notes: NotesBoard
  ) {
    this.store.dispatch(new LoadAllNotes());
    // this.notes.getAll();
  }
}
