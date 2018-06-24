import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceFactory
} from 'ngrx-data';

import { Note } from '../../notes/models/note';

@Injectable({ providedIn: 'root' })
export class NotesEntityService extends EntityCollectionServiceBase<Note> {
  constructor(entityServiceFactory: EntityCollectionServiceFactory) {
    super('Note', entityServiceFactory);
  }
}
