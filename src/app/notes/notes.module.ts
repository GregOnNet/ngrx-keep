import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteCreatorComponent } from './components/note-creator/note-creator.component';
import { NotesDashboardComponent } from './containers/note-dashboard/notes-dashboard.component';
import { NoteDetailsComponent } from './containers/note-details/note-details.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import * as fromNotes from './store';
import { SharedModule } from '../shared/shared.module';

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

    SharedModule,

    NotesRoutingModule
  ],
  declarations: [
    NotesComponent,
    NotesDashboardComponent,
    NoteDetailsComponent,
    NoteCardComponent,
    NoteCreatorComponent
  ]
})
export class NotesModule {}
