import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from 'ngrx-data';

import { Note } from '../../notes/models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesDataService extends DefaultDataService<Note> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Note', http, httpUrlGenerator, { root: 'assets' });
  }
}
