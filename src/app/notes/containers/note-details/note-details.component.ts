import { Component } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NotesEntityService } from '../../../store/entities/notes-entity.service';
import { Note } from '../../models/note';
import * as fromNotes from '../../store';

@Component({
  selector: 'nt-note-details',
  template: `
    <section class="heading">
      <h1 class="mat-h1">Details</h1>
    </section>
    <ng-container *ngIf="note$ | async as note">
      <nt-note-card [note]="note"></nt-note-card>
    </ng-container>
  `,
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {
  note$: Observable<Note>;

  constructor(
    private store: State<fromNotes.State>
  ) {
    this.note$ = this.store.pipe(select(fromNotes.currentDetails));
  }
}
