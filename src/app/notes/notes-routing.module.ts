import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotesComponent } from './notes.component';
import { NotesDashboardComponent } from './containers/note-dashboard/notes-dashboard.component';
import { NoteDetailsComponent } from './containers/note-details/note-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NotesComponent,
        children: [
          {
            path: '',
            component: NotesDashboardComponent
          },
          {
            path: 'note/:guid',
            component: NoteDetailsComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
