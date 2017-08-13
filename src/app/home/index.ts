import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home';
import { SharedModule } from '../_shared/shared.module';
import { ContactComponent } from './home/contact';
import { LoginComponent } from './home/login'
import {ReactiveFormsModule} from '@angular/forms'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tos', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, ContactComponent, LoginComponent]
})
export class HomeModule { }
