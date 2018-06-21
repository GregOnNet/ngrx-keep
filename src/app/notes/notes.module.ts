import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import * as fromNotes from './reducers';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotesComponent } from './notes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotesComponent,
        children: [
          {
            path: 'welcome/:id',
            component: WelcomeComponent
          }
        ]
      }
    ]),
    StoreModule.forFeature('notes', fromNotes.reducers, {
      metaReducers: fromNotes.metaReducers
    })
  ],
  declarations: [WelcomeComponent, NotesComponent]
})
export class NotesModule {}
