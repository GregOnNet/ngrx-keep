import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { Note } from '../../models/note';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { Action, ActionReducerMap } from '@ngrx/store';

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

export interface ActionWithPayload {
  type: string;
  payload?: any;
}

export interface ActionHandlers<TState> {
  [actionType: string]: (payload, state: TState) => TState;
}

const actionHandlers: ActionHandlers<State> = {
  [NotesActionTypes.CreateNote]: notes.addOne,
  [NotesActionTypes.LoadNotesSuccessful]: notes.addMany
};

export function reducer(state = initialState, action: NotesActions): State {
  return createReducer(actionHandlers)(state, action);
}

export function createReducer<TState>(
  handlers: ActionHandlers<TState>
): (state: TState, action: ActionWithPayload) => TState {
  return (state: TState, action: ActionWithPayload) => {
    return !!handlers[action.type]
      ? handlers[action.type](action.payload, state)
      : state;
  };
}
