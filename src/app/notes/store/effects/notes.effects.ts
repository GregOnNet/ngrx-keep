import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { NotesService } from '../../lib/notes.service';
import {
  LoadNotesSuccessful,
  NotesActionTypes
} from '../actions/notes.actions';

@Injectable()
export class NotesEffects {
  @Effect()
  loadAll = this.actions$.pipe(
    ofType(NotesActionTypes.LoadAllNotes),
    switchMap(() => this.notes.getAll()),
    map(notes => new LoadNotesSuccessful(notes))
  );

  constructor(private actions$: Actions, private notes: NotesService) {}
}
