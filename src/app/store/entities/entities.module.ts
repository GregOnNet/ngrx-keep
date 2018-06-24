import { NgModule } from '@angular/core';
import { EntityDataService, EntityMetadataMap, HttpUrlGenerator, NgrxDataModule } from 'ngrx-data';

import { JsonUrlGenerator } from './json-url.generator';
import { NotesDataService } from './notes-data.service';
import { Note } from '../../notes/models/note';

export const entityMetadata: EntityMetadataMap = {
  Note: {
    selectId: (note: Note) => note.guid
  }
};

export const pluralNames = { Note: 'Notes' };

@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata,
      pluralNames: pluralNames
    })
  ],
  providers: [
    {
      provide: HttpUrlGenerator,
      useClass: JsonUrlGenerator
    }
  ],
  declarations: []
})
export class EntitiesModule {
  constructor(
    entityDataService: EntityDataService,
    noteDataService: NotesDataService,
  ) {
    // Register custom EntityDataServices
    entityDataService.registerService('Note', noteDataService); // <-- register it
  }
}
