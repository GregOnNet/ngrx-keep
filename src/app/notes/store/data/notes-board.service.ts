import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceFactory
} from 'ngrx-data';

import { Note } from '../../models/note';

@Injectable()
export class NotesBoard extends EntityCollectionServiceBase<Note> {
  constructor(entityServiceFactory: EntityCollectionServiceFactory) {
    super('Note', entityServiceFactory);
  }
}
