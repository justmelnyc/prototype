import {ModuleWithProviders, NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import {LoginComponent} from './components/login'
import {SharedModule} from '../_shared/index'
import {AuthServiceNew} from './services/auth'
import {AuthGuard} from './guards/auth.guard'

const routes: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthServiceNew,
        AuthGuard
      ]
    };
  }
}
