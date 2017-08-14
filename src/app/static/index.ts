import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared';
import { ContactComponent } from './pages/contact';
import {ReactiveFormsModule} from '@angular/forms'
import {HomeComponent} from './pages/home'

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
  { path: 'tos', component: ContactComponent, data: { animation: 'tos' } }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, ContactComponent]
})
export class HomeModule { }
