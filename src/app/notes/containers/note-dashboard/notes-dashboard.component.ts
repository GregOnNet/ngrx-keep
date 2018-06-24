import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NotesEntityService } from '../../../store/entities/notes-entity.service';
import { Note } from '../../models/note';
import * as fromNotes from '../../store';

@Component({
  selector: 'nt-notes-dashboard',
  template: `
    <nt-note-creator (create)="dispatchNewNote($event)"></nt-note-creator>
    <nt-note-card
      [note]="note"
      *ngFor="let note of notes$ | async">
      <a
        mat-button
        [routerLink]="['note', note.guid]">
        DETAILS
      </a>
    </nt-note-card>
  `,
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent {
  notes$: Observable<Note[]>;

  constructor(
    private store: Store<fromNotes.State>,
    private notes: NotesEntityService
  ) {
    this.notes$ = this.notes.entities$;
  }

  dispatchNewNote(note: Note) {
    this.store.dispatch(new fromNotes.CreateNote(note));
  }
}
