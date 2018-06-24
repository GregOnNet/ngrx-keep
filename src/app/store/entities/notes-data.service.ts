import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, Logger } from 'ngrx-data';

import { Note } from '../../notes/models/note';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesDataService extends DefaultDataService<Note> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger
  ) {
    super('Note', http, httpUrlGenerator, { root: 'assets' });
    logger.log('Created custom Note EntityDataService');
  }

  getAll(): Observable<Note[]> {
    return super
      .getAll()
      .pipe(tap(console.log));
  }
}
