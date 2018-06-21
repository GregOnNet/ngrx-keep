import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromNotes from '../store';

@Component({
  selector: 'nt-welcome',
  template: `
    <p>
      welcome works!
    </p>
  `,
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(private store: Store<any>) {
    // this.store.subscribe(console.log);

    this.store.pipe(select(fromNotes.getCurrentNote)).subscribe(console.log);
   }
}
