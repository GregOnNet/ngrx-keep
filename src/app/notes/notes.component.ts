import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nt-notes',
  template: `
    <p>
      notes works!
    </p>
    <a routerLink="welcome/welcome">Welcome</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
