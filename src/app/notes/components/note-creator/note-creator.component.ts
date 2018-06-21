import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Note } from '../../models/note';
import { Guid } from '../../../shared/lib/guid.service';

@Component({
  selector: 'nt-note-creator',
  template: `
    <mat-card>
      <mat-card-title>Note</mat-card-title>
      <mat-card-content>
        <form [formGroup]="noteForm">
          <mat-form-field>
            <input matInput formControlName="title" placeholder="Title">
          </mat-form-field>
          <mat-form-field>
            <textarea matInput formControlName="text" placeholder="Text"></textarea>
          </mat-form-field>

          <button
            [disabled]="noteForm.invalid"
            (click)="emitCreate()"
            mat-raised-button
            color="primary"
            type="button">
            Create
          </button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./note-creator.component.scss']
})
export class NoteCreatorComponent {
  noteForm: FormGroup;

  @Output() create = new EventEmitter<Note>();

  constructor(private fb: FormBuilder, private guid: Guid) {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required]],
      text: ['']
    });
  }

  emitCreate() {
    const { title, text } = this.noteForm.value;
    const note = new Note(this.guid.generate(), title, text);

    this.noteForm.reset();
    this.create.emit(note);
  }
}
