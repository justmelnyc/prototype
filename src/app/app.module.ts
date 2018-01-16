import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app.routes'
import { AppComponent } from './app.component'

///// Start FireStarter
import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
export const firebaseConfig = environment.firebaseConfig;

// Core
import { CoreModule } from './_core/core.module'

// NGRX
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import * as fromRootStore from './_store';

// Shared/Widget
import { SharedModule } from './_shared/'

// Feature Modules
import {ReservationModule} from './reservations/index'
import {HomeModule} from './static/index'
import {AuthModule} from './auth/index'

import {ModalModule} from './_shared/modal/modal.module'

import {AuthServiceNew} from './auth/services/auth'
import {Store} from 'store'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CoreModule,
    ReactiveFormsModule,
    HomeModule,
    SharedModule,
    ReservationModule.forRoot(),
    AuthModule.forRoot(),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    StoreModule.forRoot(fromRootStore.reducers), /* Initialise the Central Store with Application's main reducer*/
    EffectsModule.forRoot([]), /* Start monitoring app's side effects */
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
