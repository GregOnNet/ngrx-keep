import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import * as fromNotes from './notes.reducer';
import * as fromRoot from '../../../store';

export interface NotesState {
  collection: fromNotes.State;
}

export interface State {
  notes: NotesState;
}

export const reducers: ActionReducerMap<NotesState> = {
  collection: fromNotes.reducer
};

export const metaReducers: MetaReducer<NotesState>[] = !environment.production
  ? []
  : [];

const getNotes = createFeatureSelector<NotesState>('notes');

const getNoteCollection = createSelector(getNotes, notes => notes.collection);

export const all = createSelector(getNoteCollection, fromNotes.all);
export const entities = createSelector(
  getNoteCollection,
  notes => notes.entities
);

export const currentDetails = createSelector(
  getNoteCollection,
  fromRoot.getRouterState,
  (notes, router) => notes.entities[router.state.params.guid]
);
