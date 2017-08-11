import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { UsersComponent } from './user/users';
import { UserProfileComponent } from './user/profile';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id', component: UserProfileComponent },
  { path: ':id/edit', component: UsersComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent, UserProfileComponent]
})
export class UsersModule { }
