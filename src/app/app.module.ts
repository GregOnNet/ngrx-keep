import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducers } from './store';
import { CustomSerializer } from './store/router/custom-serializer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/notes',
        pathMatch: 'full'
      },
      {
        path: 'notes',
        loadChildren: './notes/notes.module#NotesModule'
      }
    ])
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
