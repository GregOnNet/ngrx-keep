import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
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
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
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
