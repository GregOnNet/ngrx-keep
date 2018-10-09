import { EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { EntityMetadataMap } from 'ngrx-data';

import * as fromRoot from '../../../store';
import * as fromNotes from '../reducers';
import { Note } from '../../models/note';

export const entityMetadata: EntityMetadataMap = {
  Note: {
    selectId: (note: Note) => note.guid
  }
};

export const pluralNames = { Note: 'Notes' };

export interface EntitiesState {
  entityCache: {
    Note: EntityState<Note>;
  };
}

export const getNotes = createSelector(
  (s: EntitiesState) => s.entityCache,
  entities => entities.Note
);

export const getById = createSelector(
  // getNotes,
  fromNotes.entities,
  fromRoot.getRouterState,
  (notes, router) => notes[router.state.params.guid]
);
