import { Component, Input } from '@angular/core';

import { Guid } from '../../../shared/lib/guid.service';
import { Note } from '../../models/note';

@Component({
  selector: 'nt-note-card',
  template: `
    <mat-card>
      <mat-card-title>{{ note.title }}</mat-card-title>
      <mat-card-content>
        {{ note.text }}
      </mat-card-content>
      <mat-card-content>
      <nt-color-tag
        [color]="note.category.color"
        [text]="note.category.name">
      </nt-color-tag>
      </mat-card-content>
      <mat-card-actions>
        <ng-content></ng-content>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note: Note;

  constructor(guid: Guid) {
    this.note = new Note(guid.generate());
  }
}
