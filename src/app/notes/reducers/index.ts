import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import * as fromNotes from './notes.reducer';
import { getRouterState } from '../../store';

export interface State {
  note: any;
}

export const reducers: ActionReducerMap<State> = {
  note: fromNotes.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

const getNotes = createFeatureSelector('notes');
export const getCurrentNote = createSelector(
  getNotes,
  getRouterState,
  (notes: any, router) => notes.note.entities[router.state.params.id]
);
