import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
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
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    AppRoutingModule
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
