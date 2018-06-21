import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { Note } from '../../models/note';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';

export interface State extends EntityState<Note> {}

const notes = createEntityAdapter<Note>({
  selectId: note => note.guid
});

export const {
  selectAll: all,
  selectEntities: entities,
  selectIds: guids,
  selectTotal: total
} = notes.getSelectors();

const initialState = notes.getInitialState();

export function reducer(state = initialState, action: NotesActions): State {
  switch (action.type) {
    case NotesActionTypes.CreateNote: {
      return notes.addOne(action.payload, state);
    }

    case NotesActionTypes.LoadNotesSuccessful: {
      return notes.addMany(action.payload, state);
    }

    default: {
      return state;
    }
  }
}
