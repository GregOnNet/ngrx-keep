import { NoteCategory } from './note-category';

export class Note {
  constructor(
    public guid: string,
    public title = '',
    public text = '',
    public category = new NoteCategory()
  ) {}
}
