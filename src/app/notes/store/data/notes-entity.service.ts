import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceFactory
} from 'ngrx-data';

import { Note } from '../../models/note';
import { NotesModule } from '../../notes.module';

@Injectable()
export class NotesEntityService extends EntityCollectionServiceBase<Note> {
  constructor(entityServiceFactory: EntityCollectionServiceFactory) {
    super('Note', entityServiceFactory);
  }
}
