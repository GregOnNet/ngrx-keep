import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store';
import * as fromNotes from './store';

@Component({
  selector: 'nt-notes',
  template: `<router-outlet></router-outlet>`
})
export class NotesComponent {
  constructor(private _store: Store<fromRoot.State>) {
    this._store.dispatch(new fromNotes.LoadAllNotes());
  }
}
