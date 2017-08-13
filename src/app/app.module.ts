import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app.routes'
import { AppComponent } from './app.component'

///// Start FireStarter
import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
export const firebaseConfig = environment.firebaseConfig

// Core
import { CoreModule } from './_core/core.module'

// Shared/Widget
import { SharedModule } from './_shared/shared.module'

// Feature Modules
import {BookingModule} from './booking/index'
import {HomeModule} from './home/index'
import {ModalModule} from './_shared/modal/modal.module'

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
    BookingModule,
    HomeModule,
    SharedModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
