import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import * as fromNotes from './notes.reducer';
import * as fromRoot from '../../../store';

export interface State {
  collection: fromNotes.State;
}

export const reducers: ActionReducerMap<State> = {
  collection: fromNotes.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];


const getNotes = createFeatureSelector<State>('notes');

const getNoteCollection = createSelector(getNotes, notes => notes.collection);

export const all = createSelector(getNoteCollection, fromNotes.all);

export const currentDetails = createSelector(
  getNoteCollection,
  fromRoot.getRouterState,
  (notes, router) => notes.entities[router.state.params.guid]
);
