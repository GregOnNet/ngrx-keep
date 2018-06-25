import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, ActionHandlers } from 'ngrx-additions';

import { Note } from '../../models/note';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';

export interface State extends EntityState<Note> {}

const notes = createEntityAdapter<Note>({
  selectId: note => note.guid
});

const initialState = notes.getInitialState();
const selectors = notes.getSelectors();

const actionHandlers: ActionHandlers<State> = {
  [NotesActionTypes.CreateNote]: notes.addOne,
  [NotesActionTypes.LoadNotesSuccessful]: notes.addMany
};

export function reducer(state = initialState, action: NotesActions): State {
  return createReducer<State>(actionHandlers)(state, action);
}

export const {
  selectAll: all,
  selectEntities: entities,
  selectIds: guids,
  selectTotal: total
} = selectors;
