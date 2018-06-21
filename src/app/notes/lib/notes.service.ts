import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note';

import { map } from 'rxjs/operators';
import { NoteCategory } from '../models/note-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Note[]> {
    return this.http
      .get<any[]>('/assets/notes.json')
      .pipe(
        map(notesRaw =>
          notesRaw.map(
            noteRaw =>
              new Note(
                noteRaw.guid,
                noteRaw.title,
                noteRaw.text,
                new NoteCategory(noteRaw.category.name, noteRaw.category.color)
              )
          )
        )
      );
  }
}
