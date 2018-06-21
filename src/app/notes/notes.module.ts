import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('notes', fromNotes.reducers, { metaReducers: fromNotes.metaReducers })
  ],
  declarations: []
})
export class NotesModule { }
