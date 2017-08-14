import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../_shared/';

import { UsersComponent } from './user/users';
import {  ProfileComponent} from './user/profile'
import { UserProfileComponent } from './user/user-profile'


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id', component: ProfileComponent },
  { path: ':id/edit', component: UsersComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent, UserProfileComponent, ProfileComponent]
})
export class UsersModule { }
