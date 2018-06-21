import { Action } from '@ngrx/store';

import { Note } from '../../models/note';

export enum NotesActionTypes {
  LoadAllNotes = '[Notes] Load Notes',
  LoadNotesSuccessful = '[Notes] All Notes successfully loaded',
  CreateNote = '[Notes] Create new Note'
}

export class LoadAllNotes implements Action {
  readonly type = NotesActionTypes.LoadAllNotes;
}

export class LoadNotesSuccessful implements Action {
  readonly type = NotesActionTypes.LoadNotesSuccessful;

  constructor(public payload: Note[]) {}
}

export class CreateNote implements Action {
  readonly type = NotesActionTypes.CreateNote;

  constructor(public payload: Note) {}
}

export type NotesActions = LoadAllNotes | LoadNotesSuccessful | CreateNote;
