import { EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';

import * as fromRoot from '..';
import { Note } from '../../notes/models/note';

export interface EntitiesState {
  entityCache: {
    Note: EntityState<Note>
  };
}

export const getNotes = createSelector(
  (s: EntitiesState) => s.entityCache,
  (entities) => entities.Note
);

export const getById = createSelector(
  getNotes,
  fromRoot.getRouterState,
  (notes, router) => notes.entities[router.state.params.guid]
);
