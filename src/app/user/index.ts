import {ModuleWithProviders, NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../_shared/';

import { UsersComponent } from './user/users';
import {  ProfileComponent} from './user/profile'
import { UserProfileComponent } from './user/user-profile'
import {UsersService} from './services/users'


const routes: Routes = [
  { path: '', component: UsersComponent, data: { animation: 'users' } },
  { path: ':id', component: ProfileComponent, data: { animation: 'users' } },
  { path: ':id/edit', component: UsersComponent, data: { animation: 'users' } }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent, UserProfileComponent, ProfileComponent]
})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [
        UsersService
      ]
    };
  }
}
