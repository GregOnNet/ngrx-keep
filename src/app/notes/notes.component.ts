import { Component } from '@angular/core';

import { NotesBoard } from '../notes/store/data/notes-board.service';

@Component({
  selector: 'nt-notes',
  template: `<router-outlet></router-outlet>`
})
export class NotesComponent {
  constructor(private notes: NotesBoard) {
    this.notes.getAll();
  }
}
