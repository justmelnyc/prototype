import { NgModule } from '@angular/core';

// import { AuthService } from './auth.service';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {TitleResolver} from './resolvers/title.resolver'

@NgModule({
  providers: [TitleResolver],
  imports:   [AngularFireAuthModule]
})
export class CoreModule { }
