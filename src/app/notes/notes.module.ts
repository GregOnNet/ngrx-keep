import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityDataService, HttpUrlGenerator, NgrxDataModule } from 'ngrx-data';

import { SharedModule } from '../shared/shared.module';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteCreatorComponent } from './components/note-creator/note-creator.component';
import { NotesDashboardComponent } from './containers/note-dashboard/notes-dashboard.component';
import { NoteDetailsComponent } from './containers/note-details/note-details.component';
import { JsonUrlGenerator } from './lib/json-url.generator';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import * as fromNotes from './store';
import { NotesDataService } from './store/data/notes-data.service';
import { NotesEntityService } from './store/data/notes-entity.service';
import { NotesEffects } from './store/effects/notes.effects';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

    ReactiveFormsModule,

    StoreModule.forFeature('notes', fromNotes.reducers, {
      metaReducers: fromNotes.metaReducers
    }),
    EffectsModule.forFeature([NotesEffects]),

    NgrxDataModule.forRoot({
      entityMetadata: fromNotes.entityMetadata,
      pluralNames: fromNotes.pluralNames
    }),

    SharedModule,

    NotesRoutingModule
  ],
  declarations: [
    NotesComponent,
    NotesDashboardComponent,
    NoteDetailsComponent,
    NoteCardComponent,
    NoteCreatorComponent
  ],
  providers: [
    {
      provide: HttpUrlGenerator,
      useClass: JsonUrlGenerator
    },
    NotesDataService,
    NotesEntityService
  ]
})
export class NotesModule {
  constructor(
    entityDataService: EntityDataService,
    noteDataService: NotesDataService
  ) {
    entityDataService.registerService('Note', noteDataService);
  }
}
