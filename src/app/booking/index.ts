import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: '', component: BookingComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
